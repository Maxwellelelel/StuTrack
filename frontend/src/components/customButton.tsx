import {AxiosPost} from "./axios/axiosPost.tsx";
export function CustomButton({ page }:any) {
    return (
        <div className="py-[1rem] px-[5rem] h-24 flex-col gap-y-4">
            <button className="py-[0.7rem] w-48 cursor-pointer bg-blue-600 text-white text-xl rounded-[12px] hover:bg-blue-700 transition duration-200 ease-in-out"
            onClick={AxiosPost}>{ page }</button>
        </div>
    );
}