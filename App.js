import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

const request = async(callback) =>{
  const Response = await fetch("https://api.kanye.rest");
  const parsed = await Response.json();
  callback(parsed.quote);
}

export default function App() {
  const [registro, setRegistro] = useState('');

  const requestQuote = async () => {
    const response = await fetch("https://api.kanye.rest");
    const data = await response.json();
    setRegistro(data.quote);
  }
  
  useEffect(()=>{
    request(setRegistro)
  }, []);

  const handleReset = () => {
    requestQuote();
  };
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>API Versos do Kanye West</Text>
        <View style={styles.itens}>
          <Text style={styles.text}>Frase: {registro}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Obter Nova Frase</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f20',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: ''
  },
  itens: {
    alignItems: 'center',
    width: 350,
    backgroundColor: '#7e2c12',
    padding:15,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#ffbf6d'
  },
  titulo: {
    fontSize: 30,
    marginTop: 20,
    color: '#ffbf6d'
  },
  button: {
    backgroundColor: '#ffbf6d',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f1f20',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c1fdfb'
  }
});
