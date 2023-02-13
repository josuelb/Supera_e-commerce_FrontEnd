import './css/Carrinho.css'
import { Context } from '../../Context';
import { useContext, useEffect } from 'react';
import CarrinhoList from '../cards/CarrinhoList';

function Carrinho(){
    let valor = document.getElementsByClassName("valorTotal")
    let {carrinho} = useContext(Context)

    return(
        <div className='section_container'>
            <div className="container_carrinho">
                <h3>Carrinho</h3>
                <div class="valorTotal">

                </div>
                {
                    carrinho[0].length > 0 ? carrinho[0].map((jogo)=><CarrinhoList jogo={jogo} />) : <div className="carrinhoVazio"><p>Não deixe de fazer compras</p></div>
                }
            </div>
        </div>
    )
}

export default Carrinho;