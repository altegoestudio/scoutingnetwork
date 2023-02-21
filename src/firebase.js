import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore/lite';

console.log("hola");

const firebaseConfig = {
  apiKey: "AIzaSyCZVPfGMyufpLRk0ydoXQRSfV7FHuCcoPs",
  authDomain: "scoutingnetwork-3b069.firebaseapp.com",
  projectId: "scoutingnetwork-3b069",
  storageBucket: "scoutingnetwork-3b069.appspot.com",
  messagingSenderId: "446252563481",
  appId: "1:446252563481:web:99d07b2d46fa99a86a7e88"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);





async function createCRUD(colID){
  const coleccion = collection(db, colID);
  const adder = await addDoc(coleccion, {nombre: "juan carlos"});
  console.log("agregado");
}
export async function readCRUD(colID){
  console.log("hola read")
  const coleccion = collection(db, colID);
  const documentos = await getDocs(coleccion);
  const documentosList = documentos.docs.map(doc => doc.data());
//  console.log(documentosList);
  return documentosList;
}
async function updateCRUD(docID){
  const documento = doc(db, 'players', docID);
  const editer = await updateDoc(documento, {nombre: "juan carlos alonzo"});
  console.log("editado");
}
async function deleteCRUD(docID){
  const documento = doc(db, 'players', docID);
  const editer = await deleteDoc(documento);
  console.log("eliminado");
}
