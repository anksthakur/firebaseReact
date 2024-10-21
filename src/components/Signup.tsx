import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Signup() {
    const [formData, setFormdata] = useState<any>({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState<any>({});
    const router = useNavigate();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    }

    const validate: any = () => {
        const newError:any = {};
        const { name, email, password, confirmPassword } = formData;
        if (!name) {
            newError.name = "Name is required";
        }
        if (!email) {
            newError.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newError.email = "email is invalid";
        }
        if (!password) {
            newError.password = 'Password is required';
        } else if (password.length < 6) {
            newError.password = "password must be at least 6 characters";
        }
        if (password !== confirmPassword) {
            newError.confirmPassword = "password do not matched";
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validate()) {
            localStorage.setItem("data",JSON.stringify(formData));
            router('/signin');
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
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your Name"
                            required
                        />
                        {error.name && <p className="text-red-500">{error.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                        />
                         {error.email && <p className="text-red-500">{error.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                         {error.password && <p className="text-red-500">{error.password}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                         {error.confirmPassword && <p className="text-red-500">{error.confirmPassword}</p>}
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
