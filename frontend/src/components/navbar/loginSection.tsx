import { useNavigate } from "react-router-dom";

export function LoginSection() {
    const navigate = useNavigate()

    return (
        <div className="flex gap-x-2 px-[1.5rem]">
            <button className="px-[0.6rem] py-[0.2rem] h-10 w-28 rounded-3xl bg-white text-base cursor-pointer hover:bg-blue-500 transition duration-200 ease-in-out"
                    onClick={() => navigate("/login")}>Sign in</button>
            <button className="px-[0.6rem] py-[0.2rem] h-10 w-28 rounded-3xl bg-black text-white text-base cursor-pointer hover:bg-blue-500 transition duration-200 ease-in-out"
                    onClick={() => navigate("/register")}>Register</button>
        </div>
    );
}