import './register.css';
import { Link } from "react-router-dom";
import { CustomButton } from "./components/CustomButton";
import { CustomForm } from "./components/customForm/CustomForm";
import { CustomLogo } from "./components/CustomLogo";

export function RegisterPage() {
    return(
        <div id="root">
            <div className="register-con" id="login-con-id">
                <CustomLogo/>
                <CustomForm page={'login'}/>
                <CustomButton text={'Login'}/>
                <div className="login">
                    <Link to={"./LoginPage"}>Sign in</Link>
                </div>
            </div>
        </div>
    )
}