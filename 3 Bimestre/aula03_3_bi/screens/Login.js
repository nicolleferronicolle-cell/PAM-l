import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {

    if (email.trim() === '' || senha.trim() === '') {

      Alert.alert(
        'Atenção',
        'Digite o e-mail e a senha.'
      );

      return;
    }

    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.lua}>
        ☾
      </Text>

      <Text style={styles.titulo}>
        DIÁRIO DE UM
      </Text>

      <Text style={styles.vampiro}>
        VAMPIRO
      </Text>

      <Text style={styles.subtitulo}>
        Entre no seu diário secreto
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          E-MAIL
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>
          SENHA
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#777"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={entrar}
        >
          <Text style={styles.textoBotao}>
            ENTRAR
          </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.frase}>
        "A noite revela aquilo que o dia esconde."
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  lua: {
    color: '#d4af37',
    fontSize: 70,
    marginBottom: 5,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 4,
  },

  vampiro: {
    color: '#a30022',
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 5,
  },

  subtitulo: {
    color: '#999999',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 30,
  },

  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#4d1220',
    borderRadius: 15,
    padding: 25,
  },

  label: {
    color: '#d4af37',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#242424',
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 8,
    padding: 14,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#8b001c',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  frase: {
    color: '#666666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 30,
  },

});