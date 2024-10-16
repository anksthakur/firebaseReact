import { FaFacebook } from "react-icons/fa";

export default function FacebookButton(){
    //bg-green-400 text-white
    return<div>
        <button className="w-full rounded-md py-2 px-2 hover:bg-blue-500 flex border-2 border-black items-center gap-2"><span><FaFacebook /></span>Facebook</button>
        </div>
}