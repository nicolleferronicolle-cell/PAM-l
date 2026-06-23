import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const plantas = [
    {
      nome: 'Rosa',
      descricao: 'A rosa é uma planta ornamental conhecida por suas flores coloridas e perfumadas.',
    },
    {
      nome: 'Girassol',
      descricao: 'O girassol acompanha a luz do sol durante seu crescimento.',
    },
    {
      nome: 'Orquídea',
      descricao: 'A orquídea é muito apreciada pela beleza e variedade de suas flores.',
    },
    {
      nome: 'Cacto',
      descricao: 'O cacto é uma planta adaptada a ambientes secos e necessita de pouca água.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Plantas</Text>

      {plantas.map((planta, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.nome}>{planta.nome}</Text>
          <Text style={styles.descricao}>{planta.descricao}</Text>
        </View>
      ))}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2e7d32',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
  },
});
