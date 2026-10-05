
import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Keyboard,
} from "react-native";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

/* =========================================================
   CORES
========================================================= */

const COLORS = {
  background: "#1b1c1e",
  dark: "#111214",
  header: "#27282b",
  panel: "#303236",
  panelDark: "#242528",

  red: "#8b151b",
  redDark: "#5d0d12",
  redLight: "#b52a31",

  gold: "#c9a84c",
  goldLight: "#e1c86c",

  white: "#f2f2f2",
  gray: "#b8b8b8",
  grayDark: "#777777",

  border: "#4a4b4f",
};

/* =========================================================
   IMAGEM PADRÃO
========================================================= */

const IMAGEM_PADRAO =
  "https://placehold.co/400x600/242528/c9a84c?text=Sem+Imagem";

/* =========================================================
   PERSONAGENS
=========================================================

   PARA TROCAR UMA FOTO:

   imagem: "https://link-da-sua-imagem.jpg"

   Basta trocar o endereço dentro das aspas.

========================================================= */

const personagens = [
  {
    id: "1",
    nome: "Elena Gilbert",
    especie: "Humana / Doppelgänger",
    busca: "elena gilbert elena",
    descricao:
      "Elena Gilbert é uma das personagens centrais de The Vampire Diaries e está no centro dos acontecimentos sobrenaturais de Mystic Falls.",

    imagem:
      "https://i.pinimg.com/736x/10/45/06/104506c8b2efa3d3e797a86c77ce686e.jpg",
  },

  {
    id: "2",
    nome: "Stefan Salvatore",
    especie: "Vampiro",
    busca: "stefan salvatore stefan",
    descricao:
      "Stefan Salvatore é irmão de Damon Salvatore e uma das figuras centrais da história. Seu diário está relacionado ao título da série.",

    imagem:
      "https://i.pinimg.com/736x/e3/2e/4b/e32e4b4d5b8b0bb4f86e4577120ec0f7.jpg",
  },

  {
    id: "3",
    nome: "Damon Salvatore",
    especie: "Vampiro",
    busca: "damon salvatore damon",
    descricao:
      "Damon Salvatore é irmão de Stefan e possui uma relação importante com os acontecimentos de Mystic Falls.",

    imagem:
      "https://i.pinimg.com/736x/7b/e4/60/7be460f1df1f1d1189ae0b646f054506.jpg",
  },

  {
    id: "4",
    nome: "Bonnie Bennett",
    especie: "Bruxa",
    busca: "bonnie bennett bonnie bruxa",
    descricao:
      "Bonnie Bennett pertence à família Bennett e é uma das personagens sobrenaturais importantes da história.",

    imagem:
      "https://i.pinimg.com/736x/3f/ed/f2/3fedf2d035845d1f9249ae6acd567974.jpg",
  },

  {
    id: "5",
    nome: "Caroline Forbes",
    especie: "Vampira",
    busca: "caroline forbes caroline vampira",
    descricao:
      "Caroline Forbes é uma personagem de Mystic Falls e amiga de Elena e de outros integrantes do grupo.",

    imagem:
      "https://i.pinimg.com/736x/99/67/b9/9967b905bd7a4dfb8812f379a4a79bcc.jpg",
  },

  {
    id: "6",
    nome: "Matt Donovan",
    especie: "Humano",
    busca: "matt donovan matt humano",
    descricao:
      "Matt Donovan é um dos moradores humanos de Mystic Falls e está ligado a diversos acontecimentos da cidade.",

    imagem:
      "https://i.pinimg.com/736x/e8/0e/07/e80e0721ab62cea5b420c6323631b954.jpg",
  },

  {
    id: "7",
    nome: "Jeremy Gilbert",
    especie: "Humano",
    busca: "jeremy gilbert jeremy",
    descricao:
      "Jeremy Gilbert é irmão de Elena e está envolvido com acontecimentos sobrenaturais de Mystic Falls.",

    imagem:
      "https://i.pinimg.com/736x/38/6f/0a/386f0ab9471047c8375b361ca11f29fe.jpg",
  },

  {
    id: "8",
    nome: "Alaric Saltzman",
    especie: "Humano",
    busca: "alaric saltzman alaric",
    descricao:
      "Alaric Saltzman é professor, caçador e uma das figuras ligadas à proteção de Mystic Falls.",

    imagem:
      "https://i.pinimg.com/736x/28/25/62/2825629f5221bd2106e4f1ad1744302e.jpg",
  },

  {
    id: "9",
    nome: "Niklaus Mikaelson",
    especie: "Híbrido",
    busca: "niklaus mikaelson klaus niklaus",
    descricao:
      "Niklaus Mikaelson é um personagem sobrenatural importante associado aos acontecimentos de Mystic Falls.",

    imagem:
      "https://i.pinimg.com/736x/d8/6a/3f/d86a3f97b4fe76b6f03af4dad4eedb66.jpg",
  },
];

