import { createContext, useContext, useEffect, useState } from "react";

//context data
const AuthContext = createContext({
    isAuthenticated: '',
    getToken: () => {},
    saveUser: (response) => {}
});


export function AuthProvider({children}){
    //basic hooks for context info
    const [user, setUser] = useState({});
    const[token, setToken] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        //call to auth status
    });

    function getToken(){
        const token = sessionStorage.getItem('token');
        if(token){
            const {token} = JSON.parse(token);
            return this.token;
        }
        return null;
    }

    function saveUser(){

    }

    //reset user session to null changes auth to false
    function logOut(){
        setToken('');
        sessionStorage.removeItem('token')
        setIsAuthenticated(false);
        console.log('Logout exiting');
    }

    //recovers token and setup user session enviroment
    function saveSessionInfo(data){
        const {jwt} = data;
        if(jwt){
            sessionStorage.setItem('token', jwt);
            setToken(token);
            console.log('Token succesfully saved!');
            setIsAuthenticated(true);
        }
    }

    async function checkAuth(){
        return isAuthenticated;
    }

    return(
        <AuthContext.Provider value={{saveSessionInfo, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);