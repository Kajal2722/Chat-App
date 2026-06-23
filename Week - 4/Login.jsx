import { useState } from "react";
import {auth} from "./firebase";
import {createUserWithEmailAndPassword , signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");

    const signIn = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Success");
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}
    console.log(auth?.currentUser?.email)


    const signInWithGoogle = async(auth,googleProvider)=>{
        try{
        await  signInWithPopup(auth,email,password);
        console.log("Success");
    } catch(error){
        console.log(error);
    }}


    const Logout = async ()=>{
        try{
        await signOut(auth);
        console.log("Success");

    } catch(error){
        console.log(error);
    }}


    return (
        <div>
            <input type="text" placeholder="Email.." onChange={(e)=>setEmail(e.target.value)} />;
            <input type="password" placeholder="Password.." onChange={(e)=> setPassword(e.target.value)} />;
            <button onClick = {signIn}>Sign In</button>

            <button onClick={signInWithGoogle}>Sign In With Google</button>

            <button onClick={Logout}>Logout</button>
        </div>
    )
}
