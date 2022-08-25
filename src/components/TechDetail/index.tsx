import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { Context, UserContext, Technology, IUser } from "../../contexts/UserContext";
import Button from "../Button";
import api from "../../Api";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function TechDetail(){
    const {tech, deleteTech, openModal2,  updateTech} = Context();
    
    const formSchema = yup.object({
        status: yup.string().required('Selecione o nível de habilidade')
    });

    const {register, handleSubmit, formState:{errors}} = useForm<Technology>({
        resolver: yupResolver(formSchema)
    });
    
    return(
        <Container>
            <form onSubmit={handleSubmit(updateTech)}>
                <div className="box__title">
                    <h2>Tecnologia Detalhes</h2>
                    <Button type={'button'} onClick={openModal2}>x</Button>
                </div>
                <div className='box__input'>
                    <label htmlFor="name">Nome do projeto</label>
                    <input 
                        disabled={true}
                        placeholder={tech.title}
                        type="text"
                        id="tech"
                    />
                </div>
                <div className='box__select'>
                    <label htmlFor="status">Status</label>
                    
                    <select  
                        {...register('status')}
                        name="status" 
                        id="status">
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediario">Intermediário</option>
                        <option value="Avancado">Avançado</option>
                    </select>
                    <span>{errors.status?.message}</span>
                </div>
                <div className='box__button'>
                    <Button 
                        className='btn__save'
                        type={'submit'}>Salvar alterações</Button>
                    <Button
                        className='btn__delete'
                        onClick={() => deleteTech(tech.id)}>Excluir</Button>
                </div>
            </form>
        </Container>
    );
}
export default TechDetail;