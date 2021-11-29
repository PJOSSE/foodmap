import livre from '../assets/livre.png'
import '../styles/Accueil.css'
import React from 'react'

function Lexique() {
    const title = 'Lexique'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <p><strong>Carne : </strong>Blablabla</p>
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

                {/* <br/><a target="_blank" rel="noreferrer" href="https://www.facebook.com/BricAVrac"><strong>Bric à vrac</strong></a>.</p> */}
            <img src={livre} alt='livre' className='livre'/>
        </div>
    )
}
export default Lexique;
