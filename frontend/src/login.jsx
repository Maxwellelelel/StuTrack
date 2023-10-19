import './login.css';
import { CustomButton } from "./button";

export function LoginPage() {
    return (
        <div>
            <h1>StuTrack</h1>
            <div id="root">
                <div class="login-con" id="login-con-id">
                    <div class="head" id="login-con-head-id">
                        <h2>Login</h2>
                    </div>
                    <hr/>
                    <div class="credentials" id="login-con-credentials-id">
                        <div class="input-con" id="login-con-credentials-username-id">
                            <p>Username</p>
                            <input type="text" name="username-input" maxlength="128" placeholder="Username"/>
                        </div>
                        <div class="input-con" id="login-con-credentials-password-id">
                            <p>Password</p>
                            <input type="password" name="password-input" maxlength="128" placeholder="Password"/>
                        </div>
                    </div>
                    <CustomButton text={'Login'}/>
                    <div class="register">
                    <a href="register.jsx">Create Account</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
