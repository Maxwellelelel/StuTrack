import { jsonNull } from "./json.ts";

export function getSessionStorageItem<Type>(key: string): Type {
    const value = sessionStorage.getItem(key) ?? jsonNull
    return JSON.parse(value)
}

export function setSessionStorageItem(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value))
}