import * as React from 'react';
import { View } from 'react-native';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import WelcomeScreen from './WelcomeScreen';

/**
 * Composant principal de l'application
 * 
 * Structure de l'application :
 * - AppHeader : En-tête de l'application
 * - WelcomeScreen : Écran d'accueil avec ScrollView
 * - AppFooter : Pied de page de l'application
 */
export default function App() {
  return (
    <>
      {/* Conteneur principal avec fond sombre */}
      <View style={{ flex: 1, backgroundColor: '#495E57' }}>
        <AppHeader />
        <WelcomeScreen />
      </View>
      <AppFooter />
    </>
  );
}

