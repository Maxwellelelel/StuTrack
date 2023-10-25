type FormProperties = {
    component:string
    htmlName:string
}
export function CustomForm({ component, htmlName }:FormProperties) {
    return (
        <div className="flex flex-col gap-y-2 px-[2rem]">
            <label className="px-[0.3rem]" htmlFor={ htmlName }>{ component }</label>
            <input
                className="p-[0.5rem] focus:outline-none focus:border-b-gray-400 bg-gray-100 border-b-2 hover:border-b-gray-400 transition duration-200 ease-in-out"
                type={ htmlName }
                name={ htmlName }
                placeholder={ component }
                maxLength={128}
            />
        </div>
    )
}