import './App.css';
import Providers from './contexts/UserContext';
import TechProvider from './contexts/TechContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import RoutesMain from './routes';
import Registration from './pages/Cadastro';
import Global from './styles/global'
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <Providers>
      <TechProvider>
        <Global/>
        <RoutesMain/>
      </TechProvider>
    </Providers>
  );
}

export default App;
