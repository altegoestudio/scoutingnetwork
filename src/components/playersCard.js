import placeholder from "../img/placeholder.png";
import pin from "../img/pin.png";
import {Link} from "react-router-dom";


export default function PlayersCard(props){
  return(
    <div>
      <h2 className="playersCard_title">Lista de Jugadores</h2><span className="playersCard_count">{props.data.length} encontrados</span>
      {props.data.map((player, index) => (
        <Link key={index} to={ '/players/' + index} className='links-none'>
          <div className='playersCard'>
            <div className="playersCard_container">
              <div className="playersCard_container_img">
                <img src={placeholder}/>
              </div>
              <div className="playersCard_container_text">
                <div className="playersCard_container_text_position">
                  {player.category}
                </div>
                <div className="playersCard_container_text_name">
                  {player.name} {player.lastname}
                </div>
                <div className="playersCard_container_text_city">
                  <img src={pin}/>{"Ciudad" || player.city}, {player.country}
                </div>
                <div className="playersCard_container_text_club">
                  <span className="playersCard_container_text_club_actual">{player.position}</span> | <span className="playersCard_container_text_club_pais">{"sin club" || player.club}</span>
                </div>
              </div>
            </div>
            </div>
        </Link>
      ))}
    </div>

  )
}
