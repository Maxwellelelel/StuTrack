import {Link} from "react-router-dom";
import { CustomButton } from "../components/customButton";
import { FormUsername } from "../components/customForm/formUsername";
import { FormEmail } from "../components/customForm/formEmail";
import { FormPassword } from "../components/customForm/formPassword";

export function RegisterPage() {
    return (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-96 h-[34rem] bg-white shadow-2xl rounded-[12px]">
                <h2 className="text-3xl text-center py-[2rem]">Create Account</h2>
                <div className="flex flex-col gap-y-4">
                    <FormUsername/>
                    <FormEmail/>
                    <FormPassword/>
                </div>
                <CustomButton text={'Register'}/>
                <Link to="/login" className="py-[0.5rem] cursor-pointer hover:text-black transition duration-200 ease-in-out text-customGrey text-lg flex items-center justify-center">Sign in</Link>
            </div>
        </div>
    );
}