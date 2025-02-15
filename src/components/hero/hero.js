import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import './hero.css'; // Assurez-vous de créer ce fichier CSS

export default function Hero() {
  return (
    <div className="hero-container">
        
        {/* Animation du titre */}
        <motion.h1 
          className='first-title'
          initial={{ opacity: 0, y: -30 }} // Départ : invisible + légèrement au-dessus
          animate={{ opacity: 1, y: 0 }}  // Animation : devient visible et revient à sa place
          transition={{ duration: 1, ease: "easeOut" }} 
        >
          Un simple geste, une vie sauvée. Votre don, leur espoir !
        </motion.h1>

        {/* Animation du paragraphe */}
        <motion.p 
          className='second-title'
          initial={{ opacity: 0, y: 30 }}  // Départ : invisible + légèrement en bas
          animate={{ opacity: 1, y: 0 }}  // Animation : devient visible et remonte
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }} // Un léger délai pour un effet fluide
        >
          Chaque don de sang est un acte de solidarité qui peut sauver des vies. 
          En donnant votre sang, vous offrez une seconde chance aux patients qui en ont besoin.
          Faites partie de notre communauté et contribuez à un monde plus humain !
        </motion.p>
        
        {/* Animation sur les boutons */}
        <motion.div 
          className='hero-buttons'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <motion.button 
            className='btn-signup' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/inscription'}
          >
            Inscrivez-vous
          </motion.button>

          <motion.button 
            className='btn-contact' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
          >
            Contactez-nous
          </motion.button>
        </motion.div>
    </div>
  );
}
