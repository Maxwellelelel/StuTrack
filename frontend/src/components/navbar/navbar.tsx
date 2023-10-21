import { useSessionStorage } from "../../hooks/useSessionStorage.tsx";
import { KEY_USER_LOGGED_IN } from "../../utils/sessionKeys.ts";
import { LoginSection } from "./loginSection.tsx";
import { LogoutSection } from "./logoutSection.tsx";

export function Navbar() {
    const [isLogged] = useSessionStorage(KEY_USER_LOGGED_IN)

    return (
        <div className="w-screen bg-blue-600 z-10 fixed flex items-center justify-between">
            <div>
                <button className="px-[8px] py-[6px] text-white cursor-pointer hover:bg-blue-700 transition duration-200 ease-in-out">Home</button>
                <button className="px-[8px] py-[6px] text-white cursor-pointer hover:bg-blue-700 transition duration-200 ease-in-out">Projects</button>
                <button className="px-[8px] py-[6px] text-white cursor-pointer hover:bg-blue-700 transition duration-200 ease-in-out">Explore</button>
                <button className="px-[8px] py-[6px] text-white cursor-pointer hover:bg-blue-700 transition duration-200 ease-in-out">About</button>
            </div>
            <div>
                {isLogged ? <LogoutSection/> : <LoginSection/>}
            </div>
        </div>
    );
}
