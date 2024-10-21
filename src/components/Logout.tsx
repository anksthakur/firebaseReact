import { signOut } from "firebase/auth"
import { auth } from "../lib/firebase"
import { useNavigate } from "react-router-dom"

export default function Logout(){
    const router = useNavigate();
    function logOut (){
        signOut(auth);  
        localStorage.removeItem("token");
        localStorage.removeItem('email')
        router('/signin');
    }
    return <div>
        <button className="border-2 text-white border-black  bg-blue-700 hover:bg-blue-400 rounded-md px-2 py-2" onClick={logOut}>Logout</button>
        </div>
}