import tick from '../img/tick.png'
export  default function Services(){
  return(
    <div className="services">
      <div className="services_container">
        <h3>NUESTROS SERVICIOS</h3>
        <div className="services_container_enum">
          <div className="services_container_enum_pill">
            <img src={tick}/>
            <p>Base de datos de jugadores</p>
          </div>
          <div className="services_container_enum_pill">
            <img src={tick}/>
            <p>Videos personalizados</p>
          </div>
          <div className="services_container_enum_pill">
            <img src={tick}/>
            <p>Informes futbolísticos</p>
          </div>
          <div className="services_container_enum_pill">
            <img src={tick}/>
            <p>Partidos completos</p>
          </div>
        </div>
      </div>

    </div>
  )
}
