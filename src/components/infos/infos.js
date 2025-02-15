import React from 'react'
import { FaHeartbeat } from "react-icons/fa";
import './infos.css'
export default function 
() {
  return (
    <div className='Info-cotainer'>
    
    <h1>ENSEMBLE, SOUVONS DES VIES ...</h1>
    
      <div className='info-table'>
    <div className='desc-container'>
        <div  className='info-icon'>
        <FaHeartbeat style={{ color: 'white' }} />
        </div>
      <div>
        <h3>Un seul don de sang</h3>
        <p>peut sauver jusqu’à 3 vies, grâce à la séparation du sang en composants</p>
      </div>

    </div>


    <div className='desc-container'>
    <div  className='info-icon'>
    <FaHeartbeat style={{ color: 'white' }} />
        </div>
  
      <div>
        <h3> 1 million de patients</h3>
        <p>soignés chaque année grâce aux dons bénévoles de généreux citoyens. </p>
      </div>

    </div>
    <div className='desc-container'>
    <div  className='info-icon'>
     <FaHeartbeat style={{ color: 'white' }} />

        </div>
  
      <div>
        <h3> Donner son sang</h3>
        <p>améliore la régénération des cellules sanguines </p>
      </div>

    </div>


      <div className='desc-container'>
      <div  className='info-icon'>
      <FaHeartbeat style={{ color: 'white' }} />
        </div>
  
      <div>
        <h3> les campagnes annuelles </h3>
        <p>ont permis d’enregistrer  plus de 650 000 dons par an.</p>
      </div>

    </div> 
    </div>  
 </div>
  )
}
