import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import {
  temporadas,
  IMAGEM_PADRAO,
} from "../data/dados";
import WikiHeader from "../components/WikiHeader";
import styles from "../styles/styles";

function TemporadasScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
    >
      <WikiHeader navigation={navigation} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          TEMPORADAS
        </Text>

        <Text style={styles.sectionIntro}>
          Explore as temporadas de The Vampire Diaries.
        </Text>

        <View style={styles.seasonGrid}>
          {temporadas.map((temporada) => (
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
                style={styles.seasonImage}
                resizeMode="cover"
              />

              <View style={styles.seasonInfo}>
                <Text style={styles.seasonTitle}>
                  {temporada.nome}
                </Text>

                <Text style={styles.seasonEpisodes}>
                  {temporada.episodios} episódios
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default TemporadasScreen;