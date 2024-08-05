import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculator</Text>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        {['1', '2', '3', '+'].map((item) => (
          <TouchableOpacity key={item} onPress={() => handlePress(item)} style={styles.button}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['4', '5', '6', '-'].map((item) => (
          <TouchableOpacity key={item} onPress={() => handlePress(item)} style={styles.button}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['7', '8', '9', '*'].map((item) => (
          <TouchableOpacity key={item} onPress={() => handlePress(item)} style={styles.button}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['0', '.', '=', '/'].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => (item === '=' ? handleEqual() : handlePress(item))}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleClear} style={[styles.button, styles.clearButton]}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    fontSize: 32,
    width: '100%',
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
    width: '100%',
    textAlign: 'right',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 5,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  clearButton: {
    backgroundColor: '#FF0000',
    width: '100%',
  },
});
