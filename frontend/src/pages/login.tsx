import {Link} from "react-router-dom";
import { CustomButton } from "../components/customButton";

export function LoginPage() {
    return (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center font-customFont">
            <div className="w-[20rem] h-[32rem] bg-white shadow-2xl rounded-[12px] font-customFont">
                <h1 className="text-3xl text-center py-[2rem]">Login</h1>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2 px-[2rem]">
                        <label className="px-[0.3rem]" htmlFor="username">Username</label>
                        <input className="p-[0.5rem] focus:outline-none focus:border-b-gray-400 bg-gray-100 border-b-2 hover:border-b-gray-400 transition duration-200 ease-in-out"
                               type="text"
                               name="username"
                               placeholder="Username"
                               maxLength={128}/>
                    </div>
                    <div className="flex flex-col gap-y-2 px-[2rem]">
                        <label className="px-[0.3rem]" htmlFor="password">Password</label>
                        <input className="p-[0.5rem] focus:outline-none focus:border-b-gray-400 bg-gray-100 border-b-2 hover:border-b-gray-400 transition duration-200 ease-in-out"
                               type="text"
                               name="password"
                               placeholder="Password"
                               maxLength={128}/>
                    </div>
                </div>
                <CustomButton text={'Login'}/>
                <Link to="/register" className="py-[0.5rem] cursor-pointer hover:text-black transition duration-200 ease-in-out text-customGrey text-lg flex items-center justify-center">Register</Link>
            </div>
        </div>
    );
}