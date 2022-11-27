import './ContainerCima.css'
import { BsSun } from 'react-icons/bs'
import { BsMoon } from 'react-icons/bs'

function ContainerCima() {
    return (
        <div className="containerTopo">
            <div className='containerTopo__titulo'>
                <h3>devFinder</h3>
                <input type='checkbox' id='change-theme'></input>
                <label for='change-theme'>
                    <BsSun className='sol'/>
                    <BsMoon className='lua'/>
                </label>
            </div>
            <div className='containerTopo__input'>
                <input className='containerTopo__text' type='text' placeholder='Procute um usuário do GitHub...'></input>
                <button className='containerTopo__botao'>Pesquisar</button>
            </div>
        </div>
    )
}

export default ContainerCima