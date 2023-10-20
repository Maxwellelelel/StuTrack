export function CustomForm({page}) {
    if ({page} === "register") {
        return (
            <div>
                <div className="head" id="login-con-head-id">
                    <h2>Create Account</h2>
                </div>
                <hr/>
                <div className="credentials" id="login-con-credentials-id">
                    <div className="input-con" id="login-con-credentials-username-id">
                        <p>Username</p>
                        <input type="text" name="username-input" maxLength="128" placeholder="Username"/>
                        <div className="input-con" id="login-con-credentials-email-id">
                            <p>Email</p>
                            <input type="text" name="email-input" maxLength="128" placeholder="Email"/>
                        </div>
                        <div className="input-con" id="login-con-credentials-password-id">
                            <p>Password</p>
                            <input type="password" name="password-input" maxLength="128" placeholder="Password"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
            <div className="head" id="login-con-head-id">
                <h2>Login</h2>
            </div>
            <hr/>
            <div className="credentials" id="login-con-credentials-id">
                <div className="input-con" id="login-con-credentials-username-id">
                    <p>Username</p>
                    <input type="text" name="username-input" maxLength="128" placeholder="Username"/>
                </div>
                <div className="input-con" id="login-con-credentials-password-id">
                    <p>Password</p>
                    <input type="password" name="password-input" maxLength="128" placeholder="Password"/>
                </div>
            </div>
            </div>
        )
    }
}