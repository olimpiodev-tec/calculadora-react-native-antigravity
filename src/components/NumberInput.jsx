import { View, Text, TextInput, StyleSheet } from 'react-native';

/**
 * Componente NumberInput
 * Recebe props para customização e manipulação do valor digitado pelo usuário.
 * 
 * Conceito React Native:
 * - 'TextInput' é usado para entrada de dados via teclado.
 * - 'keyboardType="numeric"' habilita o teclado numérico em dispositivos móveis.
 */
export default function NumberInput({ label, value, onChangeText, placeholder }) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#94a3b8"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 18,
    color: '#0f172a',
    fontWeight: '500',
  },
});
