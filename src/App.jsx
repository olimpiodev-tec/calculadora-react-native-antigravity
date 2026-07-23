import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Importação dos nossos componentes didáticos
import Header from './components/Header';
import NumberInput from './components/NumberInput';
import OperationButton from './components/OperationButton';
import ResultDisplay from './components/ResultDisplay';

/**
 * Componente Principal: App
 * 
 * Conceitos chave de React Native demonstrados aqui:
 * 1. useState: Hook para armazenar e atualizar o estado (dados) na tela.
 * 2. Manipulação de Eventos: Funções acionadas ao clicar nos botões ou digitar.
 * 3. Validação Básica em JS: Conversão de texto para número (parseFloat) e tratamento de exceções (ex: divisão por zero).
 */
export default function App() {
  // Estados para guardar os valores digitados nos inputs (como o TextInput lida com texto, iniciamos com String vazia)
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  // Estados para armazenar o resultado da operação, mensagem de erro e o nome da operação atual
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeOperation, setActiveOperation] = useState('');

  /**
   * Função auxiliar para validar se os dois números foram digitados
   * Retorna os números convertidos para Number ou null se houver erro.
   */
  function parseInputs() {
    // Limpa mensagens de erro anteriores
    setErrorMessage('');

    // Verifica se algum campo está vazio
    if (number1.trim() === '' || number2.trim() === '') {
      setErrorMessage('Por favor, preencha os dois números.');
      setResult(null);
      return null;
    }

    // Converte a string digitada para número decimal (substitui vírgula por ponto se necessário)
    const n1 = parseFloat(number1.replace(',', '.'));
    const n2 = parseFloat(number2.replace(',', '.'));

    // Verifica se a conversão resultou em um número válido (NaN = Not a Number)
    if (isNaN(n1) || isNaN(n2)) {
      setErrorMessage('Digite valores numéricos válidos.');
      setResult(null);
      return null;
    }

    return { n1, n2 };
  }

  // 1. Operação de Adição (+)
  function handleSum() {
    const inputs = parseInputs();
    if (!inputs) return;

    const calculo = inputs.n1 + inputs.n2;
    setResult(calculo);
    setActiveOperation('Adição');
  }

  // 2. Operação de Subtração (-)
  function handleSubtract() {
    const inputs = parseInputs();
    if (!inputs) return;

    const calculo = inputs.n1 - inputs.n2;
    setResult(calculo);
    setActiveOperation('Subtração');
  }

  // 3. Operação de Multiplicação (x)
  function handleMultiply() {
    const inputs = parseInputs();
    if (!inputs) return;

    const calculo = inputs.n1 * inputs.n2;
    setResult(calculo);
    setActiveOperation('Multiplicação');
  }

  // 4. Operação de Divisão (/)
  function handleDivide() {
    const inputs = parseInputs();
    if (!inputs) return;

    // Regra matemática: Não é possível dividir por zero!
    if (inputs.n2 === 0) {
      setErrorMessage('Não é possível dividir por zero (0).');
      setResult(null);
      setActiveOperation('Divisão');
      return;
    }

    const calculo = inputs.n1 / inputs.n2;
    // Arredonda para no máximo 4 casas decimais se for um número com muitas casas
    const resultadoFormatado = Number.isInteger(calculo) ? calculo : parseFloat(calculo.toFixed(4));
    
    setResult(resultadoFormatado);
    setActiveOperation('Divisão');
  }

  // Função para Resetar/Limpar os campos
  function handleClear() {
    setNumber1('');
    setNumber2('');
    setResult(null);
    setErrorMessage('');
    setActiveOperation('');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Card Principal da Calculadora */}
            <View style={styles.card}>
              {/* Cabeçalho */}
              <Header />

              {/* Entradas de Números */}
              <NumberInput
                label="Primeiro Número"
                value={number1}
                onChangeText={setNumber1}
                placeholder="Ex: 10"
              />

              <NumberInput
                label="Segundo Número"
                value={number2}
                onChangeText={setNumber2}
                placeholder="Ex: 5"
              />

              {/* Rótulo das Operações */}
              <Text style={styles.sectionLabel}>Escolha a Operação:</Text>

              {/* Grid dos Botões das 4 Operações Básicas */}
              <View style={styles.operationsGrid}>
                <OperationButton
                  label="Somar"
                  symbol="+"
                  onPress={handleSum}
                  backgroundColor="#2563eb" // Azul
                />
                <OperationButton
                  label="Subtrair"
                  symbol="−"
                  onPress={handleSubtract}
                  backgroundColor="#d97706" // Laranja
                />
                <OperationButton
                  label="Multiplicar"
                  symbol="×"
                  onPress={handleMultiply}
                  backgroundColor="#059669" // Verde
                />
                <OperationButton
                  label="Dividir"
                  symbol="÷"
                  onPress={handleDivide}
                  backgroundColor="#7c3aed" // Roxo
                />
              </View>

              {/* Botão de Limpar */}
              <TouchableOpacity
                style={styles.clearButton}
                onPress={handleClear}
                activeOpacity={0.7}
              >
                <Text style={styles.clearButtonText}>Limpar Campos</Text>
              </TouchableOpacity>

              {/* Display de Resultado / Mensagem de Erro */}
              <ResultDisplay
                result={result}
                errorMessage={errorMessage}
                activeOperationName={activeOperation}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 440,
    borderRadius: 24,
    padding: 24,
    // Sombra para iOS
    shadowColor: '#64748b',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    // Sombra para Android
    elevation: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginTop: 8,
    marginBottom: 10,
  },
  operationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
  },
  clearButton: {
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  clearButtonText: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '600',
  },
});

