import './ContainerBaixo.css'

function ContainerBaixo() {
    return (
        <div className="containerBaixo">
            <div className='containerBaixo__ícone'>
                <img className='containerBaixo__foto' src='/images/pf-pic.png'></img>
            </div>
            <div className='containerBaixo__infos'>
                <div className='info-1'>
                    <h2 className='containerBaixo__nome'>Evaldo Rodrigues</h2>
                    <p className='containerBaixo__data'>Entrou em 1 agosto de 2022</p>
                </div>
                <div className='info-2'>
                    <p className='containerBaixo__bio'>Hello, my name is Evaldo Rodrigues and im a front-end developer. Im focus in HTML, CSS and JavaScript.</p>
                </div>
                <div className='info-3'>
                    <div className='info'>
                        <p className='info__name'>Repos</p>
                        <p className='info__value'>9</p>
                    </div>
                    <div className='info'>
                        <p className='info__name'>Followers</p>
                        <p className='info__value'>25</p>
                    </div>
                    <div className='info'>
                        <p className='info__name'>Following</p>
                        <p className='info__value'>27</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerBaixo