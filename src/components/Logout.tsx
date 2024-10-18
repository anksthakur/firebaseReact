import { signOut } from "firebase/auth"
import { auth } from "../lib/firebase"
import { useNavigate } from "react-router-dom"

export default function Logout(){
    const router = useNavigate();
    function logOut (){
        signOut(auth);  
        localStorage.clear();
        router('/');
    }
    return <div>
        <button className="border-2 border-black  bg-orange-800 hover:bg-orange-200 rounded-md px-2 py-2" onClick={logOut}>Logout</button>
        </div>
}