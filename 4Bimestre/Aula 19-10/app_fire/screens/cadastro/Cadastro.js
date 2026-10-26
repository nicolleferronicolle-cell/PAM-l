import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from 'react-native';

import {
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function cadastrar() {
    if (!nome.trim() || !email.trim() || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    try {
      const resultado = await createUserWithEmailAndPassword(
        auth, email.trim(), senha
      );

      await setDoc(doc(db, 'usuarios', resultado.user.uid), {
        nome: nome.trim(),
        email: email.trim()
      });

      await signOut(auth);
      Alert.alert('Sucesso', 'Conta criada!');
      navigation.replace('Login');
    } catch (erro) {
      Alert.alert('Erro', erro.message);
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>🩸 CADASTRO</Text>
      <Text style={estilos.subtitulo}>Torne-se um morador de Mystic Falls</Text>

      <TextInput
        style={estilos.input}
        placeholder="Nome"
        placeholderTextColor="#B99AA5"
        value={nome}
        onChangeText={setNome}
      />

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
        placeholder="Senha (mínimo 6 caracteres)"
        placeholderTextColor="#B99AA5"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={estilos.botao} onPress={cadastrar}>
        <Text style={estilos.textoBotao}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={estilos.link}>Já tenho uma conta</Text>
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
    fontSize: 28, color: '#E6C5C5',
    textAlign: 'center', fontWeight: 'bold'
  },
  subtitulo: {
    color: '#C78C9B', textAlign: 'center',
    marginVertical: 25
  },
  input: {
    backgroundColor: '#2C151F', color: '#FFF',
    padding: 15, borderRadius: 10, marginBottom: 18
  },
  botao: {
    backgroundColor: '#8B1E3F', padding: 17,
    alignItems: 'center', borderRadius: 10
  },
  textoBotao: { color: '#FFF', fontWeight: 'bold' },
  link: {
    color: '#E9A6B8', textAlign: 'center', marginTop: 20
  }
});