import livre from '../assets/livre.png'
import '../styles/Accueil.css'
import React from 'react'

function Europe() {
    const title = 'Histoire de l\'alimentation en Europe'
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
                <li><a target="_blank" rel="noreferrer" href="/France"><strong>France</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Espagne"><strong>Espagne</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Angleterre"><strong>Angleterre</strong></a></li>
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
export default Europe;
