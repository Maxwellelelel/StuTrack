import './register.css';

function register() {
    return(
        <body>
            <h1>StuTrack</h1>
            <div id="root">
                <div class="register-con" id="login-con-id">
                <div class="head" id="login-con-head-id">
                    <h2>Create Account</h2>
                </div>
                <hr/>
                <div class="credentials" id="login-con-credentials-id">
                <div class="input-con" id="login-con-credentials-username-id">
                    <p>Username</p>
                    <input type="text" name="username-input" maxlength="128" placeholder="Username"/>
                <div class="input-con" id="login-con-credentials-email-id">
                    <p>Email</p>
                    <input type="text" name="email-input" maxlength="128" placeholder="Email"/>
                </div>
                <div class="input-con" id="login-con-credentials-password-id">
                    <p>Password</p>
                    <input type="password" name="password-input" maxlength="128" placeholder="Password"/>
                </div>
                </div>
                </div>
                <div class="button">
                    <p>Create Account</p>
                </div>
                <div class="login">
                    <a href="login.js">Sign in</a>
                </div>
                </div>
            </div>
        </body>
    );
}

export default register