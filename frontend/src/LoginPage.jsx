import './login.css';
import { Link }from "react-router-dom";
import { CustomButton } from "./components/customButton";
import { CustomForm } from "./components/customForm/CustomForm";
import { CustomLogo } from "./components/customLogo";
import {RegisterPage} from "./RegisterPage";

export function LoginPage() {
    return (
        <div id="root">
            <div className="login-con" id="login-con-id">
                <CustomLogo/>
                <CustomForm page={'login'}/>
                <CustomButton text={'Login'}/>
                <li className="register">
                    <a>Sign in</a>
                </li>
            </div>
        </div>
    )
}
