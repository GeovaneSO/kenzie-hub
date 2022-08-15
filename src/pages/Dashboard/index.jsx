import { Container } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import Nav from "../../components/Nav";
import { useEffect, useState, useContext } from 'react';
import { useNavigate, Link, useParams, Navigate } from 'react-router-dom';
import axios from "axios";

function Dashboard(){
    const {user, loading} = useContext(UserContext);
    
    if(loading) return <div>Carregando...</div>
    
    return(
        user ?
        <Container >
            <Nav/>
            <header>
                <div className="container">
                    <h2>Olá, {user.name}</h2>
                    <span>{user.course_module}</span>
                </div>
            </header>
        </Container> :
        <Navigate to={'/login'} replace />
    );
}

export default Dashboard;