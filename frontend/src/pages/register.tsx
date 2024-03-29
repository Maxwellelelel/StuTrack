import {Link} from "react-router-dom";
import { CustomButton } from "../components/customButton";
import { CustomForm } from "../components/customForm";

export function RegisterPage() {
    return (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-[22rem] h-[32rem] bg-white shadow-2xl rounded-[12px]">
                <h2 className="text-3xl text-center py-[2rem] h-20">Create Account</h2>
                <div className="py-[1rem] flex flex-col gap-y-4">
                    <CustomForm component={'Username'} htmlName={'username'}/>
                    <CustomForm component={'E-Mail'} htmlName={'mail'}/>
                    <CustomForm component={'Password'} htmlName={'password'}/>
                </div>
                <CustomButton page={'Register'}/>
                <Link to="/login" className="px-[9rem] w-fit cursor-pointer hover:text-black transition duration-200 ease-in-out text-customGrey text-lg flex items-center justify-center">Sign in</Link>
            </div>
        </div>
    );
}