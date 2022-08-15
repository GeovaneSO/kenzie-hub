import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Api";

export const UserContext = createContext({});

function Providers({children}){
    const [user, setUser]       = useState(null);
    const [loading, setLoading] = useState(true); 
    const navigate              = useNavigate()
    
    useEffect(() => {
        async function loadUser(){
            const token = localStorage.getItem('@context-KenzieHub: token');
            
           if(token){
               try {
                   api.defaults.headers.authorization = `Bearer ${token}`;

                   const { data } = await api.get('/profile');
                   
                   setUser(data);
               } catch (error){
                localStorage.clear()
                // console.error(error);
               } 
            }
            setLoading(false);
        }
        loadUser()
    }, []);

    async function signIn (data){
        const response = await api.post('/sessions', data);

        const {user: userResponse, token} = response.data;

        api.defaults.headers.authorization = `Bearer ${token}`;

        //qualquer lugar de requisição que precisar de autorização, vai ser enviado o token como padrão
        
        setUser(userResponse);
        // console.log()
        
        localStorage.setItem('@context-KenzieHub: token', token);
        localStorage.setItem('@context-KenzieHub: user_id', userResponse.id);
        
        navigate('/dashboard', { replace: true });
    }
    
    return(
        <UserContext.Provider value={{setUser, user, setLoading, loading, signIn}}>
            {children}
        </UserContext.Provider>
    );
}
export default Providers;