/* =========================================================
   TEMPORADAS
========================================================= */

const temporadas = [
  {
    id: "1",
    nome: "1ª temporada",
    episodios: 22,
    busca: "1 primeira temporada temporada 1",
    imagem:
      "https://i.pinimg.com/1200x/80/55/c4/8055c433c000b76ad68b82b75bf3460f.jpg",
  },

  {
    id: "2",
    nome: "2ª temporada",
    episodios: 22,
    busca: "2 segunda temporada temporada 2",
    imagem:
      "https://i.pinimg.com/736x/10/df/eb/10dfeb0d42fb267224b9e9e65b88230a.jpg",
  },

  {
    id: "3",
    nome: "3ª temporada",
    episodios: 22,
    busca: "3 terceira temporada temporada 3",
    imagem:
      "https://i.pinimg.com/1200x/90/e6/a1/90e6a13a854ea5c3db0190937ba1631c.jpg",
  },

  {
    id: "4",
    nome: "4ª temporada",
    episodios: 23,
    busca: "4 quarta temporada temporada 4",
    imagem:
      "https://i.pinimg.com/1200x/ec/d0/22/ecd0224d49242ce8bf2308cf51a762e8.jpg",
  },

  {
    id: "5",
    nome: "5ª temporada",
    episodios: 22,
    busca: "5 quinta temporada temporada 5",
    imagem:
      "https://i.pinimg.com/1200x/3d/3a/be/3d3abe318af8410b86fd12087aaa9dfe.jpg",
  },

  {
    id: "6",
    nome: "6ª temporada",
    episodios: 22,
    busca: "6 sexta temporada temporada 6",
    imagem:
      "https://i.pinimg.com/1200x/7a/1b/e4/7a1be45c0d87ca02d91ef87fd6d8e21d.jpg",
  },

  {
    id: "7",
    nome: "7ª temporada",
    episodios: 22,
    busca: "7 sétima temporada temporada 7",
    imagem:
      "https://i.pinimg.com/1200x/fd/6d/8f/fd6d8f1d84c4c226dd8c39cac36ba670.jpg",
  },

  {
    id: "8",
    nome: "8ª temporada",
    episodios: 16,
    busca: "8 oitava temporada temporada 8 final",
    imagem:
      "https://i.pinimg.com/736x/aa/fa/b0/aafab0ace4212719778abd0925a747ba.jpg",
  },
];

/* =========================================================
   LOCAIS
========================================================= */

