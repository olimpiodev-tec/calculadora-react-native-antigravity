import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * Componente OperationButton
 * Botão customizado para cada operação matemática.
 * 
 * Conceito React Native:
 * - 'TouchableOpacity' é um componente de toque (botão) que reduz a opacidade do elemento quando pressionado, dando feedback visual ao usuário.
 */
export default function OperationButton({ label, symbol, onPress, backgroundColor = '#3b82f6' }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.symbol}>{symbol}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '48%',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 3,
  },
  symbol: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 2,
  },
});
