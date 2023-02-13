export const verification = ()=>{
    if((localStorage.getItem('Supera_user') && localStorage.getItem('Supera_password')) || (sessionStorage.getItem('Supera_user') && sessionStorage.getItem('Supera_password'))){
        return true
    } else{
        return false
    }
}