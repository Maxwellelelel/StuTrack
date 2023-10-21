import { FormUsername } from "./FormUsername";
import { FormPassword} from "./FormPassword";
import { FormEmail} from "./FormEmail";
import { FormHeader } from "./FormHeader";

export function CustomForm({ page }) {
    return (
        <div>
            <FormHeader page={ page }/>
            <div className="credentials" id="login-con-credentials-id">
                <FormUsername/>
                {page === "register" &&
                    <FormEmail/>
                }
                <FormPassword/>
            </div>
        </div>
    )
}