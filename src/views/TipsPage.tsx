import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

const TipsPage = ({ route, navigation }: any) => {

  const { firstTip, secondTip, thirdTip } = route.params;

  function handleNavigaToHomePage() {
    navigation.navigate('HomePage')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/LOGO3x.png')} />

      <Text style={styles.title}>Vamos para as dicas!</Text>

      <View style={styles.frame}>
        <Text style={styles.textFrame}>1) {firstTip}</Text>
        <Text style={styles.textFrame}>2) {secondTip}</Text>
        <Text style={styles.textFrame}>3) {thirdTip}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNavigaToHomePage}>
        <Text style={styles.textButton}>Voltar a tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: 0
  },
  image: {
    width: '30%',
    height: '20%',
  },
  frame: {
    width: '90%',
    height: 320,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginBottom: 15
  },
  textFrame: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'justify',
    maxWidth: '95%',
    paddingBottom: 8
  },
  button: {
    backgroundColor: '#000',
    height: 55,
    width: '90%',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: 'center',
    elevation: 3,
    marginBottom: 8
  },
  textButton: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    maxWidth: '94%'
  },
  title: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10
  },
})

export default TipsPage;