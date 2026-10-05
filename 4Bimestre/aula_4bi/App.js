import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Keyboard,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

/* =====================================================
   CORES
===================================================== */

const COLORS = {
  background: "#191a1c",
  dark: "#101113",
  header: "#292a2d",
  panel: "#303136",
  panelDark: "#242528",

  red: "#8b151b",
  redDark: "#5c0d12",
  redLight: "#b52a31",

  gold: "#c9a84c",
  goldLight: "#e0c66d",

  white: "#f2f2f2",
  gray: "#b8b8b8",
  border: "#48494d",
};

/* =====================================================
   PERSONAGENS
===================================================== */

const personagens = [
  {
    id: "1",
    nome: "Elena Gilbert",
    especie: "Doppelgänger / Vampira",
    descricao:
      "Elena Gilbert é uma das principais personagens da história e vive em Mystic Falls.",
  },

  {
    id: "2",
    nome: "Stefan Salvatore",
    especie: "Vampiro",
    descricao:
      "Stefan Salvatore é um dos irmãos Salvatore e possui uma forte ligação com Mystic Falls.",
  },

  {
    id: "3",
    nome: "Damon Salvatore",
    especie: "Vampiro",
    descricao:
      "Damon Salvatore é irmão de Stefan e uma das figuras centrais da história.",
  },

  {
    id: "4",
    nome: "Bonnie Bennett",
    especie: "Bruxa",
    descricao:
      "Bonnie Bennett pertence à família Bennett e possui habilidades mágicas.",
  },

  {
    id: "5",
    nome: "Caroline Forbes",
    especie: "Vampira",
    descricao:
      "Caroline Forbes é uma das personagens importantes de Mystic Falls.",
  },

  {
    id: "6",
    nome: "Matt Donovan",
    especie: "Humano",
    descricao:
      "Matt Donovan é um dos moradores humanos de Mystic Falls.",
  },

  {
    id: "7",
    nome: "Jeremy Gilbert",
    especie: "Humano",
    descricao:
      "Jeremy Gilbert é irmão de Elena e está envolvido com acontecimentos sobrenaturais.",
  },

  {
    id: "8",
    nome: "Alaric Saltzman",
    especie: "Humano / Caçador",
    descricao:
      "Alaric Saltzman é professor e caçador ligado aos acontecimentos de Mystic Falls.",
  },

  {
    id: "9",
    nome: "Niklaus Mikaelson",
    especie: "Híbrido",
    descricao:
      "Niklaus Mikaelson é um poderoso personagem sobrenatural.",
  },
];

/* =====================================================
   LOCAIS
===================================================== */

const locais = [
  {
    id: "1",
    nome: "Mystic Falls",
    descricao: "A principal cidade onde acontecem muitos eventos da série.",
  },

  {
    id: "2",
    nome: "Mystic Grill",
    descricao: "Um dos locais conhecidos e frequentados pelos personagens.",
  },

  {
    id: "3",
    nome: "Pensão Salvatore",
    descricao: "Residência associada aos irmãos Salvatore.",
  },

  {
    id: "4",
    nome: "Mystic Falls High School",
    descricao: "Escola frequentada por diversos personagens.",
  },

  {
    id: "5",
    nome: "Wickery Bridge",
    descricao: "Uma das localidades conhecidas de Mystic Falls.",
  },
];

/* =====================================================
   TEMPORADAS
===================================================== */

const temporadas = [
  { id: "1", nome: "1ª Temporada", episodios: 22 },
  { id: "2", nome: "2ª Temporada", episodios: 22 },
  { id: "3", nome: "3ª Temporada", episodios: 22 },
  { id: "4", nome: "4ª Temporada", episodios: 23 },
  { id: "5", nome: "5ª Temporada", episodios: 22 },
  { id: "6", nome: "6ª Temporada", episodios: 22 },
  { id: "7", nome: "7ª Temporada", episodios: 22 },
  { id: "8", nome: "8ª Temporada", episodios: 16 },
];

/* =====================================================
   PESQUISA
===================================================== */

