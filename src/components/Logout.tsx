import { signOut } from "firebase/auth"
import { auth } from "../lib/firebase"
import { useNavigate } from "react-router-dom"

export default function Logout(){
    const router = useNavigate();
    function googleLogout (){
        signOut(auth);
        localStorage.removeItem('firebaseToken');
        router('/signup');
    }
    return <div>
        <button className="border-2 border-black  bg-red-300 hover:bg-green-400 rounded-md px-2 py-2" onClick={googleLogout}>Logout</button>
        </div>
}