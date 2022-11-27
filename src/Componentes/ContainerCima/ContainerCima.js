import './ContainerCima.css'
import { BsSun } from 'react-icons/bs'
import { BsMoon } from 'react-icons/bs'

import axios from 'axios'
import { useState } from 'react'

function ContainerCima() {

    const [search, setSearch] = useState('')

    const GITHUBResponse = {
        name: String,
        bio: String,
        avatar_url: String
    }

    const handleSearch = () => {

        axios.get(`https://api.github.com/users/${search}`)
            .then(res => console.log(res.data))
    }

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
                <input className='containerTopo__text' type='text' placeholder='Procure um usuário do GitHub...' 
                onChange={(e) => setSearch(e.target.value)}></input>
                <button className='containerTopo__botao' onClick={handleSearch}>Pesquisar</button>
            </div>
        </div>
    )
}

export default ContainerCima