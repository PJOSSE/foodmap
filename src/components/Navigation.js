import React from 'react'
import {Link} from 'react-router-dom'


function Navigation(){

    return(
        <ul style={{display: 'flex'}}>
            <Link to="/">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Accueil</li>
            </Link>
            <Link to="/Raison">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Raison d'être du site</li>   
            </Link>
            <Link to="/Histoireetnourriture">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Se nourrir (carte du monde)</li>   
            </Link>
            <Link to="/Recette">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Les recettes de nos grands-mère et pères dans l'histoire</li>
            </Link>
            <Link to="/Lexique">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Lexique</li>
            </Link>
            <Link to="/Connexion">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Me contacter</li>
            </Link>    
            <Link to="/Mentions légales">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Confidentialité/mentions légales/cookies</li>
            </Link>

        </ul>
    )
};
export default Navigation;