import { useNavigate } from "react-router-dom";

export function LoginSection() {
    const navigate = useNavigate()

    return (
        <div className="flex gap-x-2 px-[1.5rem]">
            <button className="px-[0.6rem] py-[0.2rem] bg-gray-200 text-black text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out"
                    onClick={() => navigate("/login")}>Login</button>
            <button className="px-[0.6rem] py-[0.2rem] bg-gray-200 text-black text-sm cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out"
                    onClick={() => navigate("/register")}>Register</button>
        </div>
    );
}