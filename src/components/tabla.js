import {Link} from "react-router-dom";

export default function Tabla(props){
  return(
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
          <th> Mas info </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((player, index) => (
            <tr>
              <td>{player.name} {player.lastname}</td>
              <td>{player.category}</td>
              <td>{player.city}</td>
              <td>{player.country}</td>
              <td>{player.position}</td>
              <td>{player.foot}</td>
              <td>{player.club}</td>
              <td><Link key={index} to={ '/players/' + index}> ver mas</Link></td>
            </tr>

        ))}
      </tbody>
    </table>
  )
}
