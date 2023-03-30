import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const auth = getAuth();
/*
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    const uid = user.uid;

    console.log(user.emailVerified);
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
    console.log("no hay nadie");
  }
});
*/
export default function Login(){

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleRegister = (event)=>{
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);


    signInWithEmailAndPassword(auth, event.target[0].value, event.target[1].value)
    .then((userCredential) => {
      console.log(userCredential.user);
      const user = userCredential.user;
      navigate("/");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }





  return(
    <div>
      <main className="login_main">
        <div className="login">
          <div className="login_container">
            <form onSubmit={handleRegister} className="login_container_form">
              <h2>👋 Welcome back!</h2>
              <label>Email</label><br/>
              <input type='text'/>
              <br/>
              <label>Password</label><br/>
              <input type='text'/>
              <button type='submit'> Login </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
