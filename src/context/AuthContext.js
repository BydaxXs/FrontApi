import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ( {children} ) => {

    const [role, setRole] = useState("");
    const [accessToken, setAccessToken] = useState("");
    

    const data = {
        role,
        accessToken,
        setRole,
        setAccessToken
    }

    return(
        <AuthContext.Provider value = {data}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider; 