import {useParams} from "react-router-dom";


export default function Private(){
  const {id} = useParams();


  return (
    <>
      <p>Player {id}</p>
    </>
  )
}
