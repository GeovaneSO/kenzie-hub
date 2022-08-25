import { createContext, useState, useEffect, ReactNode, SetStateAction, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Api";
import { toast } from "react-toastify";
import { string } from "yup";
import {HeadersDefaults} from 'axios'

interface Headers extends HeadersDefaults{
    Authorization: string;
}

export interface Technology{
    id: string;
    title: string;
    status: string;
    created_at: string;
    updated_at: string;
    user: {
        id: string
    }
}
export interface IUser{
    id: string;
    email: string;
    password: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
    created_at: string;
    update_at: string;
    techs?: Technology[];
    works?: Array<[]>;
    avatar_url: null;
    passwordConfirm: string
}

interface UserResponse{
    user: IUser;
    token: string;
}

interface Response{
    status: number;
    data: UserResponse;
}

interface UserRequest{
    email: string;
    password: string;
}

interface UserProps {
    children: ReactNode;
}

interface UserProviderData{
    tech: Technology;
    setTech: (tech: Technology) => void;
    user: IUser
    setUser: Function;
    click: boolean;
    setClick: Function;
    details: boolean;
    setDetails: Function;
    openModal1: React.MouseEventHandler<HTMLButtonElement>;
    openModal2: (id: string) => void | React.MouseEventHandler<HTMLButtonElement>;
    setLoading: Function;
    loading: boolean;
    signIn: (data: IUser) => void;
    list: Technology[];
    setList: Function;
    reload: boolean;
    setReload: Function;
    token: string | null;

    deleteTech: (id: string) => void;
    addTech: (tech: Technology) => void;
    updateTech: (data: Technology) => void;
}

export const UserContext = createContext<UserProviderData>({} as UserProviderData);

function Providers({children}: UserProps){
    const [ loading, setLoading ] = useState<boolean>(true); 
    const [ details, setDetails ] = useState<boolean>(false);
    const [ reload, setReload ]   = useState<boolean>(false);
    const [ click, setClick ]     = useState<boolean>(false);
    const [ user, setUser ]       = useState<IUser>({} as IUser);
    const [ list, setList ]       = useState<Technology[]>([]);
    const [ tech, setTech ]       = useState<Technology>({} as Technology)
    
    const navigate = useNavigate();
    
    function openModal1 (){        
        setClick(!click);
    }
    
    function openModal2 (id: string){
        const find = list.find((tech) => tech.id === id);
        find && setTech(find)
         setDetails(!details)
    }

    async function addTech (tech: Technology){
        const response: any = await api.post('/users/techs', tech).catch(() => toast.error('Tecnologia existente'));
    
        const data: Technology = response.data
        data && setTech(data)

        if(response.status === 201) {
            setReload(!reload);
            toast('Tecnologia cadastrada!');
        }
    }

    async function deleteTech(id: string){
        const response = await api.delete(`/users/techs/${id}`);
   
        response.status === 204 &&
        
        setReload(!reload);

        toast.success('Tecnologia removida!');

        details && setDetails(!details);
    }

    async function updateTech (data: Technology){
        const response: any = await api.put(`/users/techs/${tech.id}`, data).catch((error) => toast.error('Ops! Ocorreu um problema.'));
        
        if(response.status === 201) {
            setReload(!reload);
            toast.success('Status atualizado');

        } else {

            toast.error('Ops! Ocorreu um problema.')

        }
    }

    const token = localStorage.getItem('@context-KenzieHub: token');
    
    async function loadUser(){

        const token = localStorage.getItem('@context-KenzieHub: token');
        
        if(token){
            try {
                api.defaults.headers = {Authorization: `Bearer ${token}`} as Headers;
                
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
    
    async function signIn (data: IUser){
        
        const response: any = await api.post('/sessions', data).catch(() => toast.error('Usuário ou senha incorreto'));
        
        const {user: userResponse, token}: UserResponse = response.data;

        if(response.status === 200 && response) {
            api.defaults.headers = {Authorization: `Bearer ${token}`} as Headers;
            //qualquer lugar de requisição que precisar de autorização, vai ser enviado o token como padrão
            
            toast.success('Login realizado com sucesso');
            
            setUser(userResponse);
            userResponse.techs !== undefined && setList(userResponse.techs)
            
            localStorage.setItem('@context-KenzieHub: token', token);
            localStorage.setItem('@context-KenzieHub: user_id', userResponse.id);
                
            navigate('/dashboard', { replace: true });
        } 
    }
    
    return(
        <UserContext.Provider value={{tech, setTech, click, setClick, details, setDetails, setUser, openModal1, openModal2, updateTech,deleteTech, addTech,user, setLoading, loading, signIn, list, setList, reload, setReload, token }}>
            {children}
        </UserContext.Provider>
    );
}
export default Providers;

export const Context = () => useContext(UserContext);