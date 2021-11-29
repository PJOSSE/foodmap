import livre from '../assets/livre.png'
import '../styles/Accueil.css'
import React from 'react'

function Asie() {
    const title = 'Histoire de l\'alimentation en Asie'
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
                <li><a target="_blank" rel="noreferrer" href="/Chine"><strong>Chine</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Inde"><strong>Inde</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Vietnam"><strong>Vietnam</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Japon"><strong>Japon</strong></a></li>
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
export default Asie;
