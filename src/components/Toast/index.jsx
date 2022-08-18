import React from "react";
import styled from "styled-components";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = styled(ToastContainer)`
    .toastify__toast--info{
        background: rgb(51, 187, 102) 
    }
    .toastify__toast--error{
        background: red;
    }
`