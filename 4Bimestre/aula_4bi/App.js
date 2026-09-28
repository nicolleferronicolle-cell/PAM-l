
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
} from "react-native";

import { StatusBar } from "expo-status-bar";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";


/* =========================================================
   NAVEGAÇÃO
========================================================= */

const Stack = createNativeStackNavigator();


/* =========================================================
   CORES - ESTILO WIKI
========================================================= */

const COLORS = {
  background: "#1d1e20",
  backgroundDark: "#111214",
  header: "#27282b",
  panel: "#303236",
  panelDark: "#242528",

  red: "#8b151b",
  redDark: "#5f0d12",
  redLight: "#b52830",

  gold: "#c9a84c",
  goldLight: "#e0c66d",

  white: "#f1f1f1",
  gray: "#b8b8b8",
  grayDark: "#777777",

  border: "#4b4c50",
};


/* =========================================================
   PERSONAGENS
========================================================= */

const personagens = [

  {
    id: "1",
    nome: "Elena Gilbert",
    especie: "Doppelgänger",
    descricao:
      "Elena Gilbert é uma das personagens centrais de The Vampire Diaries e uma das figuras ligadas à história sobrenatural de Mystic Falls.",
    imagem:
      "https://i.pinimg.com/736x/10/45/06/104506c8b2efa3d3e797a86c77ce686e.jpg",
  },

  {
    id: "2",
    nome: "Stefan Salvatore",
    especie: "Vampiro",
    descricao:
      "Stefan Salvatore é irmão de Damon Salvatore e uma das figuras centrais da história. Seu diário também está relacionado ao título da série.",
    imagem:
      "https://i.pinimg.com/736x/e3/2e/4b/e32e4b4d5b8b0bb4f86e4577120ec0f7.jpg",
  },

  {
    id: "3",
    nome: "Damon Salvatore",
    especie: "Vampiro",
    descricao:
      "Damon Salvatore é irmão de Stefan e possui uma relação importante com diversos acontecimentos de Mystic Falls.",
    imagem:
      "https://i.pinimg.com/736x/7b/e4/60/7be460f1df1f1d1189ae0b646f054506.jpg",
  },

  {
    id: "4",
    nome: "Bonnie Bennett",
    especie: "Bruxa",
    descricao:
      "Bonnie Bennett pertence à família Bennett e é uma das personagens sobrenaturais importantes da história.",
    imagem:
      "https://i.pinimg.com/736x/3f/ed/f2/3fedf2d035845d1f9249ae6acd567974.jpg",
  },

  {
    id: "5",
    nome: "Caroline Forbes",
    especie: "Vampira",
    descricao:
      "Caroline Forbes é uma personagem de Mystic Falls e amiga de Elena e de outros integrantes do grupo.",
    imagem:
      "https://i.pinimg.com/736x/99/67/b9/9967b905bd7a4dfb8812f379a4a79bcc.jpg",
  },

  {
    id: "6",
    nome: "Matt Donovan",
    especie: "Humano",
    descricao:
      "Matt Donovan é um dos moradores humanos de Mystic Falls e está ligado a diversos acontecimentos da cidade.",
    imagem:
      "https://i.pinimg.com/736x/2f/11/9c/2f119c8f5a31d9f7d3b6e5e0e5f1e7e0.jpg",
  },

  {
    id: "7",
    nome: "Jeremy Gilbert",
    especie: "Humano",
    descricao:
      "Jeremy Gilbert é irmão de Elena e está envolvido com acontecimentos sobrenaturais de Mystic Falls.",
    imagem:
      "https://i.pinimg.com/736x/9c/76/9a/9c769a0b7a9c6d6c3a0d3f9c2f3a4b3e.jpg",
  },

  {
    id: "8",
    nome: "Alaric Saltzman",
    especie: "Humano",
    descricao:
      "Alaric Saltzman é professor, caçador e uma das figuras ligadas à proteção de Mystic Falls.",
    imagem:
      "https://i.pinimg.com/736x/0f/75/0e/0f750e3b9e4a5c2b1f4a7a6c3c5e2e4a.jpg",
  },

  {
    id: "9",
    nome: "Niklaus Mikaelson",
    especie: "Híbrido",
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
  { id: "1", temporada: "1ª temporada", episodios: 22 },
  { id: "2", temporada: "2ª temporada", episodios: 22 },
  { id: "3", temporada: "3ª temporada", episodios: 22 },
  { id: "4", temporada: "4ª temporada", episodios: 23 },
  { id: "5", temporada: "5ª temporada", episodios: 22 },
  { id: "6", temporada: "6ª temporada", episodios: 22 },
  { id: "7", temporada: "7ª temporada", episodios: 22 },
  { id: "8", temporada: "8ª temporada", episodios: 16 },
];


/* =========================================================
   COMPONENTE DE CABEÇALHO DA WIKI
========================================================= */

function WikiHeader({ navigation, pesquisar, setPesquisar }) {

  return (

    <View>

      <View style={styles.topBar}>

        <Text style={styles.topBarText}>
          THE VAMPIRE DIARIES
        </Text>

        <Text style={styles.topBarSmall}>
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
          placeholderTextColor="#888"
          value={pesquisar}
          onChangeText={setPesquisar}
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {}}
        >

          <Text style={styles.searchButtonText}>
            🔎
          </Text>

        </TouchableOpacity>

      </View>


      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.menu}
      >

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Inicio")}
        >
          <Text style={styles.menuText}>
            INÍCIO
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Personagens")}
        >
          <Text style={styles.menuText}>
            PERSONAGENS
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("MysticFalls")}
        >
          <Text style={styles.menuText}>
            MYSTIC FALLS
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Temporadas")}
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
  const [confirmarSenha, setConfirmarSenha] = useState("");


  function entrar() {

    if (
      !usuario.trim() ||
      !email.trim() ||
      !senha ||
      !confirmarSenha
    ) {

      navigation.navigate("Erro", {
        mensagem:
          "Preencha todos os campos para continuar.",
        voltar: "Login",
      });

      return;
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

      navigation.navigate("Erro", {
        mensagem:
          "O e-mail informado não é válido.",
        voltar: "Login",
      });

      return;
    }


    if (senha.length < 6) {

      navigation.navigate("Erro", {
        mensagem:
          "A senha precisa possuir pelo menos 6 caracteres.",
        voltar: "Login",
      });

      return;
    }


    if (senha !== confirmarSenha) {

      navigation.navigate("Erro", {
        mensagem:
          "As senhas digitadas não são iguais.",
        voltar: "Login",
      });

      return;
    }


    navigation.navigate("Perfil", {
      usuario,
    });

  }


  return (

    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.loginContainer}
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
            placeholder="Sua senha"
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


      <Text style={styles.footerText}>
        Uma enciclopédia sobre o universo de
        The Vampire Diaries.
      </Text>

    </ScrollView>
  );
}


