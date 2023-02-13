import { RefreshSearch } from "./RefreshSearch"
import { TokenSearch } from "./TokenSearch"

//Pesquisa o usuário no backend
export const SearchUser = ()=>{
    fetch('http://127.0.0.1:8000/api/supera/Cliente/',{
        method: "GET",
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('Supera_access')}`
        }
    }).then((res)=>res.json()).then((data)=>{
        if(data[0].nome){
            sessionStorage.setItem('Supera_dados_user', JSON.stringify(data))
        } else{
            if(data.messages){
                RefreshSearch()
            } else {
                TokenSearch()
            }
        }
    }).catch((err)=>console.log(err))
}