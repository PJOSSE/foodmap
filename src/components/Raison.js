import assiette from '../assets/assiette.jpg'
import '../styles/Accueil.css'
import React from 'react'


function Raison() {
    const title = 'Raison'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <h2>L'alimentation : </h2>
            <img src={assiette} alt='assiette' className='assiette'/>

            <h2>Un patrimoine commun et varié</h2>
            <p>Depuis longtemps l'être humain cherche à se nourrir, il à ainsi constuit un incroyable patrimoine culinaire que j'essayerai de développer ici et des différentes formes que ce patrimoine à pris dans l'histoire.</p>


            <h2>Un fait social et global</h2>
            <p>S'alimenter est aussi un fait social. On ne s'alimente pas partout pareil bien que les pratiques tendent à se mondialiser. Nous verrons ensemble différentes pratiques et rituels en lien avec l'alimentation dans l'histoire.</p>

            <h2>Un plaisir partagé par toutes les communautés</h2>
            <p>Nous traiterons aussi bien entendu aussi du plaisir de se nourrir</p>

            <p></p>

            <h2>Mes sources</h2>
            <p>Mes sources seront de grands spécialistes dans leurs domaines, que je tenterai de vulgariser au mieux avec références et lexique.</p>
            {/* <p>Sur le chiffre d'affaire des emballages, de TIZIANO POLITO, publié le 04/02/2021 chez Emballage magazine, <a target="_blank" rel="noreferrer" href="https://www.emballagesmagazine.com/tous-secteurs/l-emballage-represente-un-chiffre-d-affaires-de-18-3-milliards-d-euros.60808"> "L’emballage représente un chiffre d’affaires de 18,3 milliards d’euros"</a>.</p>
            <p>Sur le pic de pétrole, le magazine Reporterre, article de HERVE KEMPF, publié le 26/06/2021, <a target="_blank" rel="noreferrer" href="https://reporterre.net/L-Europe-a-dix-ans-pour-se-preparer-au-pic-de-petrole"> "L’Europe a dix ans pour se préparer au pic de pétrole"</a>.</p>
     */}
        </div>
    )
}
export default Raison

