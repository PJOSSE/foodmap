import '../styles/Accueil.css'
import React from 'react'

function Recette() {
    const title = 'Les livres de recettes de nos parents'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <p>Vous aurez ici une présentation de livres traitant de la cuisine qui me semblent importants à présenter.</p>
            <p>Originaires de différentes époques, pays, ils ont été très souvent employés par leurs contemporains pour cuisiner 
                et sont une mine d'or pour connaître les pratiques de nos prédécesseurs.</p>
                <p>Ils seront présentés par espace géographique, par pays et chronologiquement</p>
            <ul>
            <li>Liste par continent</li>
            <li><a target="_blank" rel="noreferrer" href="/recetteAfrique"><strong>Livres et recettes d'Afrique</strong></a></li>
            <li><a target="_blank" rel="noreferrer" href="/recetteEurope"><strong>Livres et recettes d'Europe</strong></a></li>
            <li><a target="_blank" rel="noreferrer" href="/recetteAsie"><strong>Livres et recettes d'Asie</strong></a></li>
            <li><a target="_blank" rel="noreferrer" href="/recetteOcéanie"><strong>Livres et recettes d'Océanie</strong></a></li>
            <li><a target="_blank" rel="noreferrer" href="/recetteAmérique"><strong>Livres et recettes d'Amérique</strong></a></li>
            </ul>
        </div>
        
    )
}
export default Recette