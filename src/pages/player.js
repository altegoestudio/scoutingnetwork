import {useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import {readCRUD} from '../firebase.js';
import cancha from '../img/cancha.png';
import player from '../img/player.png';

export default function Private(){
  const {id} = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //console.log(data);
    const fetchData = async () => {
      var newData =  await readCRUD('players');
      setData(newData);
      setLoading(false);
    }
    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      {!loading &&
        <div className="card">
          <div className="card_card">
            <div className="card_card_data">
              <div className="card_card_data_text">
                <p className="card_card_data_text-player">{data[id].name}  {data[id].lastname}</p>
                <p className="card_card_data_text-club" >{data[id].category}</p>
                <p className="card_card_data_text-description">
                Knuckle rally save bat center field full count swing grass. League can of corn slide doubleheader hall of fame perfect game dodgers dodgers bunt. Warning track cup of coffee flyout streak ejection bush league left field astroturf warning track.
                </p>

                <p className="card_card_data_text-data">Pais: <span>{data[id].country}</span></p>
                <p className="card_card_data_text-data">Categoria:  <span>{data[id].category}</span></p>
                <p className="card_card_data_text-data">Posición: <span>{data[id].position}</span></p>
                <p className="card_card_data_text-data">Club:  <span>{ "sin data" || data[id].club}</span></p>
              </div>
              <div className="card_card_data_text">
                <img src={cancha}/>
              </div>
              <div className="card_card_data_text">
                <img src={player}/>
              </div>
            </div>
            <div className="card_card_botonera">
              <div className="btn btn2">CV Deportivo</div>
              <div className="btn btn2">Video</div>
              <div className="btn btn2">Partidos Completos</div>
            </div>
          </div>
        </div>
      }
      {loading &&
        <div className="card">Cargando...</div>
      }

    </div>

  )
}
/*
<div>
  {data[id].name}<br/>
  {data[id].lastname}<br/>
  <br/>
  {data[id].city}<br/>
  <br/>
  <br/>
  {data[id].foot}<br/>
  <br/>
</div>
*/
