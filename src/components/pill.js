import ok from '../img/ok.png';

export default function Pill(props){
  const img = props.img;
  const plan = props.plan;
  const description = props.description;
  const price = props.price;
  const benefits = props.benefits;
  const hl = props.hl;

  return(
    <div className={hl ? "pill highlight" : "pill"}>
      <div className="pill_img">
        <img src={img}/>
      </div>
      <div className="pill_plan">
        {plan}
      </div>
      <div className="pill_description">
        {description}
      </div>
      <div className="pill_price">
        {price}
      </div>
      <div className="pill_submit">
        <div>Suscribirme</div>
      </div>
      {benefits.map( (benefit)=>(
        <div className="pill_benefit">
          <img src={ok}/>
          <p>{benefit}</p>
        </div>
      ))}
    </div>
  )
}
