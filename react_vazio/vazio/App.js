import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.titulo}>
        <Text> Can`t Catch Me Now</Text>
      </View>
      <View style={styles.cont_texto}>
        <Text> 
          There's blood on the side of the mountain
          There's writing all over the wall
          Shadows of us are still dancing
          In every room and every hall
        </Text>
      </View> 
      <View> 
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    flex: 1,

    backgroundColor: '#f09c1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont_texto: {
    width:100,
    
  },
});

