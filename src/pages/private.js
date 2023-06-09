//React
import * as React from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
//firebase
import {readCRUD} from '../firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Components
import Tabla from '../components/tabla.js';
import PlayersCard from '../components/playersCard.js';

//MUI
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

//AUTH
const auth = getAuth();
var online = false;

//// TODO: hacer una funcion modular
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    online = true;
    console.log("Welcome," + uid);
  } else {
    console.log("Welcome, unknow user");
  }
});

export default function Private(){
  const navigate = useNavigate();
  const [bkdata, setBkdata] = useState([]);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [inputSearch, setInputSearch] = useState([]);
  const [search, setSearch] = useState([]);


  const [category, setCategory] = useState(null);
  const [position, setPosition] = useState(null);





  const listCategory = bkdata.reduce( (acc, player) => {
    var indice = acc.findIndex(item => item.category == player.category);
    if(indice == -1){
      acc.push(player);
    }
    return acc
  }, [])

  const listPosition = bkdata.reduce( (acc, player) => {
    var indice = acc.findIndex(item => item.position == player.position);
    if(indice == -1){
      acc.push(player);
    }
    console.log(acc);
    return acc
  }, [])





  useEffect(() => {
    const fetchData = async () => {
      var newData =  await readCRUD('players');
      setBkdata(newData);
      setData(newData);
      setFiltered(newData);
      setSearch(newData);
    }
    fetchData().catch(console.error);
  }, []);




  const getFiltrar = () => {

    var newFilter = data
    .filter( player => {
        return category == null ? player : player.category == category;
    })
    .filter( player => {
        return position == null ? player : player.position == position;
    })

    setFiltered(newFilter);
    setSearch(newFilter);
  }

  const deleteFiltros = () => {
    setFiltered(bkdata);
    setCategory(null);
    setPosition(null);
    setSearch(bkdata);
  }


  const handleSearch = (event) => {
    setInputSearch(event.target.value);
    var searchFiltrado = filtered.filter( player => {
      let
      playerName = player.name.toLowerCase(),
      playerLastname = player.lastname.toLowerCase(),
      playerFullName = playerName + " " + playerLastname,
      tofind = event.target.value.toLowerCase(),
      tofind_noDiacritics = sinDiacriticos(tofind);


      return playerFullName.includes(tofind_noDiacritics);
    })
    setSearch(searchFiltrado);
  };

  let sinDiacriticos = (()=>{
      let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
           a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
          re = new RegExp('['+de+']' , 'ug');

      return texto =>
          texto.replace(
              re,
              match => a.charAt(de.indexOf(match))
          );
  })();


  if(online){
    return (
      <>
        <main>
          <div className="private_sections">
            <div className="private_sections_fields">
              <div className="private_sections_fields_flex">

                <h2>Buscador por nombre</h2>
                <TextField
                  id="search-field"
                  label="Buscar..."
                  variant="outlined"
                  value={inputSearch}
                  onChange={handleSearch}
                />


                <h2>Filtros</h2>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                  <Select
                    labelId="age-select"
                    id="age-select"
                    value={category}
                    label="Age"
                    onChange={e => setCategory(e.target.value)}
                  >
                    <MenuItem value={null}>All</MenuItem>
                    {listCategory.map( (a, i) => (
                      <MenuItem value={a.category.toString()} key={i}> {a.category.toString()} </MenuItem>
                    ))}


                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Position</InputLabel>
                  <Select
                    labelId="position-select"
                    id="position-select"
                    value={position}
                    label="position"
                    onChange={e => setPosition(e.target.value)}
                  >
                    <MenuItem value={null}>All</MenuItem>
                    {listCategory.map( (a, i) => (
                      <MenuItem value={a.position} key={i}> {a.position} </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className="botoneraFiltros">
                  <div className="btn btn_filter" onClick={getFiltrar}>Filtrar</div>
                  <div className="btn btn_filter" onClick={deleteFiltros}>Borrar filtros</div>
                </div>




              </div>
            </div>
            <div className="private_sections_list">
              <PlayersCard data={search}/>
            </div>
          </div>
        </main>

      </>
    )
  }else{
    return (
      navigate("/login")
    )
  }

}
