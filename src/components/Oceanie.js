import livre from '../assets/livre.png'
import '../styles/Accueil.css'
import React from 'react'

function Oceanie() {
    const title = 'Histoire de l\'alimentation en Oceanie'
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
                <li><a target="_blank" rel="noreferrer" href="/Australie"><strong>Australie</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/PapouasieNouvelleGuinee"><strong>Papouasie-Nouvelle-Guinée</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/NouvelleZelande"><strong>Nouvelle-Zélande</strong></a></li>
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
export default Oceanie;