const locais = [
  {
    id: "mystic-falls",
    titulo: "Mystic Falls",
    subtitulo: "Cidade fictícia da Virgínia",
    palavras: "mystic falls cidade virgínia cidade fictícia",
    imagem:
      "https://i.pinimg.com/736x/17/87/25/178725e92918efa9f2596f675ffea0fe.jpg",
  },

  {
    id: "mystic-grill",
    titulo: "Mystic Grill",
    subtitulo: "Local de Mystic Falls",
    palavras: "mystic grill grill restaurante",
    imagem:
      "https://i.pinimg.com/736x/b3/6a/08/b36a0845743dfe5099da51612a7a748e.jpg",
  },

  {
    id: "salvatore",
    titulo: "Pensão Salvatore",
    subtitulo: "Residência dos irmãos Salvatore",
    palavras:
      "pensão salvatore casa salvatore stefan damon",
    imagem:
      "https://i.pinimg.com/1200x/13/f1/99/13f199834b0817b4e48c0a6a4c532b78.jpg",
  },

  {
    id: "school",
    titulo: "Mystic Falls High School",
    subtitulo: "Escola de Mystic Falls",
    palavras:
      "escola mystic falls high school colegio",
    imagem:
      "https://i.pinimg.com/736x/b5/87/f1/b587f1129f806b760610d3e75ec03340.jpg",
  },

  {
    id: "wickery",
    titulo: "Wickery Bridge",
    subtitulo: "Local de Mystic Falls",
    palavras:
      "wickery bridge ponte wickery ponte",
    imagem:
      "https://i.pinimg.com/1200x/88/01/6b/88016b731d11f273fb60cd043ff1f2ef.jpg",
  },
];

/* =========================================================
   PESQUISA
========================================================= */

function pesquisarWiki(texto) {
  const termo = texto.toLowerCase().trim();

  if (!termo) {
    return [];
  }

  const resultados = [];

  personagens.forEach((personagem) => {
    if (
      personagem.nome.toLowerCase().includes(termo) ||
      personagem.busca.includes(termo)
    ) {
      resultados.push({
        id: "personagem-" + personagem.id,
        titulo: personagem.nome,
        subtitulo: personagem.especie,
        tipo: "Personagem",
        tela: "Personagens",
        imagem: personagem.imagem,
      });
    }
  });

  temporadas.forEach((temporada) => {
    if (
      temporada.nome.toLowerCase().includes(termo) ||
      temporada.busca.includes(termo)
    ) {
      resultados.push({
        id: "temporada-" + temporada.id,
        titulo: temporada.nome,
        subtitulo:
          temporada.episodios + " episódios",
        tipo: "Temporada",
        tela: "Temporadas",
        imagem: temporada.imagem,
      });
    }
  });

  locais.forEach((local) => {
    if (
      local.titulo.toLowerCase().includes(termo) ||
      local.palavras.includes(termo)
    ) {
      resultados.push({
        id: local.id,
        titulo: local.titulo,
        subtitulo: local.subtitulo,
        tipo: "Local",
        tela: "MysticFalls",
        imagem: local.imagem,
      });
    }
  });

  if (
    "the vampire diaries".includes(termo) ||
    termo.includes("vampire") ||
    termo.includes("diaries") ||
    termo.includes("série") ||
    termo.includes("serie")
  ) {
    resultados.push({
      id: "serie",
      titulo: "The Vampire Diaries",
      subtitulo: "Série de televisão",
      tipo: "Série",
      tela: "Inicio",
      imagem: IMAGEM_PADRAO,
    });
  }

  return resultados;
}

/* =========================================================
   CABEÇALHO
========================================================= */

