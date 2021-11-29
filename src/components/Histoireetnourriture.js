import carte from '../assets/bav-carte.png'
import '../styles/Accueil.css'
import React from 'react'

function Projet() {
    const title = 'Notre projet'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <p><strong>Le projet de ce site est d'aborder l'histoire de l'alimentation dans sa globalité par période et espace géographique ainsi que par catégorie.</strong></p>
            <p>Cliquez sur l'espace géographique vous intéréssant et vous pourrez ensuite avoir des informations complémentaires</p> 
            <p>Belle journée à vous</p>
            <img src={carte} alt='carte' className='bav-carte'/>
            <ul>
                <li>Liste par continents</li>
                <li><a target="_blank" rel="noreferrer" href="/Afrique"><strong>Afrique</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Amerique"><strong>Amerique</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Asie"><strong>Asie</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Europe"><strong>Europe</strong></a></li>
                <li><a target="_blank" rel="noreferrer" href="/Océanie"><strong>Océanie</strong></a></li>
            </ul>
        </div>
    )
}
export default Projet