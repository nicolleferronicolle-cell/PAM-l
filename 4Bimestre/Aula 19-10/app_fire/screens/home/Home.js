import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, StyleSheet, Alert
} from 'react-native';

import {
  collection, addDoc, onSnapshot, query, where
} from 'firebase/firestore';

import { auth, db } from '../../firebase/firebase';

export default function Home({ navigation }) {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const usuario = auth.currentUser;

    if (!usuario) {
      navigation.replace('Login');
      return;
    }

    const consulta = query(
      collection(db, 'personagens'),
      where('usuarioId', '==', usuario.uid)
    );

    return onSnapshot(consulta, (resultado) => {
      setPersonagens(resultado.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })));
    }, (erro) => Alert.alert('Erro', erro.message));
  }, []);

  async function salvar() {
    if (!nome.trim() || !especie.trim()) {
      Alert.alert('Atenção', 'Preencha os campos!');
      return;
    }

    if (!auth.currentUser) {
      Alert.alert('Erro', 'Faça login novamente.');
      return;
    }

    try {
      await addDoc(collection(db, 'personagens'), {
        nome: nome.trim(),
        especie: especie.trim(),
        usuarioId: auth.currentUser.uid
      });

      setNome('');
      setEspecie('');
      Alert.alert('Sucesso', 'Personagem salvo!');
    } catch (erro) {
      Alert.alert('Erro', erro.message);
    }
  }

  return (
    <View style={estilos.container}>
      <FlatList
        data={personagens}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Text style={estilos.titulo}>🩸 MYSTIC FALLS</Text>
            <Text style={estilos.subtitulo}>Meu diário sobrenatural</Text>

            <TouchableOpacity
              style={estilos.botao}
              onPress={() => navigation.navigate('Perfil')}
            >
              <Text style={estilos.textoBotao}>MEU PERFIL</Text>
            </TouchableOpacity>

            <Text style={estilos.label}>Cadastrar personagem</Text>

            <TextInput
              style={estilos.input}
              placeholder="Nome: Damon Salvatore"
              placeholderTextColor="#B99AA5"
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              style={estilos.input}
              placeholder="Espécie: Vampiro"
              placeholderTextColor="#B99AA5"
              value={especie}
              onChangeText={setEspecie}
            />

            <TouchableOpacity style={estilos.botao} onPress={salvar}>
              <Text style={estilos.textoBotao}>SALVAR PERSONAGEM</Text>
            </TouchableOpacity>

            <Text style={estilos.label}>📖 Personagens cadastrados</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nome}>{item.nome}</Text>
            <Text style={estilos.subtitulo}>{item.especie}</Text>

            <TouchableOpacity
              style={estilos.botao}
              onPress={() => navigation.navigate('Editar', {
                personagem: item
              })}
            >
              <Text style={estilos.textoBotao}>EDITAR</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={estilos.subtitulo}>
            Nenhum personagem cadastrado.
          </Text>
        }
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#16080D', padding: 25
  },
  titulo: {
    fontSize: 28, color: '#E6C5C5',
    textAlign: 'center', fontWeight: 'bold', marginTop: 30
  },
  subtitulo: {
    color: '#C78C9B', textAlign: 'center', marginBottom: 20
  },
  label: {
    color: '#E6C5C5', fontSize: 20,
    marginVertical: 20, fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#2C151F', color: '#FFF',
    padding: 15, borderRadius: 10, marginBottom: 15
  },
  botao: {
    backgroundColor: '#8B1E3F', padding: 15,
    alignItems: 'center', borderRadius: 10, marginBottom: 15
  },
  textoBotao: { color: '#FFF', fontWeight: 'bold' },
  card: {
    backgroundColor: '#2C151F', padding: 18,
    borderRadius: 10, marginBottom: 15
  },
  nome: {
    color: '#FFF', fontSize: 21,
    fontWeight: 'bold', textAlign: 'center'
  }
});