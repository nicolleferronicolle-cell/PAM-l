import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../styles/styles";

function PerfilScreen({ navigation, route }) {
  const usuario = route.params?.usuario || "";
  const email = route.params?.email || "";

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [especie, setEspecie] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erro, setErro] = useState("");

  function salvarPerfil() {
    setErro("");

    if (!nome.trim()) {
      setErro("Digite seu nome.");
      return;
    }

    if (!sobrenome.trim()) {
      setErro("Digite seu sobrenome.");
      return;
    }

    if (!idade.trim()) {
      setErro("Digite sua idade.");
      return;
    }

    if (!cidade.trim()) {
      setErro("Digite sua cidade.");
      return;
    }

    if (!especie.trim()) {
      setErro("Digite sua espécie.");
      return;
    }

    const idadeNumero = Number(idade);

    if (
      !Number.isInteger(idadeNumero) ||
      idadeNumero <= 0 ||
      idadeNumero > 120
    ) {
      setErro("Digite uma idade válida.");
      return;
    }

    navigation.navigate("Inicio", {
      usuario,
      email,
      nome: nome.trim(),
      sobrenome: sobrenome.trim(),
      idade,
      cidade: cidade.trim(),
      especie: especie.trim(),
      descricao: descricao.trim(),
    });
  }

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.profileContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.simpleHeader}>
        <Text style={styles.simpleHeaderTitle}>
          THE VAMPIRE DIARIES WIKI
        </Text>
      </View>

      <View style={styles.wikiBox}>
        <View style={styles.boxHeader}>
          <Text style={styles.boxHeaderText}>
            CRIAR PERFIL
          </Text>
        </View>

        <View style={styles.boxContent}>
          <Text style={styles.profileWelcome}>
            Usuário: {usuario}
          </Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#777"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Sobrenome</Text>
          <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            placeholderTextColor="#777"
            value={sobrenome}
            onChangeText={setSobrenome}
          />

          <Text style={styles.label}>Idade</Text>
          <TextInput
            style={styles.input}
            placeholder="Idade"
            placeholderTextColor="#777"
            value={idade}
            onChangeText={(texto) =>
              setIdade(texto.replace(/[^0-9]/g, ""))
            }
            keyboardType="numeric"
          />

          <Text style={styles.label}>Cidade</Text>
          <TextInput
            style={styles.input}
            placeholder="Cidade"
            placeholderTextColor="#777"
            value={cidade}
            onChangeText={setCidade}
          />

          <Text style={styles.label}>Espécie</Text>
          <TextInput
            style={styles.input}
            placeholder="Humano, vampiro, bruxa..."
            placeholderTextColor="#777"
            value={especie}
            onChangeText={setEspecie}
          />

          <Text style={styles.label}>Sobre você</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Conte um pouco sobre você..."
            placeholderTextColor="#777"
            value={descricao}
            onChangeText={setDescricao}
            multiline
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
            onPress={salvarPerfil}
          >
            <Text style={styles.redButtonText}>
              SALVAR PERFIL
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default PerfilScreen;