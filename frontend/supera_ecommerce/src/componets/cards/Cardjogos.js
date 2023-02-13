import './css/CardJogos.css'
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { useContext } from 'react';

function CardJogos({jogo}){
    const {carrinho} = useContext(Context)
    
    const salvar = ()=>{
        carrinho[1](jogo)
    }
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
                <span onClick={salvar} class="material-symbols-outlined">shopping_cart</span>
            </div>
        </div>
    )
}

export default CardJogos;