function pesquisarTudo(texto) {
  const termo = texto.toLowerCase().trim();

  if (termo === "") {
    return [];
  }

  const resultados = [];

  personagens.forEach((personagem) => {
    const nome = personagem.nome.toLowerCase();
    const especie = personagem.especie.toLowerCase();

    if (
      nome.includes(termo) ||
      especie.includes(termo)
    ) {
      resultados.push({
        id: "p" + personagem.id,
        titulo: personagem.nome,
        subtitulo: personagem.especie,
        tipo: "Personagem",
        tela: "Personagens",
      });
    }
  });

  locais.forEach((local) => {
    const nome = local.nome.toLowerCase();
    const descricao = local.descricao.toLowerCase();

    if (
      nome.includes(termo) ||
      descricao.includes(termo)
    ) {
      resultados.push({
        id: "l" + local.id,
        titulo: local.nome,
        subtitulo: "Local de Mystic Falls",
        tipo: "Local",
        tela: "MysticFalls",
      });
    }
  });

  temporadas.forEach((temporada) => {
    const nome = temporada.nome.toLowerCase();

    if (
      nome.includes(termo) ||
      temporada.id === termo
    ) {
      resultados.push({
        id: "t" + temporada.id,
        titulo: temporada.nome,
        subtitulo: temporada.episodios + " episódios",
        tipo: "Temporada",
        tela: "Temporadas",
      });
    }
  });

  if (
    "the vampire diaries".includes(termo) ||
    "vampire diaries".includes(termo)
  ) {
    resultados.push({
      id: "serie",
      titulo: "The Vampire Diaries",
      subtitulo: "Série",
      tipo: "Série",
      tela: "Inicio",
    });
  }

  return resultados;
}

/* =====================================================
   CABEÇALHO DA WIKI
===================================================== */

function WikiHeader({ navigation }) {
  const [pesquisa, setPesquisa] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const resultados = pesquisarTudo(pesquisa);

  function pesquisar() {
    Keyboard.dismiss();

    if (pesquisa.trim() === "") {
      setMostrar(false);
      return;
    }

    setMostrar(true);
  }

  function abrirResultado(resultado) {
    setMostrar(false);
    setPesquisa("");

    navigation.navigate(resultado.tela);
  }

  return (
    <View style={styles.header}>

      <View style={styles.topBar}>
        <Text style={styles.topBarText}>
          THE VAMPIRE DIARIES
        </Text>

        <Text style={styles.wikiText}>
          WIKI
        </Text>
      </View>

      <View style={styles.logoArea}>
        <Text style={styles.logo}>
          The Vampire Diaries Wiki
        </Text>

        <Text style={styles.logoSub}>
          ENCICLOPÉDIA DO UNIVERSO
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
            setMostrar(true);
          }}
          onSubmitEditing={pesquisar}
          returnKeyType="search"
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={pesquisar}
        >
          <Text style={styles.searchButtonText}>
            🔎
          </Text>
        </TouchableOpacity>

      </View>

      {mostrar && pesquisa.trim() !== "" && (
        <View style={styles.resultsBox}>

          {resultados.length === 0 ? (
            <View style={styles.noResult}>
              <Text style={styles.noResultTitle}>
                Nenhum resultado
              </Text>

              <Text style={styles.noResultText}>
                Tente pesquisar por Elena, Stefan,
                Damon, Bonnie, Mystic Falls ou uma
                temporada.
              </Text>
            </View>
          ) : (
            <>
              <Text style={styles.resultsTitle}>
                RESULTADOS
              </Text>

              {resultados.map((resultado) => (
                <TouchableOpacity
                  key={resultado.id}
                  style={styles.resultItem}
                  onPress={() =>
                    abrirResultado(resultado)
                  }
                >
                  <View style={styles.resultIcon}>
                    <Text>
                      {resultado.tipo === "Personagem"
                        ? "👤"
                        : resultado.tipo === "Local"
                        ? "📍"
                        : resultado.tipo === "Temporada"
                        ? "📺"
                        : "📖"}
                    </Text>
                  </View>

                  <View style={styles.resultText}>
                    <Text style={styles.resultTitle}>
                      {resultado.titulo}
                    </Text>

                    <Text style={styles.resultSubtitle}>
                      {resultado.tipo} •{" "}
                      {resultado.subtitulo}
                    </Text>
                  </View>

                  <Text style={styles.resultArrow}>
                    ›
                  </Text>
                </TouchableOpacity>
              ))}
            </>
          )}

        </View>
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.menu}
      >

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() =>
            navigation.navigate("Inicio")
          }
        >
          <Text style={styles.menuText}>
            INÍCIO
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() =>
            navigation.navigate("Personagens")
          }
        >
          <Text style={styles.menuText}>
            PERSONAGENS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() =>
            navigation.navigate("MysticFalls")
          }
        >
          <Text style={styles.menuText}>
            MYSTIC FALLS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
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

