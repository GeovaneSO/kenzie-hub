import styled from "styled-components";
export const ListMain = styled.ul`
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 15px;
    padding: 20px 10px;

    background: #212529;
    border-radius: 4px;

    .card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        background: #121214;
        border-radius: 4px

    }
    p{
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
        
        text-overflow: ellipsis;

        max-width: 10ch;

        overflow: hidden;
        
        white-space: nowrap;
        
        color: #F8F9FA;
    }

    .box__container{
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: fit-content;
        gap: 50px;
    }
    .box__span{
        width: 100%;
        span{
            font-weight: 400;
            font-size: 12px;
            line-height: 22px;
            
            text-align: right;
            
            color: #868E96;
        }
    }
    .box__btn{
        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 20px;
        width: 100%;
        .btn__detail{
            display: flex;
            font-size: 20px;
            background: transparent;
            border: none;
            color: rgba(255, 255, 255, 0.8);
            
        }
        .btn__delete{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            height: fit-content;
            background: transparent;
            border: none;
            color: rgba(255, 255, 255, 0.8);
        }
    }
 
    @media(min-width: 600px){
        .card{
            
            padding: 15px 25px;
        }
    }

    `
export const BoxH2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    text-align: center;
    `