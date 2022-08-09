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
`
