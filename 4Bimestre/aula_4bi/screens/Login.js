import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../styles/styles";

function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  function validarLogin() {
    setErro("");

    if (!usuario.trim()) {
      setErro("Digite seu nome de usuário.");
      return;
    }

    if (!email.trim()) {
      setErro("Digite seu e-mail.");
      return;
    }

    const emailValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
      setErro("Digite um e-mail válido.");
      return;
    }

    if (!senha) {
      setErro("Digite sua senha.");
      return;
    }

    if (senha.length < 6) {
      setErro(
        "A senha precisa ter pelo menos 6 caracteres."
      );
      return;
    }

    if (!confirmarSenha) {
      setErro("Confirme sua senha.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não são iguais.");
      return;
    }

    navigation.navigate("Perfil", {
      usuario: usuario.trim(),
      email: email.trim(),
    });
  }

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.loginContainer}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.loginLogo}>🩸</Text>

      <Text style={styles.loginTitle}>
        THE VAMPIRE DIARIES
      </Text>

      <Text style={styles.loginSubtitle}>WIKI</Text>

      <View style={styles.wikiBox}>
        <View style={styles.boxHeader}>
          <Text style={styles.boxHeaderText}>
            ENTRAR NA WIKI
          </Text>
        </View>

        <View style={styles.boxContent}>
          <Text style={styles.label}>
            Nome de usuário
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Seu usuário"
            placeholderTextColor="#777"
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
          />

          <Text style={styles.label}>E-mail</Text>

          <TextInput
            style={styles.input}
            placeholder="seuemail@email.com"
            placeholderTextColor="#777"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha</Text>

          <TextInput
            style={styles.input}
            placeholder="Mínimo de 6 caracteres"
            placeholderTextColor="#777"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <Text style={styles.label}>
            Confirmar senha
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite novamente"
            placeholderTextColor="#777"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
          />

          {erro !== "" && (
            <View style={styles.loginError}>
              <Text style={styles.loginErrorTitle}>
                ⚠ ERRO
              </Text>

              <Text style={styles.loginErrorText}>
                {erro}
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.redButton}
            onPress={validarLogin}
          >
            <Text style={styles.redButtonText}>
              ENTRAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.footerText}>
        Crie seu perfil para explorar a wiki.
      </Text>
    </ScrollView>
  );
}

export default LoginScreen;