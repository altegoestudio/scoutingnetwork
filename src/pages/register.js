import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

export default function Register(){

  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();


  const handleRegister = (event)=>{
    event.preventDefault();
    createUser();

  }

  const handleName = (event)=>{
    setDisplayName(event.target.value)
  }

  const handleEmail = (event)=>{
    setEmail(event.target.value);
  }

  const handlePass = (event) => {
    setPassword(event.target.value);
  }

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log(user);
        console.log(displayName);
        updateProfile(auth.currentUser, {

          displayName: displayName
        }).then(() => {
          navigate("/");
          window.location.reload(false);
        }).catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        console.log(error);
        // ..
      });
  }
  return(
    <div>
    <main className="login_main">
      <div className="login">
        <div className="login_container">
          <form onSubmit={handleRegister} className="login_container_form">
            <h2> 😀<br/>Rellena los datos para registrarte en nuestra pagina</h2>
            <label>Nombre</label><br/>
            <input name='nombre' type='text' onChange={handleName} value={displayName}/>
            <br/>
            <label>Apellido</label><br/>
            <input type='text'/>
            <br/>
            <label>Correo</label><br/>
            <input type='text' onChange={handleEmail}/>
            <br/>
            <label>Nuevo Password</label><br/>
            <input type='text' onChange={handlePass}/>
            <button type='submit'> Registrarse </button>
          </form>
        </div>
      </div>
    </main>

    </div>
  );
}
