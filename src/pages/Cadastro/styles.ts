import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: #121214;   
    margin: 0;
    padding: 25px;

    gap: 10px;
    width:100%;
    height: 100%;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        gap: 20px;
        padding: 20px;
        background: #212529;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        
        color: #F8F9FA;

        h2{
            /* margin-top: 10px; */
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
        }
        span{
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;

            color: #868E96;

        }

        .box__input{
            display: flex;
            flex-direction: column;

            gap: 20px;
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
        .box__select{
            display: flex;
            flex-direction: column;

            gap: 20px;
            width: 100%;
            label{
                font-weight: 400;
                font-size: 12px;
                line-height: 0px;
            }
            select{
                width: 100%;
                height: 48px;
                background: #343B41;
                border: 1px solid #343B41;
                border-radius: 3.19812px;

                padding: 10px;
                color: #F8F9FA;
                option{
                    width: 100%;
                }
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
    }
    @media(min-width: 430px){

        header, form{
            width: 380px;
        }
    }
`