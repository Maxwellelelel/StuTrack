import './register.css';
import { Link } from "react-router-dom";
import { CustomButton } from "./components/customButton";
import { CustomForm } from "./components/customForm/CustomForm";
import { CustomLogo } from "./components/customLogo";

export function RegisterPage() {
    return(
        <div id="root">
            <div className="register-con" id="login-con-id">
                <CustomLogo/>
                <CustomForm page={'register'}/>
                <CustomButton text={'Register'}/>
                <li className="login">
                    <Link to={"./LoginPage"}>Sign in</Link>
                </li>
            </div>
        </div>
    )
}
