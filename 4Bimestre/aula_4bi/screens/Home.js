import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import WikiHeader from "../components/WikiHeader";
import styles from "../styles/styles";

function InicioScreen({ navigation, route }) {
  const perfil = route.params;

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
    >
      <WikiHeader navigation={navigation} />

      <View style={styles.hero}>
        <Text style={styles.heroTitle}>
          THE VAMPIRE DIARIES
        </Text>

        <Text style={styles.heroSubtitle}>WIKI</Text>

        <Text style={styles.heroText}>
          Explore personagens, temporadas e locais de
          Mystic Falls.
        </Text>
      </View>

      {perfil?.nome && (
        <View style={styles.profileCard}>
          <Text style={styles.profileCardTitle}>
            BEM-VINDA À WIKI
          </Text>

          <Text style={styles.profileCardName}>
            {perfil.nome} {perfil.sobrenome}
          </Text>

          <Text style={styles.profileCardText}>
            {perfil.especie} • {perfil.cidade}
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
              navigation.navigate("Personagens")
            }
          >
            <Text style={styles.featureIcon}>🧛</Text>
            <Text style={styles.featureTitle}>
              PERSONAGENS
            </Text>
            <Text style={styles.featureText}>
              Conheça os personagens da série.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() =>
              navigation.navigate("Temporadas")
            }
          >
            <Text style={styles.featureIcon}>📺</Text>
            <Text style={styles.featureTitle}>
              TEMPORADAS
            </Text>
            <Text style={styles.featureText}>
              Veja todas as temporadas e episódios.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() =>
              navigation.navigate("MysticFalls")
            }
          >
            <Text style={styles.featureIcon}>📍</Text>
            <Text style={styles.featureTitle}>
              MYSTIC FALLS
            </Text>
            <Text style={styles.featureText}>
              Explore os principais locais.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default InicioScreen;
