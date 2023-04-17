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
    console.log(uid);
    online = true;
  } else {
    console.log("Welcome, unknow user");
  }
});

export default function Private(){
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [foot, setFoot] = useState('');
  const [filter, setFilter] = useState([]);
  const [aux, setAux] = useState([]);
  const [getcategories, setGetcategories] = useState([]);



  useEffect(() => {

    const fetchData = async () => {
      var newData =  await readCRUD('players');
      console.log(newData[0].country);
      setData(newData);
      setFilter(newData);
      categories();
    }
    fetchData().catch(console.error);
  }, []);

  const categories = () => {
    const arraySinRepetidos = [... new Set(filter.category)];
    console.log(arraySinRepetidos);
  }

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const botonFiltrar = () => {

    var filtered = data.filter( player => {
        return player.category == category;
    })
    setFilter(filtered);
  }

  const borrarFiltros = () => {
    setFilter(data);
    setCategory(null);
  }


  const handleSearch = (event) => {

    setSearch(event.target.value);
    var searchFiltrado = data.filter( player => {
      let
      playerName = player.name.toLowerCase(),
      playerLastname = player.lastname.toLowerCase(),
      playerFullName = playerName + " " + playerLastname,
      tofind = event.target.value.toLowerCase(),
      tofind_noDiacritics = sinDiacriticos(tofind);


      return playerFullName.includes(tofind_noDiacritics);
    })
    setFilter(searchFiltrado);
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
                  value={search}
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
                    onChange={handleCategory}
                  >
                    {getcategories.map( (a, i) => (
                      <MenuItem value={a.category} key={i}>{a.category}</MenuItem>
                    ))}
                    <MenuItem value={null}>All</MenuItem>
                    <MenuItem value={"2007"}>2007</MenuItem>
                    <MenuItem value={"2008"}>2008</MenuItem>
                    <MenuItem value={"2009"}>2009</MenuItem>
                  </Select>
                </FormControl>

                <div className="btn" onClick={botonFiltrar}>Filtrar</div>
                <div className="btn" onClick={borrarFiltros}>Borrar filtros</div>



              </div>
            </div>
            <div className="private_sections_list">
              <PlayersCard data={filter}/>
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
