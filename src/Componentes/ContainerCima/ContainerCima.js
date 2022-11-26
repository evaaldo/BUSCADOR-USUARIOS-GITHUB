import './ContainerCima.css'

function ContainerCima() {
    return (
        <div className="containerTopo">
            <div className='containerTopo__titulo'>
                <h3>devFinder</h3>
                <input className='containerTopo__toggle' type='checkbox'></input>
            </div>
            <div className='containerTopo__input'>
                <input className='containerTopo__text' type='text' placeholder='Procute um usuário do GitHub...'></input>
                <button className='containerTopo__botao'>Pesquisar</button>
            </div>
        </div>
    )
}

export default ContainerCima