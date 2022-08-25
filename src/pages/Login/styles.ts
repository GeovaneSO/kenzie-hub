import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    gap: 20px;

    background: #121214;    margin: 0;
    padding: 25px;

    
    width:100%;
    height: 100vh;
    h1{
        img{
            width: 150px;

        };
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 20px;
        padding: 20px;

        width: 100%;
        height: 502px;

        background: #212529;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        
        color: #F8F9FA;

        h2{
            margin: 10px;
        }

        .box__input{
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            gap: 20px;
            /* justify-content: center; */
            width: 100%;

            label{
                font-weight: 400;
                font-size: 12px;
                line-height: 0px;
            }

            input{
                width: 100%;
                height: 48px;

                background: #343B41;
                border: 1px solid #343B41;
                border-radius: 3.19812px;

                padding: 10px;
                color: #F8F9FA;

            }
            input:focus{
                border: 1px solid #F8F9FA;
            }
        }
        .box__button{
            width: 100%;

            button{
                width: 100%;
                height: 38.5px;
                
                background: #FF577F;

                border: 1.2182px solid #FF577F;
                border-radius: 4.06066px;

                color: #F8F9FA;
            }
        }
        span{
            font-weight: 600;
            font-size: 9.62602px;
            line-height: 14px;

            color: #868E96;

        }
        .box__link{
            width:100%;
            height: 38.5px;


            background: #868E96;

            border: 1.2182px solid #868E96;
            border-radius: 4px;

            /* margin-bottom: 20px; */
        
            .a{
                display: flex;
                justify-content: center;
                align-items: center;

                width: 100%;
                height: 100%;

                color: #F8F9FA;
            }
        }
    
    }
    @media(min-width:445px){
        form{
            width: 395px;
        }
    }
    
`