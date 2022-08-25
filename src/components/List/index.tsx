import { useContext } from "react";
import { UserContext,Context } from "../../contexts/UserContext";
import Button from "../Button";
import { ListMain, BoxH2 } from "./style";
// import { BoxH2 } from "./style";
import { FiMoreHorizontal,FiTrash2 } from 'react-icons/fi'


function List (){
    const { deleteTech, openModal2, list} = Context();

    // console.log(deleteTech)
    return(
        <ListMain>
            {
                list.length > 0 ?
                    list.map((tech) => 
                        <li 
                            className="card"
                            key={tech.id}>

                            <p>{tech.title}</p>
                            <div className="box__container">
                                <div className="box__span">
                                    <span>{tech.status}</span>
                                </div>
                                <div className="box__btn">
                                    <Button
                                        id={tech.id}
                                        className='btn__detail'
                                        onClick={() => openModal2(tech.id)}><FiMoreHorizontal/></Button>
                                    <Button
                                        className='btn__delete'
                                        onClick={() => deleteTech(tech.id)}><FiTrash2/></Button>
                                </div>
                            </div>
                        </li>
                    ) : 
                        <BoxH2><h2>Cadastre uma tecnologia</h2></BoxH2>
            }
        </ListMain>
    )
}
export default List;