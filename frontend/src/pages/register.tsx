import {Link} from "react-router-dom";
import { CustomButton } from "../components/customButton";
import { CustomForm } from "../components/customForm";

export function RegisterPage() {
    return (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-[22rem] h-[32rem] bg-white shadow-2xl rounded-[12px]">
                <h2 className="text-3xl text-center py-[2rem] h-20">Create Account</h2>
                <hr className="border-black w-[20rem] ml-4"/>
                <div className="py-[0.5rem] flex flex-col gap-y-4">
                    <CustomForm component={'username'} content={'Username'}/>
                    <CustomForm component={'mail'} content={'E-Mail'}/>
                    <CustomForm component={'password'} content={'Password'}/>
                </div>
                <CustomButton text={'Register'}/>
                <Link to="/login" className="py-[0.5rem] ml-[9rem] w-fit cursor-pointer hover:text-black transition duration-200 ease-in-out text-customGrey text-lg flex items-center justify-center">Sign in</Link>
            </div>
        </div>
    );
}