/* =========================================================
   PERFIL
========================================================= */

function PerfilScreen({ navigation, route }) {

  const usuario = route.params?.usuario || "";

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [especie, setEspecie] = useState("");
  const [descricao, setDescricao] = useState("");


  function continuar() {

    if (
      !nome.trim() ||
      !sobrenome.trim() ||
      !idade.trim() ||
      !cidade.trim() ||
      !especie.trim()
    ) {

      navigation.navigate("Erro", {
        mensagem:
          "Preencha todos os campos obrigatórios do perfil.",
        voltar: "Perfil",
      });

      return;
    }


    if (
      !Number.isInteger(Number(idade)) ||
      Number(idade) <= 0 ||
      Number(idade) > 120
    ) {

      navigation.navigate("Erro", {
        mensagem:
          "Digite uma idade válida usando somente números.",
        voltar: "Perfil",
      });

      return;
    }


    navigation.navigate("Inicio", {
      nome,
      sobrenome,
      usuario,
      cidade,
      especie,
      descricao,
    });

  }


  return (

    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.profileContainer}
    >

      <WikiHeader
        navigation={navigation}
        pesquisar=""
        setPesquisar={() => {}}
      />


      <View style={styles.wikiBox}>

        <View style={styles.boxHeader}>

          <Text style={styles.boxHeaderText}>
            CRIAR PERFIL
          </Text>

        </View>


        <View style={styles.boxContent}>

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
              setIdade(texto.replace(/[^0-9]/g, ""))
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
            placeholder="Humano, Vampiro, Bruxa..."
            placeholderTextColor="#777"
            value={especie}
            onChangeText={setEspecie}
          />


          <Text style={styles.label}>
            Descrição
          </Text>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Conte sobre seu personagem..."
            placeholderTextColor="#777"
            value={descricao}
            onChangeText={setDescricao}
            multiline
          />


          <TouchableOpacity
            style={styles.redButton}
            onPress={continuar}
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


/* =========================================================
   PÁGINA INICIAL DA WIKI
========================================================= */

function InicioScreen({ navigation, route }) {

  const [pesquisar, setPesquisar] = useState("");

  const nome = route.params?.nome || "Visitante";


  return (

    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.mainContainer}
    >

      <WikiHeader
        navigation={navigation}
        pesquisar={pesquisar}
        setPesquisar={setPesquisar}
      />


      <View style={styles.hero}>

        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/en/0/0a/The_Vampire_Diaries_title_card.jpg",
          }}
          style={styles.heroImage}
        />


        <View style={styles.heroOverlay}>

          <Text style={styles.heroTitle}>
            THE VAMPIRE DIARIES
          </Text>

          <Text style={styles.heroText}>
            Bem-vindo(a), {nome}
          </Text>

        </View>

      </View>


      <View style={styles.content}>

        <View style={styles.article}>

          <Text style={styles.articleTitle}>
            The Vampire Diaries Wiki
          </Text>


          <Text style={styles.articleText}>

            Bem-vindo à enciclopédia dedicada
            ao universo de The Vampire Diaries.

            {"\n\n"}

            The Vampire Diaries acompanha Elena
            Gilbert e os irmãos Stefan e Damon
            Salvatore em Mystic Falls, uma cidade
            marcada por acontecimentos
            sobrenaturais.

            {"\n\n"}

            Nesta wiki você pode encontrar
            informações sobre personagens,
            lugares e temporadas da série.

          </Text>

        </View>


        <View style={styles.infoBox}>

          <Text style={styles.infoTitle}>
            VOCÊ ESTÁ EM MYSTIC FALLS
          </Text>


          <Text style={styles.infoText}>
            Explore os conteúdos abaixo.
          </Text>


          <TouchableOpacity
            style={styles.wikiLink}
            onPress={() =>
              navigation.navigate("Personagens")
            }
          >

            <Text style={styles.wikiLinkText}>
              → Personagens
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.wikiLink}
            onPress={() =>
              navigation.navigate("MysticFalls")
            }
          >

            <Text style={styles.wikiLinkText}>
              → Mystic Falls
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.wikiLink}
            onPress={() =>
              navigation.navigate("Temporadas")
            }
          >

            <Text style={styles.wikiLinkText}>
              → Temporadas
            </Text>

          </TouchableOpacity>

        </View>

      </View>


      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          DESTAQUES
        </Text>


        <View style={styles.highlightGrid}>

          <TouchableOpacity
            style={styles.highlight}
            onPress={() =>
              navigation.navigate("Personagens")
            }
          >

            <Text style={styles.highlightIcon}>
              👤
            </Text>

            <Text style={styles.highlightTitle}>
              PERSONAGENS
            </Text>

            <Text style={styles.highlightText}>
              Conheça os moradores e
              personagens do universo.
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.highlight}
            onPress={() =>
              navigation.navigate("MysticFalls")
            }
          >

            <Text style={styles.highlightIcon}>
              🏙️
            </Text>

            <Text style={styles.highlightTitle}>
              MYSTIC FALLS
            </Text>

            <Text style={styles.highlightText}>
              Conheça os principais
              lugares da cidade.
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.highlight}
            onPress={() =>
              navigation.navigate("Temporadas")
            }
          >

            <Text style={styles.highlightIcon}>
              📺
            </Text>

            <Text style={styles.highlightTitle}>
              TEMPORADAS
            </Text>

            <Text style={styles.highlightText}>
              Veja as oito temporadas
              e seus episódios.
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

