import './App.css';
import Providers from './contexts/UserContext';
import RoutesMain from './routes';
import Global from './styles/global'

function App() {

  return (
    <Providers>
      <Global/>
      <RoutesMain/>
    </Providers>
  );
}

export default App;