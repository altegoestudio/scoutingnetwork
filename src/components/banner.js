import banner from "../img/banner.png";

export default function Banner(){
  return(
    <div className="banner">
      <div className="banner_text">
        <p className="banner_text-mision">Visión y misión</p>
        <h3>
        Ser el nexo para que todas las futuras promesas del fútbol mundial tengan una oportunidad en el fútbol moderno
        </h3>
      </div>
      <img src={banner}/>
    </div>
  )
}
