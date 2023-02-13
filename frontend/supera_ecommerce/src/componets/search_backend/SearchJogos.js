import { RefreshSearch } from "./RefreshSearch"
import { TokenSearch } from "./TokenSearch"

//Requisita ao Backend disponiveis no banco da dados
export const SearchJogos = ()=>{
    fetch('http://127.0.0.1:8000/api/supera/Jogos/', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('Supera_access')}`
        }
    }).then((res)=>res.json()).then((data)=>{
        console.log(data)
        if(data[0].nome){
            sessionStorage.setItem('Supera_Jogos', JSON.stringify(data))
        } else{
            if(data.messages){
                RefreshSearch()
            } else {
                TokenSearch()
            }
        }
    })
}