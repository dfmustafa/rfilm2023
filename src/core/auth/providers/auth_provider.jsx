import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth_context"
import { AppStorage } from "../../base/app_storage";

export const AUTH_KEY = "isLoggedIn";
export const AuthProvider = ({ children }) => {
    
const [isLoggedIn, setIsLoggedIn] = useState(false); 
const [isLoading, setIsLoading] = useState(true);


const saveLoginState =async (state)=> AppStorage.setItem(AUTH_KEY, state);
const getLoginState = async()=> AppStorage.getItem(AUTH_KEY);
const removeLoginState =async ()=> AppStorage.removeItem(AUTH_KEY);

const delay= (ms) => new Promise((resolve) => setTimeout(resolve, ms));


useEffect(()=>{
    delay(3000)
    const initAuth = async ()=>{
        try {
       const loginState =await getLoginState();
            console.log("Estado de login", loginState);
       if (!loginState) return;
       
       setIsLoggedIn(loginState);

    } catch (error) {
        console.log(error);
    } finally {
        setIsLoading(false);
    }
    
    };

    initAuth();
},[]);


const login= async (usuario, password)=>{
    setIsLoggedIn(true);
    saveLoginState(true);
};

const logout = async () => {
    setIsLoggedIn(false)
    removeLoginState();
};

    return (
        <AuthContext.Provider 
        value= {{
            isLoggedIn,
            login,
            logout,
        }}
        >
            {children}
        </AuthContext.Provider> 
    );   
};

