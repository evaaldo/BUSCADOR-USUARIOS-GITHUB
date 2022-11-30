import './ContainerCima.css'
import './ContainerBaixo.css'
import { BsGeoAlt } from 'react-icons/bs'
import { BsLink } from 'react-icons/bs'

import axios from 'axios'
import { useState } from 'react'

function Container() {

    const [search, setSearch] = useState('')
    const [name, setName] = useState('Usuário')
    const [bio, setBio] = useState('Aguardando')
    const [public_repos, setPublic_repos] = useState('...')
    const [avatar_url, setAvatar_url] = useState('/images/no pf.png')
    const [followers, setFollowers] = useState('...')
    const [following, setFollowing] = useState('...')
    const [location, setLocation] = useState('localização')
    const [blog, setBlog] = useState('link')

    const handleSearch = () => {

        axios.get(`https://api.github.com/users/${search}`)
            .then(res => {
                setName(res.data.name)
                setBio(res.data.bio)
                setPublic_repos(res.data.public_repos)
                setAvatar_url(res.data.avatar_url)
                setFollowers(res.data.followers)
                setFollowing(res.data.following)
                setLocation(res.data.location)
                setBlog(res.data.blog)
                console.log(res.data)
            })

    }

    return (
            <div className='container'>
                <div className="containerTopo">
                    <div className='containerTopo__titulo'>
                        <h3>devFinder</h3>
                    </div>
                    <div className='containerTopo__input'>
                        <input className='containerTopo__text' type='text' placeholder='Procure um usuário do GitHub...' 
                        onChange={(e) => setSearch(e.target.value)}></input>
                        <button className='containerTopo__botao' onClick={handleSearch}>Pesquisar</button>
                    </div>
                </div>
                <div className="containerBaixo">
                    <div className='containerBaixo__ícone'>
                        <img className='containerBaixo__foto' src={avatar_url}></img>
                    </div>
                    <div className='containerBaixo__infos'>
                        <div className='info-1'>
                            <h2 className='containerBaixo__nome'>{name}</h2>
                        </div>
                        <div className='info-2'>
                            <p className='containerBaixo__bio'>{bio}</p>
                        </div>
                        <div className='info-3'>
                            <div className='info'>
                                <p className='info__name'>Repos</p>
                                <p className='info__value'>{public_repos}</p>
                            </div>
                            <div className='info'>
                                <p className='info__name'>Followers</p>
                                <p className='info__value'>{followers}</p>
                            </div>
                            <div className='info'>
                                <p className='info__name'>Following</p>
                                <p className='info__value'>{following}</p>
                            </div>
                        </div>
                        <div className='info-4'>
                            <div className='local'>
                                <BsGeoAlt size={20}/>
                                <p className='info__value'>{location}</p>
                            </div>
                            <div className='link'>
                                <BsLink size={20}/>
                                <a href={blog} className='info__value'>link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Container