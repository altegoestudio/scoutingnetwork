import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import {readCRUD} from '../firebase.js';
//import { initializeApp } from "firebase/app";
//import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore/lite';

/*
const firebaseConfig = {
  apiKey: "AIzaSyCZVPfGMyufpLRk0ydoXQRSfV7FHuCcoPs",
  authDomain: "scoutingnetwork-3b069.firebaseapp.com",
  projectId: "scoutingnetwork-3b069",
  storageBucket: "scoutingnetwork-3b069.appspot.com",
  messagingSenderId: "446252563481",
  appId: "1:446252563481:web:99d07b2d46fa99a86a7e88"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


*/
export default function Private(){
  const [data, setData] = useState([]);
  /*
  async function readCRUD(colID){
    const coleccion = collection(db, colID);
    const citySnapshot = await getDocs(coleccion);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    setData(cityList);
    console.log(cityList[0].city);
    //return cityList
  }
  */
  useEffect(() => {
    console.log(data);
    const fetchData = async () => {
      var newData =  await readCRUD('players');
      setData(newData);
      console.log(newData);
    }
    fetchData().catch(console.error);



  }, []);

  return (
    <>
      <main>
      <div class="player_container">
        <h4>Buscador</h4>
        <input type='text' class="player_search" placeholder='Buscar...'/>
      </div>

      <table class="blueTable">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Ciudad</th>
            <th>Pais</th>
            <th>Posicion</th>
            <th>Pie</th>
            <th>Club</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player) => (
            <tr>
              <td>{player.name} {player.lastname}</td>
              <td>{player.category}</td>
              <td>{player.city}</td>
              <td>{player.country}</td>
              <td>{player.position}</td>
              <td>{player.foot}</td>
              <td>{player.club}</td>
            </tr>
          ))}


        </tbody>
      </table>
      </main>

    </>
  )
}