function PersonagensScreen({ navigation }) {

  const [pesquisar, setPesquisar] = useState("");


  const filtrados = personagens.filter((personagem) =>
    personagem.nome
      .toLowerCase()
      .includes(pesquisar.toLowerCase())
  );


  return (

    <View style={styles.page}>

      <WikiHeader
        navigation={navigation}
        pesquisar={pesquisar}
        setPesquisar={setPesquisar}
      />


      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.characterList}

        ListHeaderComponent={

          <View style={styles.pageHeading}>

            <Text style={styles.pageHeadingTitle}>
              PERSONAGENS
            </Text>

            <Text style={styles.pageHeadingText}>
              Personagens relacionados ao universo
              de The Vampire Diaries.
            </Text>

          </View>

        }


        renderItem={({ item }) => (

          <View style={styles.characterCard}>

            <Image
              source={{
                uri: item.imagem,
              }}
              style={styles.characterImage}
            />


            <View style={styles.characterBody}>

              <Text style={styles.characterName}>
                {item.nome}
              </Text>


              <View style={styles.tag}>

                <Text style={styles.tagText}>
                  {item.especie}
                </Text>

              </View>


              <Text style={styles.characterDescription}>
                {item.descricao}
              </Text>


              <TouchableOpacity
                style={styles.smallButton}
                onPress={() => {}}
              >

                <Text style={styles.smallButtonText}>
                  VER ARTIGO
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        )}

      />

    </View>
  );
}


