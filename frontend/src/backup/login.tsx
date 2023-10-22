import {Link} from "react-router-dom";
import { CustomButton } from "../components/customButton";
import { CustomLogo } from "../components/customLogo";
import { FormUsername } from "../components/customForm/formUsername";
import { FormPassword } from "../components/customForm/formPassword";

export function LoginPage() {
    return (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center font-customFont">
            <div className="w-96 h-[34rem] bg-white shadow-2xl rounded-[12px] font-customFont">
                <h2 className="text-3xl text-center py-[2rem]">Login</h2>
                <div className="flex flex-col gap-y-4">
                    <FormUsername/>
                    <FormPassword/>
                </div>
                <CustomButton text={'Login'}/>
                <Link to="/register" className="py-[0.5rem] cursor-pointer hover:text-black transition duration-200 ease-in-out text-customGrey text-lg flex items-center justify-center">Register</Link>
            </div>
        </div>
    );
}