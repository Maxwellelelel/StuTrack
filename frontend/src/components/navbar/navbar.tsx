import { useSessionStorage } from "../../hooks/useSessionStorage.tsx";
import { KEY_USER_LOGGED_IN } from "../../utils/sessionKeys.ts";
import { LoginSection } from "./loginSection.tsx";
import { LogoutSection } from "./logoutSection.tsx";

export function Navbar() {
    const [isLogged] = useSessionStorage(KEY_USER_LOGGED_IN)
    let design = "px-[30px] py-[6px] h-10 rounded-xl text-white text-lg cursor-pointer hover:bg-black transition duration-200 ease-in-out"
    return (
        <div className="w-screen h-16 bg-blue-600 z-20 fixed flex items-center justify-between">
            <div className="px-2">
                <button className={ design }>Home</button>
                <button className={ design }>Projects</button>
                <button className={ design }>Explore</button>
                <button className={ design }>About</button>
            </div>
            <div>
                {isLogged ? <LogoutSection/> : <LoginSection/>}
            </div>
        </div>
    );
}
