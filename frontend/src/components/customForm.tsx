import { useState } from 'react';
export function CustomForm({ component }:any, { content }:any) {
    const [inputValue, setInputValue] = useState(false)

    function handleInputChange(event:any) {
        setInputValue(event.target.value);
    }

    return (
        <div className="flex flex-col gap-y-2 px-[2rem]">
            {inputValue
                ? <label className="px-[0.3rem]" htmlFor={ component }>{ component }</label>
                : <label className="px-[0.3rem] invisible" htmlFor={ component }>{ component }</label>
            }
            <input
                className="p-[0.5rem] focus:outline-none focus:border-b-gray-400 bg-gray-100 border-b-2 hover:border-b-gray-400 transition duration-200 ease-in-out"
                type="text"
                name={ component }
                placeholder={ component }
                maxLength={128}
                onChange={ handleInputChange }
            />
        </div>
    )
}