export function RegisterPage() {
    return (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-[20rem] h-[32rem] bg-white shadow-2xl rounded-[12px]">
                <h1 className="text-3xl text-center py-[2rem]">Register Account</h1>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2 px-[2rem]">
                        <label className="px-[0.3rem]" htmlFor="username">Username</label>
                        <input className="p-[0.5rem] focus:outline-none focus:border-b-gray-400 bg-gray-100 border-b-2 hover:border-b-gray-400 transition duration-200 ease-in-out"
                               type="text"
                               name="username"
                               placeholder="Username"
                               maxLength={128}/>
                    </div>
                    <div className="flex flex-col gap-y-2 px-[2rem]">
                        <label className="px-[0.3rem]" htmlFor="mail">E-Mail</label>
                        <input className="p-[0.5rem] focus:outline-none focus:border-b-gray-400 bg-gray-100 border-b-2 hover:border-b-gray-400 transition duration-200 ease-in-out"
                               type="text"
                               name="mail"
                               placeholder="E-Mail"
                               maxLength={128}/>
                    </div>
                    <div className="flex flex-col gap-y-2 px-[2rem]">
                        <label className="px-[0.3rem]" htmlFor="password">Password</label>
                        <input className="p-[0.5rem] focus:outline-none focus:border-b-gray-400 bg-gray-100 border-b-2 hover:border-b-gray-400 transition duration-200 ease-in-out"
                               type="text"
                               name="password"
                               placeholder="Password"
                               maxLength={128}/>
                    </div>
                </div>
                <div className="py-[1.5rem] px-[3rem] flex flex-col gap-y-4">
                    <button className="py-[0.5rem] cursor-pointer bg-blue-600 text-white rounded-[12px] hover:bg-blue-700 transition duration-200 ease-in-out">Register</button>
                    <button className="py-[0.5rem] cursor-pointer hover:underline hover:text-gray-600 transition duration-200 ease-in-out">Switch to login</button>
                </div>
            </div>
        </div>
    );
}