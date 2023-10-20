import './login.css';
import { Link }from "react-router-dom";
import { CustomButton } from "./components/CustomButton";
import { CustomForm } from "./components/customForm/CustomForm";
import { CustomLogo } from "./components/CustomLogo";

export function LoginPage() {
    return (
        <div id="root">
            <div className="login-con" id="login-con-id">
                <CustomLogo/>
                <CustomForm page={'login'}/>
                <CustomButton text={'Login'}/>
                <div className="register">
                    <a>Sign in</a>
                </div>
            </div>
        </div>
    )
}