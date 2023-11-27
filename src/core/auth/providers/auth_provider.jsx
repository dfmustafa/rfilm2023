import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth_context"
import { appStorage } from "../../base/app_storage";
export const AUTH_KEY = "isLoggedIn";
export const AuthProvider = ({ children }) => {
    
const [isLoggedIn, setIsLoggedIn] = useState(true); 

const saveLoginState = (state)=> appStorage.setItem(AUTH_KEY, state);
const getLoginState = ()=> appStorage.getItem(AUTH_KEY);
const removeLoginState = ()=> appStorage.removeItem(AUTH_KEY);

const delay= (ms) => new Promise((resolve) => setTimeout(resolve, ms));


useEffect(()=>{
    delay(3000)
    const initAuth = async ()=>{
       const loginState = getLoginState();
       if(loginState){
           setIsLoggedIn(true);
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

