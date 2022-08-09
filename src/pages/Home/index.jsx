import { Container } from "./styles";
import Nav from "../../components/Nav";
import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from "axios";
// axios.post('https://kenziehub.herokuapp.com/users', data)
// .then((response) => console.log(response.data))
// .catch((error) => console.log(error));   
// fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
// .then((response) => response.json())
// .then((response) => setCharacterList(response.results))
// .catch((err) => console.log(err))
// }, [currentPage]);
function Home({user}){
    useEffect(() => {
        axios.get(`https://kenziehub.herokuapp.com/users/${user.id}`)
          .catch((err) => console.log(err))            
    }, [user.id])
    return(
        <Container >
            <Nav/>
            <header>
                <div className="container">
                    <h2>Olá, {user.name}</h2>
                    <span>{user.course_module}</span>
                </div>
            </header>
        </Container>
    );
}

export default Home;