function WikiHeader({ navigation }) {
  const [pesquisa, setPesquisa] = useState("");
  const [mostrarResultados, setMostrarResultados] =
    useState(false);

  const resultados = pesquisarWiki(pesquisa);

  function realizarPesquisa() {
    Keyboard.dismiss();

    if (!pesquisa.trim()) {
      setMostrarResultados(false);
      return;
    }

    setMostrarResultados(true);
  }

  function abrirResultado(resultado) {
    setPesquisa("");
    setMostrarResultados(false);

    navigation.navigate(resultado.tela);
  }

  return (
    <View style={styles.headerContainer}>

      <View style={styles.topBar}>
        <Text style={styles.topBarText}>
          THE VAMPIRE DIARIES
        </Text>

        <Text style={styles.topBarWiki}>
          WIKI
        </Text>
      </View>

      <View style={styles.logoArea}>

        <Text style={styles.logoTitle}>
          The Vampire Diaries Wiki
        </Text>

        <Text style={styles.logoSubtitle}>
          THE VAMPIRE DIARIES • THE ORIGINALS • LEGACIES
        </Text>

      </View>

      <View style={styles.searchArea}>

        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar na wiki..."
          placeholderTextColor="#777"
          value={pesquisa}
          onChangeText={(texto) => {
            setPesquisa(texto);
            setMostrarResultados(true);
          }}
          onSubmitEditing={realizarPesquisa}
          returnKeyType="search"
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={realizarPesquisa}
        >

          <Text style={styles.searchIcon}>
            🔎
          </Text>

        </TouchableOpacity>

      </View>

      {mostrarResultados &&
        pesquisa.trim() !== "" && (

        <View style={styles.searchResults}>

          {resultados.length > 0 ? (

            <>

              <Text style={styles.searchResultsTitle}>
                RESULTADOS DA PESQUISA
              </Text>

              {resultados
                .slice(0, 6)
                .map((resultado) => (

                <TouchableOpacity
                  key={resultado.id}
                  style={styles.searchResult}
                  onPress={() =>
                    abrirResultado(resultado)
                  }
                >

                  {/* FOTO DO RESULTADO */}

                  <Image
                    source={{
                      uri:
                        resultado.imagem ||
                        IMAGEM_PADRAO,
                    }}
                    style={styles.searchResultImage}
                  />

                  <View
                    style={
                      styles.searchResultText
                    }
                  >

                    <Text
                      style={
                        styles.searchResultTitle
                      }
                    >
                      {resultado.titulo}
                    </Text>

                    <Text
                      style={
                        styles.searchResultSubtitle
                      }
                    >
                      {resultado.tipo} •{" "}
                      {resultado.subtitulo}
                    </Text>

                  </View>

                  <Text
                    style={styles.searchArrow}
                  >
                    ›
                  </Text>

                </TouchableOpacity>

              ))}

            </>

          ) : (

            <View style={styles.noResults}>

              <Text
                style={styles.noResultsTitle}
              >
                Nenhum resultado encontrado
              </Text>

              <Text
                style={styles.noResultsText}
              >
                Tente pesquisar por Elena,
                Stefan, Damon, Bonnie,
                Mystic Falls ou uma temporada.
              </Text>

            </View>

          )}

        </View>
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.menu}
      >

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            navigation.navigate("Inicio")
          }
        >
          <Text style={styles.menuText}>
            INÍCIO
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            navigation.navigate("Personagens")
          }
        >
          <Text style={styles.menuText}>
            PERSONAGENS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            navigation.navigate("MysticFalls")
          }
        >
          <Text style={styles.menuText}>
            MYSTIC FALLS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            navigation.navigate("Temporadas")
          }
        >
          <Text style={styles.menuText}>
            TEMPORADAS
          </Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

/* =========================================================
   LOGIN
========================================================= */

function LoginScreen({ navigation }) {

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] =
    useState("");

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
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      );

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
      contentContainerStyle={
        styles.loginContainer
      }
      keyboardShouldPersistTaps="handled"
    >

      <Text style={styles.loginLogo}>
        🩸
      </Text>

      <Text style={styles.loginTitle}>
        THE VAMPIRE DIARIES
      </Text>

      <Text style={styles.loginSubtitle}>
        WIKI
      </Text>

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

          <Text style={styles.label}>
            E-mail
          </Text>

          <TextInput
            style={styles.input}
            placeholder="seuemail@email.com"
            placeholderTextColor="#777"
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

              <Text
                style={
                  styles.loginErrorTitle
                }
              >
                ⚠ ERRO
              </Text>

              <Text
                style={
                  styles.loginErrorText
                }
              >
                {erro}
              </Text>

            </View>

          )}

          <TouchableOpacity
            style={styles.redButton}
            onPress={validarLogin}
          >

            <Text
              style={styles.redButtonText}
            >
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

/* =========================================================
   PERFIL
========================================================= */

