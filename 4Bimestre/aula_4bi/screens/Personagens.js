import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import {
  personagens,
  IMAGEM_PADRAO,
} from "../data/dados";
import WikiHeader from "../components/WikiHeader";
import styles from "../styles/styles";

function PersonagensScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
    >
      <WikiHeader navigation={navigation} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          PERSONAGENS
        </Text>

        <Text style={styles.sectionIntro}>
          Conheça os principais personagens de
          The Vampire Diaries.
        </Text>

        <View style={styles.characterGrid}>
          {personagens.map((personagem) => (
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
                style={styles.characterImage}
                resizeMode="cover"
              />

              <View style={styles.characterInfo}>
                <Text style={styles.characterName}>
                  {personagem.nome}
                </Text>

                <Text style={styles.characterSpecies}>
                  {personagem.especie}
                </Text>

                <Text
                  style={styles.characterDescription}
                >
                  {personagem.descricao}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default PersonagensScreen;