import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";


export default function GoogleButton() {
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const handleGoogleSignup = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;
            const userToken = await user.getIdToken();
            localStorage.setItem("firebaseToken", userToken);
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    return <div>
        <button onClick={handleGoogleSignup} className="w-full rounded-md py-2 hover:bg-blue-500 px-2 flex items-center gap-2 border-2 border-black"><span><FcGoogle /></span>Google</button>
    </div>
}