import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.fundo}>
      <View style={styles.container}>

        <Text style={styles.titulo}> Diário de um Vampiro</Text>

        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/4f/ae/76/4fae76355e01179d86dcb412a50f1bb7.jpg',
          }}
          style={styles.banner}
        />

        <Text style={styles.subtitulo}>Sobre a Série</Text>

        <Text style={styles.texto}>
          Em Mystic Falls, vampiros, bruxas e lobisomens convivem
          entre os humanos. A história acompanha Elena Gilbert e os
          irmãos Stefan e Damon Salvatore em aventuras cheias de
          romance, mistério e ação.
        </Text>

        <Text style={styles.subtitulo}>Personagens Principais</Text>

        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/e3/2e/4b/e32e4b4d5b8b0bb4f86e4577120ec0f7.jpg',
          }}
          style={styles.personagem}
        />
        <Text style={styles.nome}>Stefan Salvatore</Text>

        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/7c/2e/84/7c2e8472749bc506389a224e8975643d.jpg',
          }}
          style={styles.personagem}
        />
        <Text style={styles.nome}>Damon Salvatore</Text>

        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/30/d2/06/30d206d1b90a8612e9c8daced07a0bd5.jpg',
          }}
          style={styles.personagem}
        />
        <Text style={styles.nome}>Elena Gilbert</Text>

        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/86/ca/4d/86ca4d2337162de0907487e67139bf44.jpg',
          }}
          style={styles.personagem}
        />
        <Text style={styles.nome}>Klaus Mikaelson</Text>
<Image
          source={{
            uri: 'https://i.pinimg.com/736x/99/67/b9/9967b905bd7a4dfb8812f379a4a79bcc.jpg',
          }}
          style={styles.personagem}
        />
        <Text style={styles.nome}>Caroline Forbes</Text>

        <Image
          source={{
            uri: 'https://i.pinimg.com/vwebp/736x/89/55/55/895555cd624dc02fcce2035efd36d9e4.webp',
          }}
          style={styles.personagem}
        />
        <Text style={styles.nome}>Bonnie Bennett</Text>

        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/fe/c3/60/fec3607dcb4f875371083bb175ec4239.jpg',
          }}
          style={styles.personagem}
        />
        <Text style={styles.nome}>Katherine Pierce</Text>
<Image
          source={{
            uri: 'https://i.pinimg.com/736x/eb/c6/f7/ebc6f7fce85fc6b7afa23b1be24227e2.jpg',
          }}
          style={styles.personagem}
        />
        <Text style={styles.nome}>Elijah Mikaelson</Text>

        <Image
          source={{
            uri: 'https://i.pinimg.com/vwebp/1200x/44/8f/98/448f984c824a01b5f8ac83552d65ebaf.webp',
          }}
          style={styles.personagem}
        />
        <Text style={styles.nome}>Lexi Grayson</Text>


        <Text style={styles.subtitulo}>Qual é seu personagem favorito?</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite aqui..."
          placeholderTextColor="#999"
        />

        <View style={styles.botao}>
          <Button
            title="Enviar"
            color="#8B0000"
            onPress={() => Alert.alert("Obrigado!", "Sua resposta foi enviada.")}
          />
        </View>

        <StatusBar style="light" />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#0d0d0d',
  },

  container: {
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    color: '#B22222',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },

  banner: {
    width: 320,
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
  },

  subtitulo: {
    fontSize: 24,
    color: '#800020',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },

  personagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#8B0000',
    marginTop: 15,
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },

  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  botao: {
    width: '90%',
    marginTop: 20,
    marginBottom: 30,
  },
});