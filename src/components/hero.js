import herobg from "../img/herobg.png";

export default function Hero(){
  return(
    <div className="hero">
      <div className="hero_text">
        <h1>
          EXCELENCIA<br/>
          EN FÚTBOL<br/>
          SCOUTING
        </h1>
        <p>
          El mejor negocio de un club de fútbol es usar su academia para que un jugador joven pueda crecer profesionalmente. Nosotros nos dedicamos a encontrar ese jugador.
        </p>
        <div className="botonera">
          <div className="btn">
            Contacto
          </div>
          <div className="btn btn-alt">
            Nuestros Planes
          </div>
        </div>

      </div>
      <img src={herobg}/>
    </div>
  )
}
