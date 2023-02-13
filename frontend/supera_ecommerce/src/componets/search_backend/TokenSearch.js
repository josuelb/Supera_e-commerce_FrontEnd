//Carrega o Token do backend
export const TokenSearch = ()=>{
    let username = ''
    let password = ''
    if (localStorage.getItem('Supera_user') && localStorage.getItem('Supera_password')){
        username = localStorage.getItem('Supera_user')
        password = localStorage.getItem('Supera_password')
    } else {
        username = sessionStorage.getItem('Supera_user')
        password = sessionStorage.getItem('Supera_password')
    }

    const user = {
        'username': username,
        'password': password
    }

    fetch('http://127.0.0.1:8000/api/token/',{
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    }).then((res)=>res.json()).then((data)=>{
        sessionStorage.setItem('Supera_refresh', data.refresh)
        sessionStorage.setItem('Supera_access', data.access)
    }).catch((err)=>console.log(err))
}