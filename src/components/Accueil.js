import manger from '../assets/manger.jpg'
import '../styles/Accueil.css'
import React from 'react'

function Accueil() {
    const title = ''
    return (
        <div className='bav-Accueil'>
            <img src={manger} alt='manger' className='manger'/>
            <h1 className='bav-title'>{title}</h1>
            <p> Source : IGA, "Manger en famille, plus important qu'on le croit!" 
                <a target="_blank" rel="noreferrer" href="https://blogue.iga.net/manger-en-famille-plus-important-quon-le-croit/"><strong>Lien</strong></a>.
            </p>
        </div>
    )
}
export default Accueil