/* =====================================================
   LOGIN
===================================================== */

function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  function entrar() {
    setErro("");

    if (usuario.trim() === "") {
      setErro("Digite seu nome de usuário.");
      return;
    }

    if (email.trim() === "") {
      setErro("Digite seu e-mail.");
      return;
    }

    const emailValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email.trim()
      );

    if (!emailValido) {
      setErro("Digite um e-mail válido.");
      return;
    }

    if (senha === "") {
      setErro("Digite sua senha.");
      return;
    }

    if (senha.length < 6) {
      setErro(
        "A senha deve ter pelo menos 6 caracteres."
      );
      return;
    }

    if (confirmarSenha === "") {
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
      contentContainerStyle={styles.loginPage}
      keyboardShouldPersistTaps="handled"
    >

      <Text style={styles.vampireIcon}>
        🩸
      </Text>

      <Text style={styles.loginTitle}>
        THE VAMPIRE DIARIES
      </Text>

      <Text style={styles.loginWiki}>
        WIKI
      </Text>

      <View style={styles.loginBox}>

        <View style={styles.loginHeader}>
          <Text style={styles.loginHeaderText}>
            ENTRAR NA WIKI
          </Text>
        </View>

        <View style={styles.loginContent}>

          <Text style={styles.label}>
            Usuário
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
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
            placeholder="Digite seu e-mail"
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
            placeholder="Mínimo 6 caracteres"
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
            <View style={styles.errorBox}>
              <Text style={styles.errorTitle}>
                ⚠ ERRO
              </Text>

              <Text style={styles.errorText}>
                {erro}
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.redButton}
            onPress={entrar}
          >
            <Text style={styles.redButtonText}>
              ENTRAR
            </Text>
          </TouchableOpacity>

        </View>
      </View>

    </ScrollView>
  );
}

/* =====================================================
   PERFIL
===================================================== */

function PerfilScreen({ navigation, route }) {
  const usuario = route.params?.usuario || "";
  const email = route.params?.email || "";

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [especie, setEspecie] = useState("");

  const [erro, setErro] = useState("");

  function salvarPerfil() {
    setErro("");

    if (nome.trim() === "") {
      setErro("Digite seu nome.");
      return;
    }

    if (sobrenome.trim() === "") {
      setErro("Digite seu sobrenome.");
      return;
    }

    if (idade.trim() === "") {
      setErro("Digite sua idade.");
      return;
    }

    if (cidade.trim() === "") {
      setErro("Digite sua cidade.");
      return;
    }

    if (especie.trim() === "") {
      setErro("Digite sua espécie.");
      return;
    }

    const idadeNumero = Number(idade);

    if (
      isNaN(idadeNumero) ||
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
      idade: idadeNumero,
      cidade: cidade.trim(),
      especie: especie.trim(),
    });
  }

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.profilePage}
      keyboardShouldPersistTaps="handled"
    >

      <View style={styles.simpleHeader}>
        <Text style={styles.simpleHeaderText}>
          THE VAMPIRE DIARIES WIKI
        </Text>
      </View>

      <View style={styles.loginBox}>

        <View style={styles.loginHeader}>
          <Text style={styles.loginHeaderText}>
            CRIAR PERFIL
          </Text>
        </View>

        <View style={styles.loginContent}>

          <Text style={styles.profileUser}>
            Usuário: {usuario}
          </Text>

          <Text style={styles.label}>
            Nome
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            placeholderTextColor="#777"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>
            Sobrenome
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Seu sobrenome"
            placeholderTextColor="#777"
            value={sobrenome}
            onChangeText={setSobrenome}
          />

          <Text style={styles.label}>
            Idade
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Sua idade"
            placeholderTextColor="#777"
            value={idade}
            onChangeText={(texto) =>
              setIdade(
                texto.replace(/[^0-9]/g, "")
              )
            }
            keyboardType="numeric"
          />

          <Text style={styles.label}>
            Cidade
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Sua cidade"
            placeholderTextColor="#777"
            value={cidade}
            onChangeText={setCidade}
          />

          <Text style={styles.label}>
            Espécie
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Humano, Vampiro, Bruxa..."
            placeholderTextColor="#777"
            value={especie}
            onChangeText={setEspecie}
          />

          {erro !== "" && (
            <View style={styles.errorBox}>
              <Text style={styles.errorTitle}>
                ⚠ ERRO
              </Text>

              <Text style={styles.errorText}>
                {erro}
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.redButton}
            onPress={salvarPerfil}
          >
            <Text style={styles.redButtonText}>
              ENTRAR NA WIKI
            </Text>
          </TouchableOpacity>

        </View>
      </View>

    </ScrollView>
  );
}

