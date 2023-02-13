import style from './css/NavBar.module.css'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '../../Context'
import { useContext } from 'react'
import Container from './Container';

function NavBar(){
    const {user, login, tema} = useContext(Context)
    const nav = document.getElementsByClassName('nav')

    if(login[0] && sessionStorage.getItem('Supera_dados_user')){
        user[1]()
    }

    const menu = ()=>{
        if (nav[0].style.display === "none"){
            nav[0].style.display = "block"
        } else {
            nav[0].style.display = "none"
        } 
    }
    

    const Verif = ()=>{
        if(login[0]){
            sessionStorage.clear()
            localStorage.clear()
            return document.location.reload()
        } else{
            return <Navigate to='/login/'/>
        }
    }

    return (
        <header className={style.header}>
            <Container>
                <button className={style.btn} onClick={Verif}>{login[0] ? 'Sair' : 'Entrar'}</button>
                <h1 className={style.title}>Supera E-commerce</h1>
                <div className={style.container_span}>
                    <span className="material-symbols-outlined" id='span' onClick={menu}>
                        menu
                    </span>
                </div>
                <button className={style.btn_thema} onClick={tema[1]}>{tema[0] === 'dark' ? 'ligth' : 'dark'}</button>
                <nav className='nav'>
                    <ul>
                        {
                            login[0] ? <div className={style.entrou}>
                                <Link to='/'><li>Home</li></Link>
                                <Link to={'/conta/'}><li>{user[0]}</li></Link>
                                <Link to='/carrinho/'><li>Carrinho</li></Link>
                            </div> : <div>
                                <Link to='/'><li>Home</li></Link>
                                <Link to='/login'><li>Login</li></Link>
                            </div>
                        }
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default NavBar;