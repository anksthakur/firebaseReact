import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Signup() {
    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const [name,setName] = useState<any>('')
    const router = useNavigate();

    const adminEmail = "anup.kumar@contriverz.com"
    const adminPassword = "Admin@123"

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (email === adminEmail && password === adminPassword) {
            router('/signin');
        } else {
            alert("check your credential");
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
                <h1 className="font-bold text-2xl text-center mb-6">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            type="email"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-4 ">
                        <button className="w-full bg-green-400 text-white rounded-md py-2 hover:bg-blue-500 ">
                            Sign Up
                        </button>
                    </div>
                    <div className="text-center mb-4 ">
                        <p className="text-sm">
                            Already have an account?{' '}
                            <NavLink to="/signin" className="text-blue-500 hover:underline">
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}