/* =====================================================
   INÍCIO
===================================================== */

function InicioScreen({ navigation, route }) {
  const nome = route.params?.nome || "Visitante";

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.homePage}
    >

      <WikiHeader navigation={navigation} />

      <View style={styles.hero}>

        <Text style={styles.heroSmall}>
          THE
        </Text>

        <Text style={styles.heroTitle}>
          VAMPIRE
        </Text>

        <Text style={styles.heroTitle}>
          DIARIES
        </Text>

        <Text style={styles.heroWelcome}>
          Bem-vindo(a), {nome}
        </Text>

      </View>

      <View style={styles.article}>

        <Text style={styles.articleTitle}>
          The Vampire Diaries Wiki
        </Text>

        <Text style={styles.articleText}>
          Bem-vindo à wiki dedicada ao universo
          de The Vampire Diaries.
          {"\n\n"}
          Explore os personagens, locais e
          temporadas utilizando o menu acima
          ou a barra de pesquisa.
        </Text>

      </View>

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          EXPLORE A WIKI
        </Text>

        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            navigation.navigate("Personagens")
          }
        >
          <Text style={styles.categoryIcon}>
            👤
          </Text>

          <View>
            <Text style={styles.categoryTitle}>
              PERSONAGENS
            </Text>

            <Text style={styles.categoryText}>
              Veja os personagens.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            navigation.navigate("MysticFalls")
          }
        >
          <Text style={styles.categoryIcon}>
            📍
          </Text>

          <View>
            <Text style={styles.categoryTitle}>
              MYSTIC FALLS
            </Text>

            <Text style={styles.categoryText}>
              Conheça os principais locais.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            navigation.navigate("Temporadas")
          }
        >
          <Text style={styles.categoryIcon}>
            📺
          </Text>

          <View>
            <Text style={styles.categoryTitle}>
              TEMPORADAS
            </Text>

            <Text style={styles.categoryText}>
              Veja as temporadas da série.
            </Text>
          </View>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

/* =====================================================
   PERSONAGENS
===================================================== */

function PersonagensScreen({ navigation }) {
  return (
    <View style={styles.page}>

      <WikiHeader navigation={navigation} />

      <FlatList
        data={personagens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.pageHeading}>
            <Text style={styles.pageHeadingTitle}>
              PERSONAGENS
            </Text>

            <Text style={styles.pageHeadingText}>
              Personagens do universo de
              The Vampire Diaries.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.characterCard}>

            <View style={styles.characterIcon}>
              <Text style={styles.characterEmoji}>
                👤
              </Text>
            </View>

            <View style={styles.characterInfo}>

              <Text style={styles.characterName}>
                {item.nome}
              </Text>

              <Text style={styles.characterSpecies}>
                {item.especie}
              </Text>

              <Text style={styles.characterDescription}>
                {item.descricao}
              </Text>

            </View>

          </View>
        )}
      />

    </View>
  );
}

/* =====================================================
   MYSTIC FALLS
===================================================== */

function MysticFallsScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.articlePage}
    >

      <WikiHeader navigation={navigation} />

      <View style={styles.pageHeading}>
        <Text style={styles.pageHeadingTitle}>
          MYSTIC FALLS
        </Text>

        <Text style={styles.pageHeadingText}>
          Uma cidade marcada por acontecimentos
          sobrenaturais.
        </Text>
      </View>

      <View style={styles.article}>

        <Text style={styles.articleTitle}>
          Sobre Mystic Falls
        </Text>

        <Text style={styles.articleText}>
          Mystic Falls é a principal cidade
          associada aos acontecimentos de
          The Vampire Diaries.
          {"\n\n"}
          A cidade possui uma história ligada a
          diversas famílias e acontecimentos
          sobrenaturais.
        </Text>

      </View>

      <View style={styles.article}>

        <Text style={styles.articleTitle}>
          Locais importantes
        </Text>

        {locais.map((local) => (
          <View
            key={local.id}
            style={styles.location}
          >
            <Text style={styles.locationName}>
              {local.nome}
            </Text>

            <Text style={styles.locationText}>
              {local.descricao}
            </Text>
          </View>
        ))}

      </View>

    </ScrollView>
  );
}

