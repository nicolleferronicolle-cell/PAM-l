
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default function App() {
  const [tela, setTela] = useState(1);

  // Guarda qual tela tinha o erro
  const [telaAnterior, setTelaAnterior] = useState(1);

  // Mensagem que será mostrada na tela de erro
  const [mensagemErro, setMensagemErro] = useState("");

  // =========================
  // TELA 1
  // =========================

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // =========================
  // TELA 2
  // =========================

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [especie, setEspecie] = useState("");
  const [descricao, setDescricao] = useState("");

  // =========================
  // MOSTRAR TELA DE ERRO
  // =========================

  function mostrarErro(mensagem, telaOrigem) {
    setMensagemErro(mensagem);
    setTelaAnterior(telaOrigem);
    setTela(5);
  }

  // =========================
  // TELA 1 → TELA 2
  // =========================

  function continuar() {
    // Verificar campos vazios
    if (
      !usuario.trim() ||
      !email.trim() ||
      !senha ||
      !confirmarSenha
    ) {
      mostrarErro(
        "Preencha todos os campos obrigatórios antes de continuar.",
        1
      );
      return;
    }

    // Verificar e-mail
    const emailValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
      mostrarErro(
        "O e-mail informado é inválido.\n\nDigite um e-mail válido, como:\nnome@email.com",
        1
      );
      return;
    }

    // Verificar senha
    if (senha.length < 6) {
      mostrarErro(
        "A senha é muito curta.\n\nEla precisa ter pelo menos 6 caracteres.",
        1
      );
      return;
    }

    // Verificar confirmação da senha
    if (senha !== confirmarSenha) {
      mostrarErro(
        "As senhas não são iguais.\n\nDigite a mesma senha nos dois campos.",
        1
      );
      return;
    }

    // Tudo certo
    setTela(2);
  }

  // =========================
  // TELA 2 → TELA 3
  // =========================

  function finalizar() {
    // Verificar campos obrigatórios
    if (
      !nome.trim() ||
      !sobrenome.trim() ||
      !idade.trim() ||
      !cidade.trim() ||
      !especie.trim()
    ) {
      mostrarErro(
        "Preencha todos os campos obrigatórios do seu personagem.",
        2
      );
      return;
    }

    // Verificar idade
    const idadeNumero = Number(idade);

    if (
      !Number.isInteger(idadeNumero) ||
      idadeNumero <= 0 ||
      idadeNumero > 120
    ) {
      mostrarErro(
        "A idade informada é inválida.\n\nDigite uma idade usando apenas números.",
        2
      );
      return;
    }

    // Verificar nome
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
      mostrarErro(
        "O nome informado é inválido.\n\nO nome deve conter apenas letras.",
        2
      );
      return;
    }

    // Verificar sobrenome
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(sobrenome)) {
      mostrarErro(
        "O sobrenome informado é inválido.\n\nO sobrenome deve conter apenas letras.",
        2
      );
      return;
    }

    // Tudo certo
    setTela(3);
  }

  // =========================
  // LIMPAR TUDO
  // =========================

  function voltarELimpar() {
    setUsuario("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");

    setNome("");
    setSobrenome("");
    setIdade("");
    setCidade("");
    setEspecie("");
    setDescricao("");

    setMensagemErro("");
    setTelaAnterior(1);
    setTela(1);
  }

  // =========================
  // TELA 1
  // =========================

  if (tela === 1) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>

          <Text style={styles.title}>
            DIÁRIO DE UM VAMPIRO
          </Text>

          <Text style={styles.subtitle}>
            Bem-vindo(a) a Mystic Falls
          </Text>

          <View style={styles.card}>

            <Text style={styles.cardTitle}>
              CRIAR CONTA
            </Text>

            <Text style={styles.label}>
              Nome de usuário
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu usuário"
              placeholderTextColor="#888"
              value={usuario}
              onChangeText={setUsuario}
              autoCapitalize="none"
            />

            <Text style={styles.label}>
              E-mail
            </Text>

            <TextInput
              style={styles.input}
              placeholder="exemplo@email.com"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>
              Senha
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Mínimo de 6 caracteres"
              placeholderTextColor="#888"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />

            <Text style={styles.label}>
              Confirmar senha
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite a senha novamente"
              placeholderTextColor="#888"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.button}
              onPress={continuar}
            >
              <Text style={styles.buttonText}>
                CONTINUAR
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
    );
  }

  // =========================
  // TELA 2
  // =========================

  if (tela === 2) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>

          <Text style={styles.title}>
            SEU PERSONAGEM
          </Text>

          <Text style={styles.subtitle}>
            Conte-nos sobre você
          </Text>

          <View style={styles.card}>

            <Text style={styles.cardTitle}>
              PERFIL DE MYSTIC FALLS
            </Text>

            <Text style={styles.label}>
              Nome
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="#888"
              value={nome}
              onChangeText={setNome}
            />

            <Text style={styles.label}>
              Sobrenome
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu sobrenome"
              placeholderTextColor="#888"
              value={sobrenome}
              onChangeText={setSobrenome}
            />

            <Text style={styles.label}>
              Idade
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite somente números"
              placeholderTextColor="#888"
              value={idade}
              onChangeText={(texto) => {
                const somenteNumeros =
                  texto.replace(/[^0-9]/g, "");

                setIdade(somenteNumeros);
              }}
              keyboardType="numeric"
              maxLength={3}
            />

            <Text style={styles.label}>
              Cidade
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ex: Mystic Falls"
              placeholderTextColor="#888"
              value={cidade}
              onChangeText={setCidade}
            />

            <Text style={styles.label}>
              Espécie
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Humano, Vampiro, Bruxa..."
              placeholderTextColor="#888"
              value={especie}
              onChangeText={setEspecie}
            />

            <Text style={styles.label}>
              Sobre seu personagem
            </Text>

            <TextInput
              style={[
                styles.input,
                styles.textArea,
              ]}
              placeholder="Conte um pouco sobre seu personagem..."
              placeholderTextColor="#888"
              value={descricao}
              onChangeText={setDescricao}
              multiline
            />

            <TouchableOpacity
              style={styles.button}
              onPress={finalizar}
            >
              <Text style={styles.buttonText}>
                ENTRAR EM MYSTIC FALLS
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.backButton}
              onPress={voltarELimpar}
            >
              <Text style={styles.backText}>
                ← VOLTAR E APAGAR
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
    );
  }

  // =========================
  // TELA 3
  // =========================

  if (tela === 3) {
    return (
      <View style={styles.welcomeContainer}>

        <Text style={styles.blood}>
          🩸
        </Text>

        <Text style={styles.welcomeTitle}>
          BEM-VINDO(A)
        </Text>

        <Text style={styles.name}>
          {nome} {sobrenome}
        </Text>

        <Text style={styles.welcomeText}>
          a
        </Text>

        <Text style={styles.mysticFalls}>
          MYSTIC FALLS
        </Text>

        <Text style={styles.description}>
          Uma nova história começa agora...
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setTela(4)}
        >
          <Text style={styles.buttonText}>
            CONHECER OS PERSONAGENS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={voltarELimpar}
        >
          <Text style={styles.backText}>
            COMEÇAR NOVAMENTE
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  // =========================
  // TELA 4
  // =========================

  if (tela === 4) {
    return (
      <View style={styles.container}>

        <ScrollView
          contentContainerStyle={styles.charactersContainer}
        >

          <Text style={styles.title}>
            MYSTIC FALLS
          </Text>

          <Text style={styles.subtitle}>
            OS MORADORES DA CIDADE
          </Text>

          <Text style={styles.intro}>
            Conheça alguns dos personagens
            que fazem parte dessa história.
          </Text>

          {/* STEFAN */}

          <View style={styles.characterCard}>

            <Image
              source={{
                uri: "https://i.pinimg.com/736x/e3/2e/4b/e32e4b4d5b8b0bb4f86e4577120ec0f7.jpg",
              }}
              style={styles.characterImage}
            />

            <Text style={styles.characterName}>
              STEFAN SALVATORE
            </Text>

            <Text style={styles.characterType}>
              Vampiro
            </Text>

            <Text style={styles.characterDescription}>
              Um dos irmãos Salvatore e um dos
              principais personagens da história.
            </Text>

          </View>

          {/* DAMON */}

          <View style={styles.characterCard}>

            <Image
              source={{
                uri: "https://i.pinimg.com/736x/7b/e4/60/7be460f1df1f1d1189ae0b646f054506.jpg",
              }}
              style={styles.characterImage}
            />

            <Text style={styles.characterName}>
              DAMON SALVATORE
            </Text>

            <Text style={styles.characterType}>
              Vampiro
            </Text>

            <Text style={styles.characterDescription}>
              Irmão mais velho de Stefan, conhecido
              por sua personalidade marcante.
            </Text>

          </View>

          {/* CAROLINE */}

          <View style={styles.characterCard}>

            <Image
              source={{
                uri: "https://i.pinimg.com/736x/88/33/64/883364d38f2a3649d8a3d255b8e24bd2.jpg",
              }}
              style={styles.characterImage}
            />

            <Text style={styles.characterName}>
              CAROLINE FORBES
            </Text>

            <Text style={styles.characterType}>
              Vampira
            </Text>

            <Text style={styles.characterDescription}>
              Uma das melhores amigas de Elena
              e uma personagem importante da cidade.
            </Text>

          </View>

          {/* BONNIE */}

          <View style={styles.characterCard}>

            <Image
              source={{
                uri: "https://i.pinimg.com/736x/3f/ed/f2/3fedf2d035845d1f9249ae6acd567974.jpg",
              }}
              style={styles.characterImage}
            />

            <Text style={styles.characterName}>
              BONNIE BENNETT
            </Text>

            <Text style={styles.characterType}>
              Bruxa
            </Text>

            <Text style={styles.characterDescription}>
              Uma poderosa bruxa da família Bennett
              e amiga de Elena e Caroline.
            </Text>

          </View>

          {/* ELENA */}

          <View style={styles.characterCard}>

            <Image
              source={{
                uri: "https://i.pinimg.com/736x/10/45/06/104506c8b2efa3d3e797a86c77ce686e.jpg",
              }}
              style={styles.characterImage}
            />

            <Text style={styles.characterName}>
              ELENA GILBERT
            </Text>

            <Text style={styles.characterType}>
              Humana • Vampira
            </Text>

            <Text style={styles.characterDescription}>
              Uma das personagens centrais da série
              e moradora de Mystic Falls.
            </Text>

          </View>

          {/* KLAUS */}

          <View style={styles.characterCard}>

            <Image
              source={{
                uri: "https://i.pinimg.com/736x/d8/6a/3f/d86a3f97b4fe76b6f03af4dad4eedb66.jpg",
              }}
              style={styles.characterImage}
            />

            <Text style={styles.characterName}>
              KLAUS MIKAELSON
            </Text>

            <Text style={styles.characterType}>
              Vampiro Original
            </Text>

            <Text style={styles.characterDescription}>
              Um dos Vampiros Originais e uma figura
              importante no universo da série.
            </Text>

          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={voltarELimpar}
          >
            <Text style={styles.buttonText}>
              VOLTAR AO INÍCIO
            </Text>
          </TouchableOpacity>

        </ScrollView>

      </View>
    );
  }

  // =========================
  // TELA 5 — ERRO
  // =========================

  if (tela === 5) {
    return (
      <View style={styles.errorContainer}>

        <Text style={styles.errorSymbol}>
          ⚠️
        </Text>

        <Text style={styles.errorTitle}>
          ALGO DEU ERRADO
        </Text>

        <View style={styles.errorCard}>

          <Text style={styles.errorLabel}>
            ERRO
          </Text>

          <Text style={styles.errorMessage}>
            {mensagemErro}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.errorButton}
          onPress={() => setTela(telaAnterior)}
        >
          <Text style={styles.buttonText}>
            VOLTAR
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  return null;
}

// =========================
// ESTILOS
// =========================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#050505",
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    paddingTop: 60,
    paddingBottom: 40,
  },

  title: {
    color: "#b30000",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 8,
  },

  subtitle: {
    color: "#d4af37",
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 30,
    textAlign: "center",
  },

  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#111111",
    padding: 25,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#700000",
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  label: {
    color: "#d4af37",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 7,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "#fff",
    backgroundColor: "#1b1b1b",
    fontSize: 15,
  },

  textArea: {
    height: 100,
    paddingTop: 15,
    textAlignVertical: "top",
  },

  button: {
    minHeight: 52,
    backgroundColor: "#8b0000",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
    paddingHorizontal: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
  },

  backButton: {
    marginTop: 18,
    alignItems: "center",
  },

  backText: {
    color: "#aaa",
    fontSize: 14,
  },

  // =========================
  // TELA 3
  // =========================

  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#050505",
  },

  blood: {
    fontSize: 45,
    marginBottom: 20,
  },

  welcomeTitle: {
    color: "#b30000",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 3,
    textAlign: "center",
  },

  name: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
  },

  welcomeText: {
    color: "#d4af37",
    fontSize: 20,
    fontStyle: "italic",
    marginTop: 12,
  },

  mysticFalls: {
    color: "#d4af37",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 4,
    marginTop: 8,
    textAlign: "center",
  },

  description: {
    color: "#888",
    fontSize: 15,
    fontStyle: "italic",
    marginTop: 20,
    textAlign: "center",
  },

  // =========================
  // TELA 4
  // =========================

  charactersContainer: {
    alignItems: "center",
    padding: 25,
    paddingTop: 55,
    paddingBottom: 50,
  },

  intro: {
    color: "#aaa",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 25,
    maxWidth: 380,
  },

  characterCard: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#111111",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#700000",
    marginBottom: 25,
    overflow: "hidden",
    paddingBottom: 20,
  },

  characterImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },

  characterName: {
    color: "#d4af37",
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },

  characterType: {
    color: "#b30000",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },

  characterDescription: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 21,
    paddingHorizontal: 20,
    marginTop: 10,
  },

  // =========================
  // TELA 5 — ERRO
  // =========================

  errorContainer: {
    flex: 1,
    backgroundColor: "#050505",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  errorSymbol: {
    fontSize: 65,
    marginBottom: 20,
  },

  errorTitle: {
    color: "#b30000",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 25,
  },

  errorCard: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#111111",
    borderWidth: 1,
    borderColor: "#8b0000",
    borderRadius: 12,
    padding: 25,
    alignItems: "center",
  },

  errorLabel: {
    color: "#d4af37",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 15,
  },

  errorMessage: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
  },

  errorButton: {
    minHeight: 52,
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#8b0000",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    paddingHorizontal: 20,
  },

});


