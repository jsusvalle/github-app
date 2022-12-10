import { setCookie, deleteCookie } from 'cookies-next';

import { userData } from "types/userData";

export const isBrowser = typeof window !== "undefined";

export const chargeDataLocalStorage = (key: string) => {
    const usersData = localStorage.getItem(key);

    if(usersData !== null) {
        return JSON.parse(usersData);
    }

    return [];
}

export const loginWithLocalStorage = ({ email, password }: userData) => {
    const dataUsers = chargeDataLocalStorage("users");
    if(dataUsers) {
        const findObj = dataUsers.find((user: userData) => user.email === email && user.password === password)

        if(findObj) {
            setCookie('session', 'true');
            return
        }
        
        deleteCookie('session');
        throw 'Correo o contraseña incorrectos';
    } 
    
    deleteCookie('session');
    throw 'Correo o contraseña incorrectos';
}

export const signUpWithLocalStorage = (data: userData) => {
    const dataUsers = chargeDataLocalStorage("users");
    if(dataUsers) {
        const findEqualEmail = dataUsers.some((user: userData) => user.email === data.email);
        if(!!findEqualEmail) {
            throw 'El correo ya ha sido registrado';
        }
        const pushDataArray = [...dataUsers, {...data}]
        localStorage.setItem("users", JSON.stringify(pushDataArray))
    } else {
        localStorage.setItem("users", JSON.stringify([{...data}]))
    }
}

export const signOutCookie = () => {
    deleteCookie('session');
}

export const addOrRemoveToFavourite = (action: "add" | "remove", id: string) => {
    const arrayFavs = chargeDataLocalStorage("favourites");

    if(arrayFavs) {
        if(action === "add") {
            const addArray = [...arrayFavs, id]
            localStorage.setItem("favourites", JSON.stringify(addArray))
            return addArray;
        }
        const findFavourite = arrayFavs.filter((item: string) => item !== id);
        localStorage.setItem("favourites", JSON.stringify(findFavourite))
        return findFavourite;
    }
    localStorage.setItem("favourites", JSON.stringify([id]))
    return [id];
}
