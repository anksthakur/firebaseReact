import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";

export default function GithubButton(){

    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const handleGithubLogin = async()=>{
        try {
            const res = await signInWithPopup(auth,githubProvider);
            const user = res.user;
            console.log(user);
            const token = await user.getIdToken()
            console.log("git token :",token)
            localStorage.setItem("githubToken",token)
            navigate('/news')
        } catch (error) {
            console.log(error)
        }
    }

    return<div>
        <button onClick={handleGithubLogin} className="w-full rounded-md py-2 px-2 hover:bg-blue-500 flex border-2 border-black items-center gap-2"><span><FaGithub /></span>Github</button>
        </div>
}