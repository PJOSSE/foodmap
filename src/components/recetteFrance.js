import livre from '../assets/livre.png'
import '../styles/Accueil.css'
import React from 'react'

function recetteFrance() {
    const title = 'Livres et recettes de France'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <ul>
                <li>L'historiographie</li>
                <p>Comme vous le savez surement, la cuisine est un sujet qui intéresse beaucoup les français. 
                    La littérature sur ce domaine est foisonnante et intéresse de nombreux historiens. 
                    L'historiographie peut nous permettre de mieux comprendre. Pour cela, permettez moi de vous parler des
                    dernières recherches sur les livres de cuisine français et des livres à connaître.</p>
                    <p>Déjà le Viandier de Taillevent nous donne quelques recettes.</p>
                <li>Thématique 2</li>
                <li>Thématique 3</li>
                <li>Thématique 4</li>
                <li>Thématique 5</li>
            </ul>
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
            <p><strong></strong></p>  
        </div>
    )
}
export default recetteFrance;