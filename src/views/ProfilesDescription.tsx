import React from 'react'
import { View, Text, Image, ImageBackground, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'

const ProfilesDescription = ({ route, navigation }: any) => {
  const { profileDescription, firstTip, secondTip, thirdTip, fourthTip } = route.params;

  function handleNavigaToTipsPage() {
    navigation.navigate('TipsPage', {
      firstTip: firstTip,
      secondTip: secondTip,
      thirdTip: thirdTip,
      fourthTip: fourthTip,
    })
  }

  return (
    <ImageBackground source={require('../images/fundo.png')} style={styles.container}>
      <Image style={styles.image} source={require('../images/logo1x.png')} />

      <Text style={styles.title}>Você sabia?</Text>

      <View style={styles.frame}>
        <Text style={styles.textFrame}>{profileDescription}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNavigaToTipsPage}>
        <Text style={styles.textButton}>Visualizar as dicas sobre o perfil</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: 10
  },
  image: {
    width: 83,
    height: 110,
    marginBottom: 10 // talvez tenha que alterar
  },
  frame: {
    width: '90%',
    height: 330,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginBottom: 15
  },
  textFrame: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'justify',
    maxWidth: '93%'
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
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10
  },
})

export default ProfilesDescription;