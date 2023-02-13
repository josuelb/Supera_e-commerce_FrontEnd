import { createContext } from 'react';
import { useContext, useEffect, useState } from 'react';
import { verification } from './Verification_login';

export const Context = createContext()

export const ContextProvider = ({children})=>{
    var [carrinho, setCarrinho] = useState([])
    var [tema, setTema] = useState('dark')
    var [login, setLogin] = useState(false)
    var [user, setUser] = useState('')

    const settingUser = ()=>{
        setUser(JSON.parse(sessionStorage.getItem('Supera_dados_user'))[0].user)
    }

    const settingLogin = ()=>{
        setLogin(verification)
    }

    const settingtema = ()=>{
        setTema(tema === 'dark' ? 'ligth' : 'dark')
    }

    const settingCarrinho = (jogo)=>{
        let v = [...carrinho, jogo]
        setCarrinho(v)
        console.log(carrinho)
    }


    return <Context.Provider value={{tema: [tema, settingtema], login: [login, settingLogin], user: [user, settingUser], carrinho: [carrinho, settingCarrinho]}}>
        {children}
    </Context.Provider>
}