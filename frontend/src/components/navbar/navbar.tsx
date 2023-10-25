import { useSessionStorage } from "../../hooks/useSessionStorage.tsx";
import { KEY_USER_LOGGED_IN } from "../../utils/sessionKeys.ts";
import { LoginSection } from "./loginSection.tsx";
import { LogoutSection } from "./logoutSection.tsx";

export function Navbar() {
    const [isLogged] = useSessionStorage(KEY_USER_LOGGED_IN)
    let design = "px-[1rem] py-[1rem] rounded-xl text-white text-lg cursor-pointer border-2 border-blue-600 hover:bg-blue-500 transition duration-200 ease-in-out"
    return (
        <div className="w-screen h-16 bg-blue-600 z-20 fixed flex items-center justify-between">
            <div className="px-2 flex gap-x-4">
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
