import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Keyboard,
} from "react-native";
import {
  pesquisarWiki,
  IMAGEM_PADRAO,
} from "../data/dados";
import styles from "../styles/styles";

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

        <Text style={styles.topBarWiki}>WIKI</Text>
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
          <Text style={styles.searchIcon}>🔎</Text>
        </TouchableOpacity>
      </View>

      {mostrarResultados && pesquisa.trim() !== "" && (
        <View style={styles.searchResults}>
          {resultados.length > 0 ? (
            <>
              <Text style={styles.searchResultsTitle}>
                RESULTADOS DA PESQUISA
              </Text>

              {resultados.slice(0, 6).map((resultado) => (
                <TouchableOpacity
                  key={resultado.id}
                  style={styles.searchResult}
                  onPress={() => abrirResultado(resultado)}
                >
                  <Image
                    source={{
                      uri:
                        resultado.imagem ||
                        IMAGEM_PADRAO,
                    }}
                    style={styles.searchResultImage}
                  />

                  <View style={styles.searchResultText}>
                    <Text style={styles.searchResultTitle}>
                      {resultado.titulo}
                    </Text>

                    <Text style={styles.searchResultSubtitle}>
                      {resultado.tipo} • {resultado.subtitulo}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </>
          ) : (
            <Text style={styles.searchEmpty}>
              Nenhum resultado encontrado.
            </Text>
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
          onPress={() => navigation.navigate("Inicio")}
        >
          <Text style={styles.menuText}>INÍCIO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Personagens")}
        >
          <Text style={styles.menuText}>PERSONAGENS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("MysticFalls")}
        >
          <Text style={styles.menuText}>MYSTIC FALLS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Temporadas")}
        >
          <Text style={styles.menuText}>TEMPORADAS</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default WikiHeader;