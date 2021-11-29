import livre from '../assets/livre.png'
import '../styles/Accueil.css'
import React from 'react'

function Afrique() {
    const title = 'Histoire de l\'alimentation en Afrique'
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
                <li><a target="_blank" rel="noreferrer" href="/Ouganda"><strong>Ouganda</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Ethiopie"><strong>Ethiopie</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Somalie"><strong>Somalie</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/AfriqueduSud"><strong>Afrique du Sud</strong></a></li>
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
export default Afrique;
