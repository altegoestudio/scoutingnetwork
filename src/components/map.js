import map from '../img/map.png';

export default function Map(){
  return(
    <div className='map'>
      <div className="map_container">
        <div className="map_container_title">
          <h3>
          Nos estamos expandiendo<br/>
          a todo sudamérica y áfrica
          </h3>
        </div>
        <div className="map_container_description">
          Actualmente tenemos base en Perú, México, Gambia y Zambia
        </div>
        <div className="map_container_img">
          <img src={map}/>
        </div>
      </div>
    </div>
  )
}
