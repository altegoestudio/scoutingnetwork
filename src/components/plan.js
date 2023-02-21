import Pill from "./pill";
import bronce from '../img/bronce.png';
import oro from '../img/oro.png';
import plata from '../img/plata.png'

export default function Plan(){
  return(
    <div className="plan" id="plans">
      <div className="plan_container">
        <div className="plan_container_title">
          <h3>Elija el plan adecuado para su búsqueda de talento</h3>
          <p>Cuento con una base de datos actializada constantemente con Jóvenes Promesas del futbol de Sudamerica y Africa. </p>
        </div>
        <div className="plan_container_pills">
          <Pill
            hl={false}
            img={bronce}
            plan={'Bronce'}
            description={'Un plan hecho a tu medida.'}
            price={'$15'}
            benefits={[
              'Acceso a base de dato',
              '3 videos mensuales',
              '3 CV´s mensuales'
            ]}
          />
          <Pill
            hl={true}
            img={plata}
            plan={'Plata'}
            description={'Un plan hecho a tu medida.'}
            price={'$30'}
            benefits={[
              'Acceso a base de datos',
              'Videos ilimitados',
              '3 CV´s mensuales',
              '3 Partidos completos'
            ]}
          />
          <Pill
            hl={false}
            img={oro}
            plan={'Oro'}
            description={'Un plan hecho a tu medida.'}
            price={'$45'}
            benefits={[
              'Acceso a base de datos',
              'Videos ilimitados',
              'CV´s mensuales',
              'Partidos completos'
            ]}
          />
        </div>

      </div>
    </div>
  )
}
