import { useContext } from 'react';
import { Context } from '../../Context';
import style from './css/Home.module.css'
import CardJogos from '../cards/Cardjogos';

function Home(){
    let jogos = JSON.parse(sessionStorage.getItem('Supera_Jogos'))
    return(
        <main>
            <div className={style.container_home}>
                <h2 className={style.title}>Home</h2>
                <div className={style.container_products}>
                    {
                        jogos.map((jogo)=><CardJogos key={jogo.id} jogo={jogo}/>)
                    }
                </div>
            </div>
        </main>
    )
}

export default Home;