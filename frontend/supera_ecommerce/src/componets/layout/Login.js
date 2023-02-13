import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Context } from "../../Context";
import { TokenSearch } from "../search_backend/TokenSearch";
import { SearchJogos } from "../search_backend/SearchJogos";
import { SearchUser } from "../search_backend/SearchUser";
import './css/Login.css'

function Login (){
    const {login, user} = useContext(Context)
    var {path} = useParams()
    
    const chama = ()=>{
        const csrfmiddlewaretoken = document.getElementsByName('csrfmiddlewaretoken')[0].value
        const username = document.getElementsByClassName('username')[0].value
        const password = document.getElementsByClassName('password')[0].value

        const body = {
            "csrfmiddlewaretoken": csrfmiddlewaretoken,
            "username": username,
            "password": password
        }


        fetch('http://127.0.0.1:8000/authentication/', {
            method: 'POST',
            body: JSON.stringify(body)
        }).then((res)=>res.json()).then((data)=>{
            if(data.Authorization === "Usuário e senha corretos"){
                if (document.getElementsByName('remember')[0].checked){
                    localStorage.setItem('Supera_user', username)
                    localStorage.setItem('Supera_password', password)
                    TokenSearch()
                    setTimeout(()=>{
                        SearchJogos()
                        SearchUser()
                    }, 3000)
                    user[1]()
                } else{
                    sessionStorage.setItem('Supera_user', username)
                    sessionStorage.setItem('Supera_password', password)
                    TokenSearch()
                    setTimeout(()=>{
                        SearchJogos()
                        SearchUser()
                    }, 3000)
                        
                    user[1]()
                }
            } else{
                const alerta = document.getElementsByClassName('alerta')[0]
                alerta.style.display = 'block'
                alerta.innerHTML = `<p>${data.Authorization}</p>`
            }
        }).catch((err)=>console.log(err))
        setTimeout(()=>{
            document.location.reload()
        }, 7000)
    }

    return (<>{
        login[0] ? <Navigate to={'/'}/> : <section>
                <article>
                    <div className="form">
                        <h3 className="login_title">Login</h3>
                        <input type="hidden" name="csrfmiddlewaretoken" value="ZcNlWwYyY8pCxGOdmbcHdAjC4TDC4jiHDS9LBE1R4OLhyf4OmGf1ua64P09GK7O4"></input>
                        <p>
                            <label htmlFor="id_login">Nome do usuário:</label>
                            <input type="text" className="username" name="login" placeholder="Nome do usuário" autoComplete="username" maxLength={150} required id="id_login"></input>
                        </p>

                        
                        <p>
                            <label htmlFor="id_password">Senha:</label>
                            <input type="password" className="password" name="password" placeholder="Senha" autoComplete="current-password" required id="id_password"></input>
                        </p>

                        <div className="alerta">

                        </div>
                        
                        <p>
                            <label htmlFor="id_remember">Continuar logado:</label>
                            <input type="checkbox" name="remember" id="id_remember"></input>
                        </p>
                        
                        <Link className="button secondaryAction" id='secundaryAction' to="http://127.0.0.1:8000/accounts/password/reset/">Esqueceu a sua senha?</Link><br></br>
                        <button className="primaryAction" onClick={chama}>Entrar</button>
                    </div>
                </article>
            </section>
    }</>)
}

export default Login;