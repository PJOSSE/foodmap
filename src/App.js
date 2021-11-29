import Accueil from './components/Accueil.js'
import Raison from './components/Raison.js'
import Recette from './components/Recette.js' 
import recetteAsie from './components/recetteAsie.js'
import recetteEurope from './components/recetteEurope.js'
import recetteEspagne from './components/recetteEspagne.js'
import recetteFrance from './components/recetteFrance.js'
import recetteItalie from './components/recetteItalie.js'
import recetteAngleterre from './components/recetteAngleterre.js'
import recetteOceanie from './components/recetteOceanie.js'
import recetteAfrique from './components/recetteAfrique.js'
import Navigation from './components/Navigation.js'
import Projet from './components/Histoireetnourriture.js'
import Europe from './components/Europe.js'
import France from './components/France.js'
import Espagne from './components/Espagne.js'
import Angleterre from './components/Angleterre.js'
import Afrique from './components/Afrique.js'
import Ouganda from './components/Ouganda.js'
import Ethiopie from './components/Ethiopie.js'
import Somalie from './components/Somalie.js'
import Afriquedusud from './components/Afriquedusud.js'
import Asie from './components/Asie.js'
import Chine from './components/Chine.js'
import Japon from './components/Japon.js'
import Vietnam from './components/Vietnam.js'
import Inde from './components/Inde.js'
import Amerique from './components/Amerique.js'
import EtatsUnis from './components/EtatsUnis.js'
import Canada from './components/Canada.js'
import Mexique from './components/Mexique.js'
import Equateur from './components/Equateur.js'
import Oceanie from './components/Oceanie.js'
import PapouasieNouvelleGuinee from './components/PapouasieNouvelleGuinee.js'
import NouvelleZelande from './components/NouvelleZelande.js'
import Australie from './components/Australie.js'
// import Connexion from './components/Connexion.js'
import Lexique from './components/Lexique.js'
import Mentions from './components/Mentions légales.js'

import React from 'react'

import{BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Router>
                <Navigation/>
                    <Route path="/" exact component={Accueil}/>
                    <Route path="/Histoireetnourriture" exact component={Projet}/>
                    <Route path="/Europe" exact component={Europe}/>
                    <Route path="/France" exact component={France}/>
                    <Route path="/Espagne" exact component={Espagne}/>
                    <Route path="/Angleterre" exact component={Angleterre}/>
                    <Route path="/Afrique" exact component={Afrique}/>
                    <Route path="/Ouganda" exact component={Ouganda}/>
                    <Route path="/Ethiopie" exact component={Ethiopie}/>
                    <Route path="/Somalie" exact component={Somalie}/>
                    <Route path="/Afriquedusud" exact component={Afriquedusud}/>
                    <Route path="/Asie" exact component={Asie}/>
                    <Route path="/Chine" exact component={Chine}/>
                    <Route path="/Japon" exact component={Japon}/>
                    <Route path="/Vietnam" exact component={Vietnam}/>
                    <Route path="/Inde" exact component={Inde}/>
                    <Route path="/Amerique" exact component={Amerique}/>
                    <Route path="/EtatsUnis" exact component={EtatsUnis}/>
                    <Route path="/Canada" exact component={Canada}/>
                    <Route path="/Mexique" exact component={Mexique}/>
                    <Route path="/Equateur" exact component={Equateur}/>
                    <Route path="/Oceanie" exact component={Oceanie}/>
                    <Route path="/PapouasieNouvelleGuinee" exact component={PapouasieNouvelleGuinee}/>
                    <Route path="/NouvelleZelande" exact component={NouvelleZelande}/>
                    <Route path="/Australie" exact component={Australie}/>
                    <Route path="/Raison" exact component={Raison}/>
                    <Route path="/Recette" exact component={Recette}/>
                    <Route path="/recetteAsie" exact component={recetteAsie}/>
                    <Route path="/recetteEurope" exact component={recetteEurope}/>
                    <Route path="/recetteEspagne" exact component={recetteEspagne}/>
                    <Route path="/recetteFrance" exact component={recetteFrance}/>
                    <Route path="/recetteItalie" exact component={recetteItalie}/>
                    <Route path="/recetteAngleterre" exact component={recetteAngleterre}/>
                    <Route path="/recetteOceanie" exact component={recetteOceanie}/>
                    <Route path="/recetteAfrique" exact component={recetteAfrique}/>
                    {/* <Route path="/Connexion" exact component={Connexion}/> */}
                    <Route path="/Lexique" exact component={Lexique}/>
                    <Route path="/Mentions légales" exact component={Mentions}/>   
            </Router>    
        </div>
    );
}
export default App;
