import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function entrar() {
    if (!email.trim() || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.trim(), senha);
      navigation.replace('Home');
    } catch (erro) {
      Alert.alert('Erro', 'E-mail ou senha incorretos.');
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>🩸 THE VAMPIRE DIARIES</Text>
      <Text style={estilos.subtitulo}>Bem-vindo a Mystic Falls</Text>

      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        placeholderTextColor="#B99AA5"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={estilos.input}
        placeholder="Senha"
        placeholderTextColor="#B99AA5"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={estilos.botao} onPress={entrar}>
        <Text style={estilos.textoBotao}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={estilos.link}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#16080D',
    justifyContent: 'center', padding: 30
  },
  titulo: {
    fontSize: 27, color: '#E6C5C5',
    fontWeight: 'bold', textAlign: 'center', marginBottom: 15
  },
  subtitulo: {
    color: '#C78C9B', fontSize: 18,
    textAlign: 'center', marginBottom: 35
  },
  input: {
    backgroundColor: '#2C151F', color: '#FFF',
    padding: 15, borderRadius: 10, marginBottom: 18
  },
  botao: {
    backgroundColor: '#8B1E3F', padding: 17,
    borderRadius: 10, alignItems: 'center'
  },
  textoBotao: { color: '#FFF', fontWeight: 'bold' },
  link: {
    color: '#E9A6B8', textAlign: 'center', marginTop: 20
  }
});