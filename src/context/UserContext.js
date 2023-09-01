import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ( {children} ) => {

    const [id, setId] = useState(); 
    
    const data = {
        id,
        setId
    }

    return(
        <UserContext.Provider value = {data}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider; 