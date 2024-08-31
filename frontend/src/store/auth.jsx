import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState('');
    const authorizationToken = token;


    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    // const authorizationToken = token;

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem('token', serverToken)
    }

    let isLoggedIn = !!token;
    if (isLoggedIn){
        console.log("isLoggedIn", isLoggedIn);
    };

    const userAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/user', {
                method: 'GET',
                headers: {
                    Authorization: authorizationToken,
                },
            })

            if(response.ok){
                const data = await response.json();
                setUser(data);
            }
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        userAuthentication();
    }, []);
    
    return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user, authorizationToken }}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContextValue =  useContext( AuthContext );
    if(!authContextValue) {
        throw new Error("useAuth used outside of the Provider.");
    };
    return authContextValue;
};