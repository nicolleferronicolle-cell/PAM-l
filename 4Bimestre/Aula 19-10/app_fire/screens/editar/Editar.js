
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';

export default function Editar({ route, navigation }) {
  const personagem = route.params?.personagem;

  const [nome, setNome] = useState(personagem?.nome || '');
  const [especie, setEspecie] = useState(personagem?.especie || '');
  const [salvando, setSalvando] = useState(false);

  async function atualizar() {
    if (!personagem?.id || !nome.trim() || !especie.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    if (!auth.currentUser ||
        personagem.usuarioId !== auth.currentUser.uid) {
      Alert.alert('Erro', 'Você não pode editar este personagem.');
      return;
    }

    try {
      setSalvando(true);

      await updateDoc(doc(db, 'personagens', personagem.id), {
        nome: nome.trim(),
        especie: especie.trim()
      });

      Alert.alert('Sucesso', 'Personagem atualizado!');
      navigation.goBack();

    } catch (erro) {
      Alert.alert('Erro', erro.message);
    } finally {
      setSalvando(false);
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>🩸 EDITAR PERSONAGEM</Text>

      <Text style={estilos.label}>Nome</Text>
      <TextInput
        style={estilos.input}
        placeholder="Nome do personagem"
        placeholderTextColor="#B99AA5"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={estilos.label}>Espécie</Text>
      <TextInput
        style={estilos.input}
        placeholder="Vampiro, Bruxa, Lobisomem..."
        placeholderTextColor="#B99AA5"
        value={especie}
        onChangeText={setEspecie}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={atualizar}
        disabled={salvando}
      >
        <Text style={estilos.textoBotao}>
          {salvando ? 'SALVANDO...' : 'SALVAR ALTERAÇÕES'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={estilos.voltar}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16080D',
    justifyContent: 'center',
    padding: 25
  },
  titulo: {
    color: '#E6C5C5',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35
  },
  label: {
    color: '#E6C5C5',
    fontSize: 16,
    marginBottom: 8
  },
  input: {
    backgroundColor: '#2C151F',
    color: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  botao: {
    backgroundColor: '#8B1E3F',
    padding: 17,
    alignItems: 'center',
    borderRadius: 10
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  voltar: {
    color: '#E9A6B8',
    textAlign: 'center',
    marginTop: 25
  }
});
