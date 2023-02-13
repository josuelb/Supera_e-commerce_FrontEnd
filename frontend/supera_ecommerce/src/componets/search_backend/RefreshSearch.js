import { TokenSearch } from "./TokenSearch"

//Recupera a validação do token expirado
export const RefreshSearch = ()=>{
    if(sessionStorage.getItem('Supera_access')){
        fetch('http://127.0.0.1:8000/api/token/refresh/',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "refresh": `${sessionStorage.getItem('Supera_access')}`
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.access){
                sessionStorage.setItem('Supera_access')
            } else{
                TokenSearch()
            }
        }).catch((err)=>console.log(err))
    } else{
        TokenSearch()
    }
}