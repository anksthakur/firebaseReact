import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";
import GithubButton from "./GithubButton";

export default function Signin() {
    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const router = useNavigate();

const data = localStorage.getItem("data")
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData:any = localStorage.getItem("data")
        const dataForm = JSON.parse(formData)
        if (email === dataForm?.email && password === dataForm?.password) {
            localStorage.setItem("email",email)
            router('/');
        } else {
            alert("check your credential");
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
                <h1 className="font-bold text-2xl text-center mb-6">Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <button className="w-full bg-green-400 text-white rounded-md py-2 hover:bg-blue-600">
                            Sign Up
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">
                            Create an account?{' '}
                            <NavLink to="/signup" className="text-blue-500 hover:underline">
                                Sign up
                            </NavLink>
                        </p>
                    </div>
                    <div className="text-center mb-4"><p>---------- Or ----------</p></div>
                    <div className="text-center mb-4"><p>Sign up with</p></div>

                    <div className="flex justify-center gap-3 mb-4">
                        <GoogleButton />
                        <FacebookButton />
                        <GithubButton/>
                    </div>
                </form>
            </div>
        </div>
    );
}