function PerfilScreen({
  navigation,
  route,
}) {

  const usuario =
    route.params?.usuario || "";

  const email =
    route.params?.email || "";

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] =
    useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [especie, setEspecie] =
    useState("");
  const [descricao, setDescricao] =
    useState("");

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
      contentContainerStyle={
        styles.profileContainer
      }
      keyboardShouldPersistTaps="handled"
    >

      <View style={styles.simpleHeader}>

        <Text
          style={
            styles.simpleHeaderTitle
          }
        >
          THE VAMPIRE DIARIES WIKI
        </Text>

      </View>

      <View style={styles.wikiBox}>

        <View style={styles.boxHeader}>

          <Text
            style={styles.boxHeaderText}
          >
            CRIAR PERFIL
          </Text>

        </View>

        <View style={styles.boxContent}>

          <Text
            style={styles.profileWelcome}
          >
            Usuário: {usuario}
          </Text>

          <Text style={styles.label}>
            Nome
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#777"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>
            Sobrenome
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            placeholderTextColor="#777"
            value={sobrenome}
            onChangeText={setSobrenome}
          />

          <Text style={styles.label}>
            Idade
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Idade"
            placeholderTextColor="#777"
            value={idade}
            onChangeText={(texto) =>
              setIdade(
                texto.replace(
                  /[^0-9]/g,
                  ""
                )
              )
            }
            keyboardType="numeric"
          />

          <Text style={styles.label}>
            Cidade
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Cidade"
            placeholderTextColor="#777"
            value={cidade}
            onChangeText={setCidade}
          />

          <Text style={styles.label}>
            Espécie
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Humano, vampiro, bruxa..."
            placeholderTextColor="#777"
            value={especie}
            onChangeText={setEspecie}
          />

          <Text style={styles.label}>
            Sobre você
          </Text>

          <TextInput
            style={[
              styles.input,
              styles.textArea,
            ]}
            placeholder="Conte um pouco sobre você..."
            placeholderTextColor="#777"
            value={descricao}
            onChangeText={setDescricao}
            multiline
          />

          {erro !== "" && (

            <View style={styles.loginError}>

              <Text
                style={
                  styles.loginErrorTitle
                }
              >
                ⚠ ERRO
              </Text>

              <Text
                style={
                  styles.loginErrorText
                }
              >
                {erro}
              </Text>

            </View>

          )}

          <TouchableOpacity
            style={styles.redButton}
            onPress={salvarPerfil}
          >

            <Text
              style={styles.redButtonText}
            >
              SALVAR PERFIL
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
}

/* =========================================================
   INÍCIO
========================================================= */

function InicioScreen({
  navigation,
  route,
}) {

  const perfil = route.params;

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={
        styles.content
      }
    >

      <WikiHeader
        navigation={navigation}
      />

      <View style={styles.hero}>

        <Text style={styles.heroTitle}>
          THE VAMPIRE DIARIES
        </Text>

        <Text style={styles.heroSubtitle}>
          WIKI
        </Text>

        <Text style={styles.heroText}>
          Explore personagens, temporadas
          e locais de Mystic Falls.
        </Text>

      </View>

      {perfil?.nome && (

        <View style={styles.profileCard}>

          <Text
            style={styles.profileCardTitle}
          >
            BEM-VINDA À WIKI
          </Text>

          <Text
            style={styles.profileCardName}
          >
            {perfil.nome}{" "}
            {perfil.sobrenome}
          </Text>

          <Text
            style={styles.profileCardText}
          >
            {perfil.especie} •{" "}
            {perfil.cidade}
          </Text>

        </View>

      )}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          DESTAQUES
        </Text>

        <View style={styles.featureGrid}>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() =>
              navigation.navigate(
                "Personagens"
              )
            }
          >

            <Text
              style={
                styles.featureIcon
              }
            >
              🧛
            </Text>

            <Text
              style={
                styles.featureTitle
              }
            >
              PERSONAGENS
            </Text>

            <Text
              style={
                styles.featureText
              }
            >
              Conheça os personagens
              da série.
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() =>
              navigation.navigate(
                "Temporadas"
              )
            }
          >

            <Text
              style={
                styles.featureIcon
              }
            >
              📺
            </Text>

            <Text
              style={
                styles.featureTitle
              }
            >
              TEMPORADAS
            </Text>

            <Text
              style={
                styles.featureText
              }
            >
              Veja todas as temporadas
              e episódios.
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() =>
              navigation.navigate(
                "MysticFalls"
              )
            }
          >

            <Text
              style={
                styles.featureIcon
              }
            >
              📍
            </Text>

            <Text
              style={
                styles.featureTitle
              }
            >
              MYSTIC FALLS
            </Text>

            <Text
              style={
                styles.featureText
              }
            >
              Explore os principais
              locais.
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
}

