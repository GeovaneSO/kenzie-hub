import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Api";
import { toast } from "react-toastify";
import { TechContext } from "./TechContext";

export const UserContext = createContext({});

function Providers({children}){
    const [ user, setUser ]       = useState(null);
    const [ loading, setLoading ] = useState(true); 
    const [ reload, setReload ]   = useState(false);
    const [ list, setList ]       = useState([]);
    const [ click, setClick ]     = useState(false);
    const [ details, setDetails ] = useState(false);
    const [ tech, setTech ]           = useState(null)
    const navigate = useNavigate();
    
    function openModal1 (){        
        setClick(!click);
    }
    // console.log(list)
    
    function openModal2 (id){
        const find = list.find((tech) => tech.id === id);
        find && setTech(find)
         setDetails(!details)
    }

    async function deleteTech(id){
        
        const response = await api.delete(`/users/techs/${id}`);
   
        response.status === 204 &&
        
        setReload(!reload);

        toast.success('Tecnologia removida!');

        details && setDetails(!details);
    }

    const token = localStorage.getItem('@context-KenzieHub: token');
    
    async function loadUser(){

        const token = localStorage.getItem('@context-KenzieHub: token');
        
        if(token){
            try {
                api.defaults.headers.authorization = `Bearer ${token}`;
                
                const { data } = await api.get('/profile');
                
                setUser(data);
                
                setList(data.techs);

            } catch (error){
                localStorage.clear();
            } 
        }
        // setLoading(false);
    }
    useEffect(() => {
        const token = localStorage.getItem('@context-KenzieHub: token');
        if(token){
            loadUser()
        }
        
    }, [, reload]);
    
    async function signIn (data){
        
        const response = await api.post('/sessions', data).catch(() => toast.error('Usuário ou senha incorreto'));
        
        const {user: userResponse, token} = response.data;
        
        if(response.status === 200) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            //qualquer lugar de requisição que precisar de autorização, vai ser enviado o token como padrão
            
            toast.success('Login realizado com sucesso');
            
            setUser(userResponse);
            setList(userResponse.techs)
            
            localStorage.setItem('@context-KenzieHub: token', token);
            localStorage.setItem('@context-KenzieHub: user_id', userResponse.id);
                
            navigate('/dashboard', { replace: true });
        } 
    }
    
    return(
        <UserContext.Provider value={{tech, setTech, click, setClick, details, setDetails, setUser, openModal1, openModal2, deleteTech,user, setLoading, loading, signIn, list, setList, reload, setReload, token }}>
            {children}
        </UserContext.Provider>
    );
}
export default Providers;