import { NavLink } from "react-router-dom";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";

export default function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
                <h1 className="font-bold text-2xl text-center mb-6">Sign Up</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            type="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            type="password"
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
                    <div className="text-center mb-4"><p>---------- Or ----------</p></div>
                    <div className="text-center mb-4"><p>Sign up with</p></div>
                   
                    <div className="flex justify-center gap-3 mb-4">
                        <GoogleButton/>
                        <FacebookButton/>
                    </div>
                </form>
            </div>
        </div>
    );
}