/* =========================================================
   PERSONAGENS
========================================================= */

function PersonagensScreen({
  navigation,
}) {

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={
        styles.content
      }
    >

      <WikiHeader
        navigation={navigation}
      />

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          PERSONAGENS
        </Text>

        <Text style={styles.sectionIntro}>
          Conheça os principais personagens
          de The Vampire Diaries.
        </Text>

        <View style={styles.characterGrid}>

          {personagens.map(
            (personagem) => (

            <View
              key={personagem.id}
              style={styles.characterCard}
            >

              <Image
                source={{
                  uri:
                    personagem.imagem ||
                    IMAGEM_PADRAO,
                }}
                style={
                  styles.characterImage
                }
                resizeMode="cover"
              />

              <View
                style={
                  styles.characterInfo
                }
              >

                <Text
                  style={
                    styles.characterName
                  }
                >
                  {personagem.nome}
                </Text>

                <Text
                  style={
                    styles.characterSpecies
                  }
                >
                  {personagem.especie}
                </Text>

                <Text
                  style={
                    styles.characterDescription
                  }
                >
                  {personagem.descricao}
                </Text>

              </View>

            </View>

          )
          )}

        </View>

      </View>

    </ScrollView>
  );
}

/* =========================================================
   TEMPORADAS
========================================================= */

function TemporadasScreen({
  navigation,
}) {

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={
        styles.content
      }
    >

      <WikiHeader
        navigation={navigation}
      />

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          TEMPORADAS
        </Text>

        <View style={styles.seasonGrid}>

          {temporadas.map(
            (temporada) => (

            <View
              key={temporada.id}
              style={styles.seasonCard}
            >

              <Image
                source={{
                  uri:
                    temporada.imagem ||
                    IMAGEM_PADRAO,
                }}
                style={
                  styles.seasonImage
                }
              />

              <View
                style={
                  styles.seasonInfo
                }
              >

                <Text
                  style={
                    styles.seasonTitle
                  }
                >
                  {temporada.nome}
                </Text>

                <Text
                  style={
                    styles.seasonEpisodes
                  }
                >
                  {temporada.episodios} episódios
                </Text>

              </View>

            </View>

          )
          )}

        </View>

      </View>

    </ScrollView>
  );
}

/* =========================================================
   MYSTIC FALLS
========================================================= */

function MysticFallsScreen({
  navigation,
}) {

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={
        styles.content
      }
    >

      <WikiHeader
        navigation={navigation}
      />

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          MYSTIC FALLS
        </Text>

        <Text style={styles.sectionIntro}>
          Explore alguns dos locais
          importantes da história.
        </Text>

        {locais.map((local) => (

          <View
            key={local.id}
            style={styles.locationCard}
          >

            <Image
              source={{
                uri:
                  local.imagem ||
                  IMAGEM_PADRAO,
              }}
              style={
                styles.locationImage
              }
            />

            <View
              style={
                styles.locationInfo
              }
            >

              <Text
                style={
                  styles.locationTitle
                }
              >
                {local.titulo}
              </Text>

              <Text
                style={
                  styles.locationSubtitle
                }
              >
                {local.subtitulo}
              </Text>

            </View>

          </View>

        ))}

      </View>

    </ScrollView>
  );
}

/* =========================================================
   ESTILOS
========================================================= */

