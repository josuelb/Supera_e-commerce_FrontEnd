import './css/User.css'

function User(){
    const user = JSON.parse(sessionStorage.getItem('Supera_dados_user'))[0]
    return <div class='container_User'>
        <div class='box_list'>
            <img src={user.image} alt={user.nome}></img>
            <h3>{user.nome}</h3>
            <p>
                User: {user.user}
            </p>
            <p>
                Data de nasimento: {user.data_nasc}
            </p>
            <p>
                Sexo: {user.sexo}
            </p>
            <p>
                Email: {user.email}
            </p>
        </div>
    </div>
}

export default User;