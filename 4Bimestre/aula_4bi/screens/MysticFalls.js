import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import {
  locais,
  IMAGEM_PADRAO,
} from "../data/dados";
import WikiHeader from "../components/WikiHeader";
import styles from "../styles/styles";

function MysticFallsScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
    >
      <WikiHeader navigation={navigation} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          MYSTIC FALLS
        </Text>

        <Text style={styles.sectionIntro}>
          Explore alguns dos locais importantes
          da história.
        </Text>

        {locais.map((local) => (
          <View
            key={local.id}
            style={styles.locationCard}
          >
            <Image
              source={{
                uri: local.imagem || IMAGEM_PADRAO,
              }}
              style={styles.locationImage}
              resizeMode="cover"
            />

            <View style={styles.locationInfo}>
              <Text style={styles.locationTitle}>
                {local.titulo}
              </Text>

              <Text style={styles.locationSubtitle}>
                {local.subtitulo}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default MysticFallsScreen;