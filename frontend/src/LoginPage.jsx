import './login.css';
import Link from "react-router-dom";
import { CustomButton } from "./CustomButton";
import { CustomForm } from "./CustomForm";
import { RegisterPage } from "./RegisterPage";
import { CustomLogo } from "./CustomLogo";

export function LoginPage() {
    return (
        <div id="root">
            <div className="login-con" id="login-con-id">
                <CustomLogo/>
                <CustomForm page={'login'}/>
                <CustomButton text={'Login'}/>
                <div className="register">
                    <Link to="./RegisterPage">Create Account</Link>
                </div>
            </div>
        </div>
    )
}