/* =========================================================
   MYSTIC FALLS
========================================================= */

function MysticFallsScreen({ navigation }) {

  return (

    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.articlePage}
    >

      <WikiHeader
        navigation={navigation}
        pesquisar=""
        setPesquisar={() => {}}
      />


      <View style={styles.articleHeader}>

        <Text style={styles.articlePageTitle}>
          Mystic Falls
        </Text>

        <Text style={styles.articlePageSubtitle}>
          Cidade fictícia da Virgínia
        </Text>

      </View>


      <View style={styles.wikiArticleBox}>

        <Text style={styles.articleSectionTitle}>
          SOBRE
        </Text>


        <Text style={styles.articleText}>

          Mystic Falls é uma cidade fictícia
          localizada na Virgínia e serve como
          principal cenário de The Vampire Diaries.

          {"\n\n"}

          A cidade possui uma longa história
          relacionada às famílias fundadoras e
          acontecimentos sobrenaturais.

        </Text>

      </View>


      <View style={styles.wikiArticleBox}>

        <Text style={styles.articleSectionTitle}>
          LOCAIS IMPORTANTES
        </Text>


        <View style={styles.locationItem}>

          <Text style={styles.locationName}>
            Mystic Grill
          </Text>

          <Text style={styles.locationDescription}>
            Um dos estabelecimentos conhecidos
            e frequentados pelos personagens.
          </Text>

        </View>


        <View style={styles.locationItem}>

          <Text style={styles.locationName}>
            Praça da Cidade
          </Text>

          <Text style={styles.locationDescription}>
            Uma área central de Mystic Falls.
          </Text>

        </View>


        <View style={styles.locationItem}>

          <Text style={styles.locationName}>
            Mystic Falls High School
          </Text>

          <Text style={styles.locationDescription}>
            Escola frequentada por diversos
            personagens.
          </Text>

        </View>


        <View style={styles.locationItem}>

          <Text style={styles.locationName}>
            Pensão Salvatore
          </Text>

          <Text style={styles.locationDescription}>
            Residência associada aos irmãos
            Stefan e Damon Salvatore.
          </Text>

        </View>


        <View style={styles.locationItem}>

          <Text style={styles.locationName}>
            Wickery Bridge
          </Text>

          <Text style={styles.locationDescription}>
            Uma das localidades conhecidas
            da cidade.
          </Text>

        </View>

      </View>


      <View style={styles.wikiArticleBox}>

        <Text style={styles.articleSectionTitle}>
          FAMÍLIAS FUNDADORAS
        </Text>


        <Text style={styles.articleText}>

          A história de Mystic Falls está ligada
          às famílias fundadoras da cidade.

          {"\n\n"}

          Entre as famílias relacionadas à história
          estão os Gilbert, Forbes, Lockwood,
          Salvatore e outras famílias da cidade.

        </Text>

      </View>

    </ScrollView>
  );
}


/* =========================================================
   TEMPORADAS
========================================================= */

