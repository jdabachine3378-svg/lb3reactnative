import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Composant AppHeader - En-tête de l'application
 * 
 * Affiche le titre de l'application en haut de l'écran.
 */
export default function AppHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Mobile Academy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#333333',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EDEFEE',
  },
});

