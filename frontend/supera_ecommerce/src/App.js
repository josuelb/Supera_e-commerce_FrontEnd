import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

import { Context } from './Context';
import NavBar from './componets/layout/NavBar';
import Container from './componets/layout/Container';
import Home from './componets/layout/Home';
import Login from './componets/layout/Login';
import User from './componets/layout/User';
import { SearchUser } from './componets/search_backend/SearchUser';
import { SearchJogos } from './componets/search_backend/SearchJogos';
import Carrinho from './componets/layout/Carrinho';
import Footer from './componets/layout/Footer';

function App() {
  sessionStorage.setItem('Supera_carrinho', [])
  const {login, tema} = useContext(Context)
  login[1]()

  if(login[0]){
    if(sessionStorage.getItem('Supera_dados_user') === undefined){
      SearchUser()
    }
    
    if(sessionStorage.getItem('Supera_Jogos') === undefined){
      SearchJogos()
    }
  }

  return (
    <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={login[0] ? <Home />: <Navigate to='/login/'/>} />
            <Route exact path='/login/:path?' element={<Login/>}/>
            <Route path='/conta/' element={login[0] ? <User /> : <Navigate to='/login/conta/'/>} />
            <Route path='/carrinho/' element={<Carrinho />}/>
          </Routes>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;
