import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: #121214;   
    
    margin: 0;
    padding: 30px 12px;
    gap: 10px;
    width:100vw;
    height: 100%;

    header{
        width: 100%;
        border-top: 1px solid #212529;
        border-bottom: 1px solid #212529;
        .container{
            display: flex;
            flex-direction: column;

            padding: 30px 0;
            gap: 20px;
            h2{
                color: #F8F9FA;
            }
            span{
                color: #868E96;
            }
        }
    }
    main{
        display: flex;
        flex-direction: column;
        /* background-color: yellow; */
        width: 100%;
        height: 100%;

        gap: 30px;

        color: #F8F9FA;

        .box__addTech{
            display: flex;
            justify-content: space-between;

            margin-top: 30px;

            h3{

            }
            button{
                background: transparent;
                border: none;

                width: 32px;
                height: 32px;
                
                background: #212529;
                border-radius: 4px;

                font-size: 15px;
                
                color: #F8F9FA;
            }
        }
    }
    @media(min-width: 600px){
        padding: 30px 50px;
    }
`
