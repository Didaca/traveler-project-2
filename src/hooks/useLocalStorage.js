import { useState } from "react"



export const useLocalStorage = (key, obj) => {
    const [state, setState] = useState(() => {
        const data = localStorage.getItem(key);

        if(data !== "undefined") {
            const persistedStorage = JSON.parse(data);

            return persistedStorage;
        }

        return obj;
    });


    const setLocalStorage = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }


    return [
        state,
        setLocalStorage
    ]
}

