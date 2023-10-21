export function FormHeader({ page }) {
    let header= "Login"
    if (page === "register") {
        header = "Create Account"
    }
    return (
        <div>
            <div className="head" id="login-con-head-id">
                <h2>{ header }</h2>
            </div>
            <hr/>
        </div>
    )
}