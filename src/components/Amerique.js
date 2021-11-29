import livre from '../assets/livre.png'
import '../styles/Accueil.css'
import React from 'react'

function Amerique() {
    const title = 'Histoire de l\'alimentation en Amérique'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <ul className='nav-barAfrique'>
                <li>Thématique 1</li>
                <li>Thématique 2</li>
                <li>Thématique 3</li>
                <li>Thématique 4</li>
                <li>Thématique 5</li>
            </ul>
            <ul>
                <li>Liste par pays</li>
                <li><a target="_blank" rel="noreferrer-Unis" href="/EtatsUnis"><strong>Etats-Unis</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Canada"><strong>Canada</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Mexique"><strong>Mexique</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Equateur"><strong>Equateur</strong></a></li>
            </ul>
            {/* <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>   */}
        </div>
    )
}
export default Amerique;
