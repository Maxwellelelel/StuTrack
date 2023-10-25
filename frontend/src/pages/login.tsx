import {Link} from "react-router-dom";
import { CustomButton } from "../components/customButton";
import { CustomForm } from "../components/customForm";

export function LoginPage() {
    return (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center font-customFont">
            <div className="w-[22rem] h-[32rem] bg-white shadow-2xl rounded-[12px] font-customFont">
                <h2 className="text-3xl text-center py-[2rem] h-20">Login</h2>
                <div className="py-[1rem] flex flex-col gap-y-4">
                    <CustomForm component={'Username'} htmlName={'username'}/>
                    <CustomForm component={'Password'} htmlName={'password'}/>
                </div>
                <CustomButton text={'Login'}/>
                <Link to="" className="py-[0.5rem] cursor-pointer hover:text-black transition duration-200 ease-in-out text-customGrey flex items-center justify-center">Forgot password?</Link>
                <Link to="/register" className="py-[1.5rem] ml-[6.8rem] w-fit cursor-pointer hover:text-black transition duration-200 ease-in-out text-customGrey text-lg flex items-center justify-center">Create Account</Link>
            </div>
        </div>
    );
}

