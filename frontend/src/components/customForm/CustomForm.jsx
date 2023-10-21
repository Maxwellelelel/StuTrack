import { FormUsername } from "./FormUsername";
import { FormPassword} from "./FormPassword";
import { FormEmail} from "./FormEmail";
import { FormHeader } from "./FormHeader";

export function CustomForm({ isLogin }) {
    return (
        <div>
            <FormHeader page={ isLogin }/>
            <div className="credentials" id="login-con-credentials-id">
                <FormUsername/>
                {!isLogin &&
                    <FormEmail/>
                }
                <FormPassword/>
            </div>
        </div>
    )
}