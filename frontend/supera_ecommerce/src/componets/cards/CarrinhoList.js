import { Link } from "react-router-dom"
import './css/CarrinhoList.css'

function CarrinhoList({jogo}){
    return(
        <div class="container_jogos">
            <div>
                <Link to={`/produto/${jogo.id}`} class="link">
                    <img src={jogo.image} alt={jogo.nome}></img>
                    <h3>{jogo.nome}</h3>
                    <p>
                        Popularidade: {jogo.score}
                    </p>
                    <p>
                        Preço: R${jogo.price}
                    </p>
                </Link>
            </div>
        </div>
    )
}
export default CarrinhoList