const styles = StyleSheet.create({

  page: {
    flex: 1,
    backgroundColor:
      COLORS.background,
  },

  content: {
    paddingBottom: 40,
  },

  /* HEADER */

  headerContainer: {
    backgroundColor:
      COLORS.header,
    borderBottomWidth: 1,
    borderBottomColor:
      COLORS.border,
  },

  topBar: {
    height: 42,
    backgroundColor:
      COLORS.dark,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:
      "space-between",
    paddingHorizontal: 18,
  },

  topBarText: {
    color: COLORS.gray,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  topBarWiki: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: "bold",
  },

  logoArea: {
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  logoTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
  },

  logoSubtitle: {
    color: COLORS.gold,
    fontSize: 9,
    marginTop: 6,
    letterSpacing: 1,
  },

  searchArea: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingBottom: 12,
  },

  searchInput: {
    flex: 1,
    height: 44,
    backgroundColor:
      COLORS.panelDark,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    borderRadius: 4,
    paddingHorizontal: 12,
    color: COLORS.white,
  },

  searchButton: {
    width: 48,
    height: 44,
    marginLeft: 6,
    backgroundColor:
      COLORS.red,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  searchIcon: {
    fontSize: 19,
  },

  /* RESULTADOS */

  searchResults: {
    backgroundColor:
      COLORS.panel,
    marginHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor:
      COLORS.border,
  },

  searchResultsTitle: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: "bold",
    padding: 10,
  },

  searchResult: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor:
      COLORS.border,
    padding: 8,
  },

  /* AQUI ESTÁ A FOTO DO RESULTADO */

  searchResultImage: {
    width: 52,
    height: 52,
    borderRadius: 4,
    backgroundColor:
      COLORS.dark,
  },

  searchResultText: {
    flex: 1,
    marginLeft: 10,
  },

  searchResultTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
  },

  searchResultSubtitle: {
    color: COLORS.gray,
    fontSize: 11,
    marginTop: 4,
  },

  searchArrow: {
    color: COLORS.gold,
    fontSize: 28,
    paddingHorizontal: 8,
  },

  noResults: {
    padding: 15,
  },

  noResultsTitle: {
    color: COLORS.white,
    fontWeight: "bold",
  },

  noResultsText: {
    color: COLORS.gray,
    marginTop: 6,
    lineHeight: 18,
  },

  /* MENU */

  menu: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },

  menuItem: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  menuText: {
    color: COLORS.gray,
    fontSize: 11,
    fontWeight: "bold",
  },

  /* INÍCIO */

  hero: {
    margin: 15,
    padding: 25,
    backgroundColor:
      COLORS.panel,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    alignItems: "center",
  },

  heroTitle: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },

  heroSubtitle: {
    color: COLORS.gold,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },

  heroText: {
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 15,
    lineHeight: 20,
  },

  section: {
    padding: 15,
  },

  sectionTitle: {
    color: COLORS.gold,
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor:
      COLORS.border,
    paddingBottom: 10,
    marginBottom: 15,
  },

  sectionIntro: {
    color: COLORS.gray,
    marginBottom: 18,
    lineHeight: 20,
  },

  featureGrid: {
    gap: 12,
  },

  featureCard: {
    backgroundColor:
      COLORS.panel,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    padding: 18,
  },

  featureIcon: {
    fontSize: 30,
  },

  featureTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    marginTop: 10,
  },

  featureText: {
    color: COLORS.gray,
    marginTop: 6,
    lineHeight: 18,
  },

  /* PERFIL CARD */

  profileCard: {
    marginHorizontal: 15,
    padding: 18,
    backgroundColor:
      COLORS.panel,
    borderLeftWidth: 4,
    borderLeftColor:
      COLORS.red,
  },

  profileCardTitle: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: "bold",
  },

  profileCardName: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },

  profileCardText: {
    color: COLORS.gray,
    marginTop: 5,
  },

  /* PERSONAGENS */

  characterGrid: {
    gap: 15,
  },

  characterCard: {
    backgroundColor:
      COLORS.panel,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    overflow: "hidden",
  },

  characterImage: {
    width: "100%",
    height: 330,
    backgroundColor:
      COLORS.dark,
  },

  characterInfo: {
    padding: 15,
  },

  characterName: {
    color: COLORS.white,
    fontSize: 19,
    fontWeight: "bold",
  },

  characterSpecies: {
    color: COLORS.gold,
    fontSize: 12,
    marginTop: 5,
  },

  characterDescription: {
    color: COLORS.gray,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
  },

  /* TEMPORADAS */

  seasonGrid: {
    gap: 15,
  },

  seasonCard: {
    backgroundColor:
      COLORS.panel,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    overflow: "hidden",
  },

  seasonImage: {
    width: "100%",
    height: 180,
    backgroundColor:
      COLORS.dark,
  },

  seasonInfo: {
    padding: 15,
  },

  seasonTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  seasonEpisodes: {
    color: COLORS.gold,
    marginTop: 5,
  },

  /* LOCAIS */

  locationCard: {
    backgroundColor:
      COLORS.panel,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    marginBottom: 15,
    overflow: "hidden",
  },

  locationImage: {
    width: "100%",
    height: 210,
    backgroundColor:
      COLORS.dark,
  },

  locationInfo: {
    padding: 15,
  },

  locationTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  locationSubtitle: {
    color: COLORS.gold,
    marginTop: 5,
  },

  /* LOGIN */

  loginContainer: {
    padding: 20,
    justifyContent: "center",
    flexGrow: 1,
  },

  loginLogo: {
    fontSize: 50,
    textAlign: "center",
  },

  loginTitle: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 10,
  },

  loginSubtitle: {
    color: COLORS.gold,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 25,
  },

  wikiBox: {
    backgroundColor:
      COLORS.panel,
    borderWidth: 1,
    borderColor:
      COLORS.border,
  },

  boxHeader: {
    backgroundColor:
      COLORS.dark,
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor:
      COLORS.border,
  },

  boxHeaderText: {
    color: COLORS.gold,
    fontWeight: "bold",
  },

  boxContent: {
    padding: 18,
  },

  label: {
    color: COLORS.gray,
    fontSize: 12,
    marginBottom: 6,
    marginTop: 10,
  },

  input: {
    height: 45,
    backgroundColor:
      COLORS.panelDark,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    borderRadius: 4,
    paddingHorizontal: 12,
    color: COLORS.white,
  },

  textArea: {
    height: 100,
    paddingTop: 12,
    textAlignVertical: "top",
  },

  redButton: {
    backgroundColor:
      COLORS.red,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 18,
    borderRadius: 4,
  },

  redButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },

  loginError: {
    backgroundColor:
      COLORS.redDark,
    padding: 12,
    marginTop: 15,
    borderWidth: 1,
    borderColor:
      COLORS.redLight,
  },

  loginErrorTitle: {
    color: COLORS.gold,
    fontWeight: "bold",
  },

  loginErrorText: {
    color: COLORS.white,
    marginTop: 5,
  },

  footerText: {
    color: COLORS.grayDark,
    textAlign: "center",
    marginTop: 18,
  },

  /* PERFIL */

  profileContainer: {
    paddingBottom: 40,
  },

  simpleHeader: {
    backgroundColor:
      COLORS.dark,
    padding: 18,
  },

  simpleHeaderTitle: {
    color: COLORS.gold,
    fontWeight: "bold",
    textAlign: "center",
  },

  profileWelcome: {
    color: COLORS.white,
    fontSize: 15,
    marginBottom: 10,
  },

});

/* =========================================================
   NAVEGAÇÃO
========================================================= */

function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor:
              COLORS.background,
          },
        }}
      >

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
        />

        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
        />

        <Stack.Screen
          name="Personagens"
          component={PersonagensScreen}
        />

        <Stack.Screen
          name="Temporadas"
          component={TemporadasScreen}
        />

        <Stack.Screen
          name="MysticFalls"
          component={MysticFallsScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
