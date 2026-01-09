import * as React from 'react';
import { ScrollView, Text } from 'react-native';

/**
 * Composant WelcomeScreen - Écran d'accueil avec défilement
 * 
 * Ce composant utilise ScrollView au lieu de View pour permettre
 * à l'utilisateur de faire défiler le contenu lorsque le texte
 * dépasse la hauteur de l'écran.
 */
export default function WelcomeScreen() {
  return (
    <ScrollView
      indicatorStyle="white"  // Barre de défilement blanche pour fond sombre
      style={{ flex: 1 }}      // Prend toute la hauteur disponible
    >
      <Text
        style={{
          padding: 40,          // Espacement autour du texte
          fontSize: 50,         // Grande taille de police
          color: '#EDEFEE',     // Couleur claire pour contraste
          textAlign: 'center',  // Centrage du texte
        }}
      >
        Bienvenue dans l'application Mobile Academy.
        
        Ce texte d'accueil est volontairement long pour illustrer un cas d'usage réel.
        Il permet à l'utilisateur de faire défiler pour lire l'intégralité du message d'introduction,
        sans que le texte ne soit tronqué.
        
        Ce type de contenu est particulièrement utile pour :
        - Présenter des informations importantes sur l'application
        - Afficher des consignes d'utilisation
        - Communiquer des informations sur l'objectif du module ou de l'application
        
        Plus le texte est long, plus l'effet de défilement sera visible et perceptible
        sur l'émulateur ou l'appareil réel. C'est pourquoi nous ajoutons plusieurs paragraphes
        pour que la hauteur totale dépasse clairement la taille standard d'un écran de smartphone.
        
        Avec ScrollView, l'utilisateur peut maintenant parcourir tout le contenu en faisant
        glisser son doigt vers le haut ou vers le bas, et la barre de défilement blanche
        apparaît sur le côté pour indiquer la position dans le document.
        
        Cette approche peut être réutilisée pour n'importe quel autre écran contenant
        beaucoup de texte ou de contenu qui nécessite un défilement vertical.
      </Text>
    </ScrollView>
  );
}

