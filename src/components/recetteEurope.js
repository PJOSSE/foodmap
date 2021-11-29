import livre from '../assets/livre.png'
import '../styles/Accueil.css'
import React from 'react'

function recetteEurope() {
    const title = 'Livres et recettes d Europe'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <ul>
                <li>Thématique 1</li>
                <li>Thématique 2</li>
                <li>Thématique 3</li>
                <li>Thématique 4</li>
                <li>Thématique 5</li>
            </ul>
            <ul>
            <li>Liste par continent</li>
            <li><a target="_blank" rel="noreferrer" href="/recetteAngleterre"><strong>Livres et recettes d'Angleterre</strong></a></li>
            <li><a target="_blank" rel="noreferrer" href="/recetteEspagne"><strong>Livres et recettes d'Espagne</strong></a></li>
            <li><a target="_blank" rel="noreferrer" href="/recetteItalie"><strong>Livres et recettes d'Italie</strong></a></li>
            <li><a target="_blank" rel="noreferrer" href="/recetteFrance"><strong>Livres et recettes de France</strong></a></li>
            </ul> 
        </div>
    )
}
export default recetteEurope;