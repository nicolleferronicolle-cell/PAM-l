
import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
  StyleSheet, Alert
} from 'react-native';

import { signOut } from 'firebase/auth';
import {
  doc, onSnapshot, collection, query, where
} from 'firebase/firestore';

import { auth, db } from '../../firebase/firebase';

export default function Perfil({ navigation }) {
  const [usuario, setUsuario] = useState(null);
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const atual = auth.currentUser;

    if (!atual) {
      navigation.replace('Login');
      return;
    }

    const pararUsuario = onSnapshot(
      doc(db, 'usuarios', atual.uid),
      (resultado) => {
        setUsuario(resultado.exists() ? resultado.data() : null);
      },
      (erro) => Alert.alert('Erro', erro.message)
    );

    const consulta = query(
      collection(db, 'personagens'),
      where('usuarioId', '==', atual.uid)
    );

    const pararPersonagens = onSnapshot(
      consulta,
      (resultado) => {
        setPersonagens(resultado.docs.map((documento) => ({
          id: documento.id,
          ...documento.data()
        })));
      },
      (erro) => Alert.alert('Erro', erro.message)
    );

    return () => {
      pararUsuario();
      pararPersonagens();
    };
  }, [navigation]);

  async function sair() {
    try {
      await signOut(auth);
      navigation.replace('Login');
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
            <Text style={estilos.titulo}>🩸 MEU PERFIL</Text>

            <View style={estilos.card}>
              <Text style={estilos.nome}>
                {usuario?.nome || 'Morador de Mystic Falls'}
              </Text>
              <Text style={estilos.descricao}>
                {usuario?.email || auth.currentUser?.email}
              </Text>
            </View>

            <Text style={estilos.subtitulo}>
              Meus personagens
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nome}>{item.nome}</Text>
            <Text style={estilos.descricao}>
              Espécie: {item.especie}
            </Text>

            <TouchableOpacity
              style={estilos.botao}
              onPress={() =>
                navigation.navigate('Editar', {
                  personagem: item
                })
              }
            >
              <Text style={estilos.textoBotao}>
                EDITAR PERSONAGEM
              </Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={estilos.descricao}>
            Você ainda não cadastrou personagens.
          </Text>
        }
        ListFooterComponent={
          <View>
            <TouchableOpacity
              style={estilos.botao}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={estilos.textoBotao}>
                VOLTAR PARA HOME
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={estilos.botaoSair}
              onPress={sair}
            >
              <Text style={estilos.textoBotao}>
                SAIR DA CONTA
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16080D',
    padding: 25
  },
  titulo: {
    color: '#E6C5C5',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 25
  },
  subtitulo: {
    color: '#E6C5C5',
    fontSize: 21,
    fontWeight: 'bold',
    marginVertical: 20
  },
  card: {
    backgroundColor: '#2C151F',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15
  },
  nome: {
    color: '#FFF',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  descricao: {
    color: '#C78C9B',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15
  },
  botao: {
    backgroundColor: '#8B1E3F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12
  },
  botaoSair: {
    backgroundColor: '#54232E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 30
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});
