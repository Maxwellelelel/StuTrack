import { Navbar } from "../components/navbar/navbar.tsx";

export function HomePage() {
    return (
        <><Navbar/>
            <div className="overflow-x-hidden">
                <div className="w-screen h-screen relative bg-gray-100 flex justify-center items-center">
                    <h1>Welcome to StuTrack</h1>
                </div>
                <div className="w-screen h-screen relative bg-gray-200 flex justify-center items-center">
                    {"Placeholder Page 8)"}
                </div>
            </div>
        </>
    );
}