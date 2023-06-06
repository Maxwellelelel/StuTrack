import './login.css';

function login() {
    return (
        <body>
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
                    <div class="button">
                        <p>Login</p>
                    </div>
                    <div class="register">
                    <   a href="register.js">Create Account</a>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default login