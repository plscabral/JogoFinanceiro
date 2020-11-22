import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

function ResultPage({route, navigation}: any) {
  const { resultado } = route.params

  function handleNavigationToQuestionsPage() {
    navigation.navigate('HomePage')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/LOGO3x.png')} />

      <View style={styles.frame}>
        <Text style={styles.textFrame}>{resultado}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNavigationToQuestionsPage}>
        <Text style={styles.textButton}>Confirmar</Text>
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
  },
  image: {
    width: 150,
    height: 150
  },
  frame: {
    width: 350,
    height: 170,
    borderRadius: 20,
    backgroundColor: '#F3F2F2',
    elevation: 3,
    justifyContent: "center",
    alignItems: 'center',
  },
  textFrame: {
    maxWidth: 300,
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000'
  },
  button: {
    backgroundColor: '#000',
    height: 60,
    width: 350,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: 'center',
    elevation: 3,
    marginTop: 20,
  },

  textButton: {
    maxWidth: 300,
    color: '#fff',
    fontSize: 12
  },
})

export default ResultPage;