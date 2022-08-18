import styled from "styled-components";
export const Container = styled.div`
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    background: rgba(18, 18, 20, 0.5);
    
    form{
        display: flex;
        flex-direction: column;

        width: 280px;
        height: fit-content;

        
        background: #212529;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        
        color: #F8F9FA;
        div{
            padding: 20px;
        }

        .box__title{
            display: flex;
            justify-content: space-between;
            height: fit-content;
            background: #343B41;
            border-radius: 4px 4px 0px 0px;

            h2{
                font-weight: 700;
                font-size: 14px;
                line-height: 24px;
            }
            button{
                background: transparent;
                border: none;
                color: #F8F9FA;
            }
        }
        label{
            font-weight: 400;
            font-size: 12px;
            line-height: 0px;
        }
        .box__input{
            display: flex;
            flex-direction: column;
            box-sizing: border-box;

            gap: 20px;
            width: 100%;
            padding-bottom: 0;
            input{
                width: 100%;
                height: 48px;

                padding: 10px;

                background: #343B41;

                border: 1px solid #343B41;
                border-radius: 4px;
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
            
            padding-bottom: 0;
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
            padding-top: 0;

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
        
    }
`