/* =====================================================
   TEMPORADAS
===================================================== */

function TemporadasScreen({ navigation }) {
  return (
    <View style={styles.page}>

      <WikiHeader navigation={navigation} />

      <FlatList
        data={temporadas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.pageHeading}>

            <Text style={styles.pageHeadingTitle}>
              TEMPORADAS
            </Text>

            <Text style={styles.pageHeadingText}>
              Confira as oito temporadas.
            </Text>

          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.seasonCard}>

            <View style={styles.seasonNumber}>
              <Text style={styles.seasonNumberText}>
                {item.id}
              </Text>
            </View>

            <View style={styles.seasonInfo}>
              <Text style={styles.seasonName}>
                {item.nome}
              </Text>

              <Text style={styles.seasonEpisodes}>
                {item.episodios} episódios
              </Text>
            </View>

            <Text style={styles.arrow}>
              ›
            </Text>

          </View>
        )}
      />

    </View>
  );
}

/* =====================================================
   ERRO
===================================================== */

function ErroScreen({ navigation, route }) {
  const mensagem =
    route.params?.mensagem ||
    "Ocorreu um erro.";

  return (
    <View style={styles.errorPage}>

      <Text style={styles.bigError}>
        ⚠
      </Text>

      <Text style={styles.errorPageTitle}>
        ERRO
      </Text>

      <View style={styles.errorPageBox}>
        <Text style={styles.errorPageText}>
          {mensagem}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.redButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.redButtonText}>
          VOLTAR
        </Text>
      </TouchableOpacity>

    </View>
  );
}

/* =====================================================
   NAVEGAÇÃO
===================================================== */

