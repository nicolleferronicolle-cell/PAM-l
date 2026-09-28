import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function Diario({ navigation }) {

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >

      <Text style={styles.simbolo}>
        🩸
      </Text>

      <Text style={styles.titulo}>
        MEU DIÁRIO
      </Text>

      <Text style={styles.data}>
        11 DE AGOSTO
      </Text>

      <View style={styles.linha} />

      <View style={styles.pagina}>

        <Text style={styles.entrada}>
          ENTRADA 01
        </Text>

        <Text style={styles.texto}>
          A noite chegou silenciosamente.
          A lua está brilhando no céu e as ruas
          parecem completamente vazias.
        </Text>

        <Text style={styles.texto}>
          Hoje decidi escrever neste diário tudo
          o que aconteceu. Talvez um dia alguém
          encontre estas páginas e entenda
          a verdade.
        </Text>

        <Text style={styles.texto}>
          Existem coisas que não podem ser
          contadas durante o dia. Alguns segredos
          pertencem somente à noite.
        </Text>

        <Text style={styles.assinatura}>
          — Fim da entrada
        </Text>

      </View>

      <View style={styles.pagina}>

        <Text style={styles.entrada}>
          ENTRADA 02
        </Text>

        <Text style={styles.texto}>
          O relógio marcou meia-noite.
          O silêncio tomou conta da cidade.
        </Text>

        <Text style={styles.texto}>
          Senti que alguma coisa estava diferente.
          Talvez amanhã eu descubra o motivo.
        </Text>

        <Text style={styles.assinatura}>
          — Fim da entrada
        </Text>

      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textoBotao}>
          VOLTAR AO INÍCIO
        </Text>
      </TouchableOpacity>

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

  simbolo: {
    fontSize: 50,
    marginTop: 15,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 4,
    marginTop: 10,
  },

  data: {
    color: '#d4af37',
    fontSize: 14,
    letterSpacing: 3,
    marginTop: 8,
  },

  linha: {
    width: 100,
    height: 2,
    backgroundColor: '#8b001c',
    marginVertical: 20,
  },

  pagina: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#1b1917',
    borderWidth: 1,
    borderColor: '#4d1220',
    borderRadius: 10,
    padding: 25,
    marginBottom: 20,
  },

  entrada: {
    color: '#d4af37',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 20,
  },

  texto: {
    color: '#dddddd',
    fontSize: 16,
    lineHeight: 27,
    marginBottom: 18,
  },

  assinatura: {
    color: '#777777',
    fontStyle: 'italic',
    textAlign: 'right',
  },

  botao: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#8b001c',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 5,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

});