function TemporadasScreen({ navigation }) {

  return (

    <View style={styles.page}>

      <WikiHeader
        navigation={navigation}
        pesquisar=""
        setPesquisar={() => {}}
      />


      <FlatList
        data={temporadas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.seasonList}

        ListHeaderComponent={

          <View style={styles.pageHeading}>

            <Text style={styles.pageHeadingTitle}>
              TEMPORADAS
            </Text>

            <Text style={styles.pageHeadingText}>
              Informações gerais sobre as temporadas
              de The Vampire Diaries.
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
                {item.temporada}
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


/* =========================================================
   TELA DE ERRO
========================================================= */

function ErroScreen({ navigation, route }) {

  const mensagem =
    route.params?.mensagem ||
    "Ocorreu um erro.";


  const voltar =
    route.params?.voltar ||
    "Login";


  return (

    <View style={styles.errorPage}>

      <Text style={styles.errorIcon}>
        ⚠
      </Text>


      <Text style={styles.errorTitle}>
        ERRO
      </Text>


      <View style={styles.errorBox}>

        <Text style={styles.errorMessage}>
          {mensagem}
        </Text>

      </View>


      <TouchableOpacity
        style={styles.redButton}
        onPress={() =>
          navigation.navigate(voltar)
        }
      >

        <Text style={styles.redButtonText}>
          VOLTAR
        </Text>

      </TouchableOpacity>

    </View>
  );
}


/* =========================================================
   STACK NAVIGATOR
========================================================= */

function StackNavigator() {

  return (

    <NavigationContainer>

      <Stack.Navigator

        initialRouteName="Login"

        screenOptions={{

          headerStyle: {
            backgroundColor: COLORS.header,
          },

          headerTintColor:
            COLORS.goldLight,

          headerTitleStyle: {
            fontWeight: "bold",
          },

          headerShadowVisible: false,

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
            title: "Perfil",
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


/* =========================================================
   APP
========================================================= */

export default function App() {

  return (
    <StackNavigator />
  );

}


/* =========================================================
   ESTILOS
========================================================= */

const styles = StyleSheet.create({

  page: {
    flex: 1,
    backgroundColor: COLORS.background,
  },


  /* =========================
     TOPO DA WIKI
  ========================= */

  topBar: {
    height: 34,
    backgroundColor: "#111214",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },


  topBarText: {
    color: "#aaaaaa",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },


  topBarSmall: {
    color: COLORS.redLight,
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 5,
  },


  logoArea: {
    backgroundColor: COLORS.header,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },


  logoTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "bold",
  },


  logoSubtitle: {
    color: COLORS.gray,
    fontSize: 9,
    marginTop: 5,
    letterSpacing: 1,
  },


  searchArea: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: COLORS.header,
  },


  searchInput: {
    flex: 1,
    height: 42,
    backgroundColor: "#151619",
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.white,
    paddingHorizontal: 12,
    fontSize: 14,
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


  menu: {
    backgroundColor: COLORS.redDark,
    maxHeight: 45,
  },


  menuItem: {
    paddingHorizontal: 17,
    height: 45,
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#7d171c",
  },


  menuText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: "bold",
  },


  /* =========================
     LOGIN
  ========================= */

  loginContainer: {
    minHeight: "100%",
    alignItems: "center",
    paddingBottom: 40,
  },


  loginLogo: {
    fontSize: 65,
    marginTop: 35,
  },


  loginTitle: {
    color: COLORS.white,
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },


  loginSubtitle: {
    color: COLORS.redLight,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 5,
    marginBottom: 25,
  },


  wikiBox: {
    width: "92%",
    maxWidth: 600,
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginTop: 15,
  },


  boxHeader: {
    backgroundColor: COLORS.redDark,
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.redLight,
  },


  boxHeaderText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },


  boxContent: {
    padding: 20,
  },


  label: {
    color: COLORS.gray,
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 7,
    marginTop: 12,
  },


  input: {
    height: 45,
    backgroundColor: "#17181a",
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.white,
    paddingHorizontal: 12,
    fontSize: 14,
  },


  textArea: {
    height: 100,
    textAlignVertical: "top",
    paddingTop: 12,
  },


  redButton: {
    backgroundColor: COLORS.red,
    minHeight: 46,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: COLORS.redLight,
  },


  redButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 1,
  },


  footerText: {
    color: COLORS.grayDark,
    fontSize: 12,
    textAlign: "center",
    marginTop: 25,
    width: "80%",
  },


  /* =========================
     PERFIL
  ========================= */

  profileContainer: {
    paddingBottom: 40,
  },


  /* =========================
     INÍCIO
  ========================= */

  mainContainer: {
    paddingBottom: 40,
  },


  hero: {
    margin: 12,
    height: 220,
    borderWidth: 1,
    borderColor: COLORS.border,
    position: "relative",
    overflow: "hidden",
  },


  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.65,
  },


  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.72)",
    padding: 16,
  },


  heroTitle: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: "bold",
  },


  heroText: {
    color: COLORS.goldLight,
    fontSize: 13,
    marginTop: 4,
  },


  content: {
    paddingHorizontal: 12,
  },


  article: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
  },


  articleTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 10,
  },


  articleText: {
    color: "#d0d0d0",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 15,
  },


  infoBox: {
    backgroundColor: "#26272a",
    borderWidth: 1,
    borderColor: COLORS.border,
    marginTop: 12,
    padding: 16,
  },


  infoTitle: {
    color: COLORS.goldLight,
    fontSize: 15,
    fontWeight: "bold",
  },


  infoText: {
    color: COLORS.gray,
    marginTop: 7,
    fontSize: 13,
  },


  wikiLink: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#414247",
  },


  wikiLinkText: {
    color: "#d7b85c",
    fontSize: 14,
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


  highlightGrid: {
    gap: 10,
  },


  highlight: {
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
    minHeight: 130,
  },


  highlightIcon: {
    fontSize: 30,
  },


  highlightTitle: {
    color: COLORS.goldLight,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },


  highlightText: {
    color: COLORS.gray,
    fontSize: 13,
    marginTop: 5,
    lineHeight: 18,
  },


  /* =========================
     PERSONAGENS
  ========================= */

  pageHeading: {
    padding: 15,
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
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
    marginTop: 7,
    lineHeight: 19,
  },


  characterList: {
    padding: 12,
    paddingBottom: 40,
  },


  characterCard: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 14,
  },


  characterImage: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },


  characterBody: {
    padding: 15,
  },


  characterName: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: "bold",
  },


  tag: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.redDark,
    paddingHorizontal: 9,
    paddingVertical: 5,
    marginTop: 8,
  },


  tagText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: "bold",
  },


  characterDescription: {
    color: COLORS.gray,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 12,
  },


  smallButton: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: COLORS.gold,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 14,
  },


  smallButtonText: {
    color: COLORS.goldLight,
    fontSize: 11,
    fontWeight: "bold",
  },


  /* =========================
     ARTIGO MYSTIC FALLS
  ========================= */

  articlePage: {
    paddingBottom: 40,
  },


  articleHeader: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },


  articlePageTitle: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "bold",
  },


  articlePageSubtitle: {
    color: COLORS.gray,
    fontSize: 13,
    marginTop: 5,
  },


  wikiArticleBox: {
    margin: 12,
    padding: 18,
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
  },


  articleSectionTitle: {
    color: COLORS.goldLight,
    fontSize: 17,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.red,
    paddingBottom: 8,
  },


  locationItem: {
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#414247",
  },


  locationName: {
    color: "#d8b95b",
    fontSize: 16,
    fontWeight: "bold",
  },


  locationDescription: {
    color: COLORS.gray,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
  },


  /* =========================
     TEMPORADAS
  ========================= */

  seasonList: {
    padding: 12,
    paddingBottom: 40,
  },


  seasonCard: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 12,
  },


  seasonNumber: {
    width: 48,
    height: 48,
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
    fontSize: 13,
    marginTop: 4,
  },


  arrow: {
    color: COLORS.goldLight,
    fontSize: 28,
  },


  /* =========================
     ERRO
  ========================= */

  errorPage: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },


  errorIcon: {
    color: COLORS.redLight,
    fontSize: 55,
    marginBottom: 15,
  },


  errorTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },


  errorBox: {
    width: "100%",
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.red,
    padding: 20,
  },


  errorMessage: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 15,
    lineHeight: 23,
  },

});

