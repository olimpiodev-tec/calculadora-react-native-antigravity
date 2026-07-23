import { View, Text, StyleSheet } from 'react-native';

/**
 * Componente ResultDisplay
 * Exibe o resultado da operação atual ou mensagens de aviso (ex: erro de validação).
 */
export default function ResultDisplay({ result, errorMessage, activeOperationName }) {
  // Se houver mensagem de erro, exibe o card de erro
  if (errorMessage) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorLabel}>Aviso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {activeOperationName ? `Resultado (${activeOperationName})` : 'Resultado'}
      </Text>
      <Text style={styles.resultValue}>
        {result !== null ? result : '—'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  resultValue: {
    fontSize: 36,
    fontWeight: '800',
    color: '#38bdf8',
  },
  errorContainer: {
    backgroundColor: '#fef2f2',
    borderWidth: 1.5,
    borderColor: '#fca5a5',
  },
  errorLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#dc2626',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  errorMessage: {
    fontSize: 16,
    fontWeight: '600',
    color: '#991b1b',
    textAlign: 'center',
  },
});
