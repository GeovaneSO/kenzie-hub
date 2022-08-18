import { Container } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import Nav from "../../components/Nav";
import { useEffect, useState, useContext } from 'react';
import { useNavigate, Link, useParams, Navigate } from 'react-router-dom';
import AddModal from "../../components/AddModal";
import TechDetail from "../../components/TechDetail";
import { ToastContainer, toast } from 'react-toastify';
import Button from "../../components/Button";
import List from "../../components/List";

function Dashboard(){
    const {details, loading,setDetails, deleteTech, click, setClick, openModal2, openModal1, user, setList, list, reload, setReload} = useContext(UserContext);
    // const { click, openModal1, details, setDetails } = useContext(TechContext);
    // if(loading) return <div>Carregando...</div>
    // console.log(user)
    return(
        <>
        { click && <AddModal />}
        { details && <TechDetail /> }
            
        {
            user &&
            <Container >
                <Nav/>
                <header>
                    <div className="container">
                        <h2>Olá, {user.name}</h2>
                        <span>{user.course_module}</span>
                    </div>
                </header>
                <main>  
                    <div className="box__addTech">
                        <h3>Tecnologias</h3>
                        <Button onClick={openModal1} >+</Button>
                    </div>
                    <List/>
                </main>
                <ToastContainer/>
            </Container> 
            // <Navigate to={'/login'} replace />
        }
        </>
    );
}

export default Dashboard;