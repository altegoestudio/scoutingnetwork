import brian from '../img/brian.png';
import diego from '../img/diego.png';

export default function About(){
  return(
    <div className="about" id='about-us'>
      <div className="about_container">
        <div className="about_container_img">
          <img src={brian}/>
        </div>
        <div className="about_container_text">
          <h3 className="about_container_text_title">
          ¡HOLA,<br/>
          SOY BRIAN!
          </h3>
          <p className="about_container_text_p">
          Me dedico al anasilis deportivo especializado en Fútbol desde el 2017.<br/><br/>
          Actualmente ayudo a los clubes a encontrar la próxima gran estrella. Apasionado por ayudar a los jugadores jóvenes a alcanzar su máximo potencial.<br/><br/>
          Tengo un pasado en Alianza Atlético de Sullana en Perú y Club Celaya de Mexico. Actualmente soy analista en Carlos Mannucci, Peru.
          </p>
        </div>
      </div>
      <div className="about_container otro">
        <div className="about_container_text">
          <h3 className="about_container_text_title left">
          ¡HOLA,<br/>
          SOY DIEGO!
          </h3>
          <p className="about_container_text_p left">
          Soy periodista deportivo y administrador de empresas de profesión.
          <br/><br/>
          Amante del futbol desde los 11 años y apasionado por la táctica.
          <br/><br/>
          Mi sueño es lograr una plataforma mundial para que los jóvenes puedan tener oportunidades en el fútbol.
          </p>
        </div>
        <div className="about_container_img">
          <img src={diego}/>
        </div>
      </div>
    </div>
  )
}
