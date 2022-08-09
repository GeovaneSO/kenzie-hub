import styled from 'styled-components';

export const NavBar = styled.nav`
    /* display: flex; */
    width: 100%;
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        margin-bottom: 20px;
        
        h1{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 150px;
            }
        }
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 79.54px;
            height: 31.95px;

            background: #212529;
            border-radius: 4px;
            color: #F8F9FA;

        }
    }
    
`