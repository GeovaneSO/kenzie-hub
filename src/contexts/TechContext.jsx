import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import api from "../Api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

function TechProvider ({ children }){
    const { setReload, reload } = useContext(UserContext);

    const [ click, setClick ] = useState(false);

    const [ details, setDetails ] = useState(false);

    
    function openModal1 (){        
        setClick(!click);
    }
    
    function openModal2 (){
        setDetails(!details);
    }

    async function deleteTech(id){
        
        const response = await api.delete(`/users/techs/${id}`);

        response.status === 204 &&
        
        setReload(!reload);

        toast('Tecnologia removida!');
    }

    return(
        <TechContext.Provider value={{click  , setClick, openModal1, details,openModal2, deleteTech}}>
            {children}
        </TechContext.Provider>
    )
}
export default TechProvider;