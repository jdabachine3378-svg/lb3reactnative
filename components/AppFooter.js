import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Composant AppFooter - Pied de page de l'application
 * 
 * Affiche des informations en bas de l'écran.
 */
export default function AppFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Mobile Academy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    backgroundColor: '#333333',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#EDEFEE',
  },
});

