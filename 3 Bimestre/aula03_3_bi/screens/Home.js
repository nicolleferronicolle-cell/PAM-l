import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function Home({ navigation }) {

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >

      <Text style={styles.lua}>
        ☾
      </Text>

      <Text style={styles.titulo}>
        BEM-VINDO
      </Text>

      <Text style={styles.vampiro}>
        AO MEU DIÁRIO
      </Text>

      <View style={styles.linha} />

      <Text style={styles.descricao}>
        Esta é uma coleção de pensamentos,
        acontecimentos e segredos escritos
        durante as noites mais misteriosas.
      </Text>

      <View style={styles.card}>

        <Text style={styles.icone}>
          📖
        </Text>

        <Text style={styles.cardTitulo}>
          DIÁRIO SECRETO
        </Text>

        <Text style={styles.cardTexto}>
          Aqui estão registradas histórias que
          jamais deveriam ser esquecidas.
        </Text>

      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Diario')}
      >
        <Text style={styles.textoBotao}>
          ABRIR O DIÁRIO
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.textoSecundario}>
          SAIR
        </Text>
      </TouchableOpacity>

      <Text style={styles.frase}>
        "Toda noite possui uma história."
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
  },

  conteudo: {
    alignItems: 'center',
    padding: 25,
    paddingBottom: 50,
  },

  lua: {
    color: '#d4af37',
    fontSize: 65,
    marginTop: 20,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 29,
    fontWeight: 'bold',
    letterSpacing: 4,
    marginTop: 10,
  },

  vampiro: {
    color: '#a30022',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 3,
  },

  linha: {
    width: 100,
    height: 2,
    backgroundColor: '#d4af37',
    marginVertical: 20,
  },

  descricao: {
    color: '#aaaaaa',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    marginBottom: 25,
  },

  card: {
    width: '100%',
    maxWidth: 450,
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#4d1220',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    marginBottom: 25,
  },

  icone: {
    fontSize: 50,
    marginBottom: 15,
  },

  cardTitulo: {
    color: '#d4af37',
    fontSize: 21,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginBottom: 15,
  },

  cardTexto: {
    color: '#cccccc',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
  },

  botao: {
    width: '100%',
    maxWidth: 450,
    backgroundColor: '#8b001c',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },

  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 2,
  },

  botaoSecundario: {
    width: '100%',
    maxWidth: 450,
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },

  textoSecundario: {
    color: '#aaaaaa',
    fontWeight: 'bold',
  },

  frase: {
    color: '#555555',
    fontStyle: 'italic',
    marginTop: 30,
  },

});