//importação
import { View, Text, StyleSheet } from 'react-native'
import Component from './componente';
//body
export default function App() {

  return (

    <View style={styles.central}>

      <Text style={styles.titulo}>Sistema Conversor de Moedas</Text>
      <Component />
    </View>
  );

}

//css
const styles = StyleSheet.create({
  central: {
    flex: 1,
    backgroundColor: 'royalblue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  titulo: {

    fontSize: 25,
    color: 'white'

  }
})



