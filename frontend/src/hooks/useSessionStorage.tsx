import { useState, useEffect, Dispatch } from "react";
import { getSessionStorageItem, setSessionStorageItem } from "../utils/sessionStorage.ts";

export function useSessionStorage(key: string): [any, Dispatch<any>] {
    const [value, setValue] = useState(getSessionStorageItem<any>(key))

    useEffect(() => {
        setSessionStorageItem(key, value)
    }, [key, value]);

    return [value, setValue]
}