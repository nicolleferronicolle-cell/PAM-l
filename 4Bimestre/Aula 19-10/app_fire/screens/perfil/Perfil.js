import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from 'react-native';

import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';

export default function Editar({ route, navigation }) {
  const personagem = route.params?.personagem;

  const [nome, setNome] = useState(personagem?.nome || '');
  const [especie, setEspecie] = useState(personagem?.especie || '');

  async function atualizar() {
    if (!personagem || !nome.trim() || !especie.trim()) {
      Alert.alert('Erro', 'Dados inválidos.');
      return;
    }

    if (personagem.usuarioId !== auth.currentUser?.uid) {
      Alert.alert('Erro', 'Acesso não autorizado.');
      return;
    }

    try {
      await updateDoc(doc(db, 'personagens', personagem.id), {
        nome: nome.trim(),
        especie: especie.trim()
      });

      Alert.alert('Sucesso', 'Personagem atualizado!');
      navigation.goBack();
    } catch (erro) {
      Alert.alert('Erro', erro.message);
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>🩸 EDITAR PERSONAGEM</Text>

      <TextInput
        style={estilos.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
        placeholderTextColor="#B99AA5"
      />

      <TextInput
        style={estilos.input}
        value={especie}
        onChangeText={setEspecie}
        placeholder="Espécie"
        placeholderTextColor="#B99AA5"
      />

      <TouchableOpacity style={estilos.botao} onPress={atualizar}>
        <Text style={estilos.textoBotao}>SALVAR ALTERAÇÕES</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={estilos.link}>Voltar</Text>
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
    color: '#E6C5C5', fontSize: 26,
    fontWeight: 'bold', textAlign: 'center', marginBottom: 35
  },
  input: {
    backgroundColor: '#2C151F', color: '#FFF',
    padding: 15, borderRadius: 10, marginBottom: 20
  },
  botao: {
    backgroundColor: '#8B1E3F', padding: 17,
    alignItems: 'center', borderRadius: 10
  },
  textoBotao: { color: '#FFF', fontWeight: 'bold' },
  link: {
    color: '#E9A6B8', textAlign: 'center', marginTop: 25
  }
});