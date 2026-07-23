import { View, Text, StyleSheet } from 'react-native';

/**
 * Componente Header
 * Exibe o título principal do aplicativo e uma descrição didática.
 * 
 * Conceito React Native:
 * - 'View' funciona de forma semelhante à 'div' da web (um container flexbox por padrão).
 * - 'Text' é o único componente que pode renderizar textos na tela no React Native.
 */
export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>Aprenda React Native</Text>
      <Text style={styles.title}>Calculadora Matemática</Text>
      <Text style={styles.subtitle}>As 4 Operações Básicas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  badge: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden', // Necessário no React Native para aplicar borderRadius em Text
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 4,
  },
});