function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.header,
          },

          headerTintColor: COLORS.goldLight,

          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Personagens"
          component={PersonagensScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MysticFalls"
          component={MysticFallsScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Temporadas"
          component={TemporadasScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Erro"
          component={ErroScreen}
          options={{
            title: "Erro",
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

/* =====================================================
   APP
===================================================== */

export default function App() {
  return <AppNavigator />;
}

/* =====================================================
   ESTILOS
===================================================== */

const styles = StyleSheet.create({

  page: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    backgroundColor: COLORS.header,
  },

  topBar: {
    height: 35,
    backgroundColor: COLORS.dark,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  topBarText: {
    color: "#aaa",
    fontSize: 10,
    fontWeight: "bold",
  },

  wikiText: {
    color: COLORS.redLight,
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 5,
  },

  logoArea: {
    padding: 17,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  logo: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
  },

  logoSub: {
    color: COLORS.gray,
    fontSize: 9,
    marginTop: 5,
    letterSpacing: 1,
  },

  searchArea: {
    flexDirection: "row",
    padding: 10,
  },

  searchInput: {
    flex: 1,
    height: 42,
    backgroundColor: COLORS.dark,
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.white,
    paddingHorizontal: 12,
  },

  searchButton: {
    width: 48,
    height: 42,
    backgroundColor: COLORS.red,
    justifyContent: "center",
    alignItems: "center",
  },

  searchButtonText: {
    fontSize: 18,
  },

  resultsBox: {
    backgroundColor: "#202124",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    maxHeight: 330,
  },

  resultsTitle: {
    color: COLORS.goldLight,
    fontWeight: "bold",
    fontSize: 11,
    padding: 12,
  },

  resultItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#3d3e42",
  },

  resultIcon: {
    width: 38,
    height: 38,
    backgroundColor: COLORS.redDark,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  resultText: {
    flex: 1,
  },

  resultTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
  },

  resultSubtitle: {
    color: COLORS.gray,
    fontSize: 11,
    marginTop: 3,
  },

  resultArrow: {
    color: COLORS.goldLight,
    fontSize: 25,
  },

  noResult: {
    padding: 15,
  },

  noResultTitle: {
    color: COLORS.white,
    fontWeight: "bold",
  },

  noResultText: {
    color: COLORS.gray,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  menu: {
    backgroundColor: COLORS.redDark,
    maxHeight: 45,
  },

  menuButton: {
    height: 45,
    paddingHorizontal: 17,
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#7a171c",
  },

  menuText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: "bold",
  },

  loginPage: {
    minHeight: "100%",
    alignItems: "center",
    paddingBottom: 40,
    backgroundColor: COLORS.background,
  },

  vampireIcon: {
    fontSize: 55,
    marginTop: 40,
  },

  loginTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  loginWiki: {
    color: COLORS.redLight,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 5,
    marginBottom: 20,
  },

  loginBox: {
    width: "92%",
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  loginHeader: {
    backgroundColor: COLORS.redDark,
    padding: 14,
  },

  loginHeaderText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 13,
  },

  loginContent: {
    padding: 18,
  },

  label: {
    color: COLORS.gray,
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 6,
  },

  input: {
    height: 44,
    backgroundColor: COLORS.dark,
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.white,
    paddingHorizontal: 12,
  },

  errorBox: {
    backgroundColor: "#3b171a",
    borderWidth: 1,
    borderColor: COLORS.redLight,
    padding: 12,
    marginTop: 15,
  },

  errorTitle: {
    color: "#e46a70",
    fontWeight: "bold",
  },

  errorText: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 4,
  },

  redButton: {
    height: 46,
    backgroundColor: COLORS.red,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    borderWidth: 1,
    borderColor: COLORS.redLight,
  },

  redButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 1,
  },

  profilePage: {
    paddingBottom: 40,
  },

  simpleHeader: {
    backgroundColor: COLORS.dark,
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  simpleHeaderText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  profileUser: {
    color: COLORS.goldLight,
    marginBottom: 8,
  },

  homePage: {
    paddingBottom: 40,
  },

  hero: {
    margin: 12,
    padding: 25,
    backgroundColor: "#0e0f11",
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
  },

  heroSmall: {
    color: COLORS.redLight,
    fontSize: 16,
    letterSpacing: 7,
    fontWeight: "bold",
  },

  heroTitle: {
    color: COLORS.white,
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 3,
  },

  heroWelcome: {
    color: COLORS.goldLight,
    fontSize: 13,
    marginTop: 12,
  },

  article: {
    margin: 12,
    padding: 17,
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  articleTitle: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  articleText: {
    color: "#d0d0d0",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 13,
  },

  section: {
    padding: 12,
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.red,
    paddingBottom: 8,
    marginBottom: 12,
  },

  category: {
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  categoryIcon: {
    fontSize: 30,
    marginRight: 14,
  },

  categoryTitle: {
    color: COLORS.goldLight,
    fontSize: 15,
    fontWeight: "bold",
  },

  categoryText: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: 3,
  },

  list: {
    padding: 12,
    paddingBottom: 40,
  },

  pageHeading: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginBottom: 12,
  },

  pageHeadingTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
  },

  pageHeadingText: {
    color: COLORS.gray,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 6,
  },

  characterCard: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
  },

  characterIcon: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.redDark,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  characterEmoji: {
    fontSize: 30,
  },

  characterInfo: {
    flex: 1,
  },

  characterName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  characterSpecies: {
    color: COLORS.goldLight,
    fontSize: 12,
    marginTop: 4,
  },

  characterDescription: {
    color: COLORS.gray,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
  },

  articlePage: {
    paddingBottom: 40,
  },

  location: {
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#414247",
  },

  locationName: {
    color: COLORS.goldLight,
    fontSize: 16,
    fontWeight: "bold",
  },

  locationText: {
    color: COLORS.gray,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
  },

  seasonCard: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  seasonNumber: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.redDark,
    justifyContent: "center",
    alignItems: "center",
  },

  seasonNumberText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },

  seasonInfo: {
    flex: 1,
    paddingLeft: 13,
  },

  seasonName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },

  seasonEpisodes: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: 4,
  },

  arrow: {
    color: COLORS.goldLight,
    fontSize: 28,
  },

  errorPage: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  bigError: {
    fontSize: 55,
  },

  errorPageTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },

  errorPageBox: {
    width: "100%",
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.red,
    padding: 20,
    marginTop: 20,
  },

  errorPageText: {
    color: COLORS.white,
    textAlign: "center",
    lineHeight: 22,
  },
});