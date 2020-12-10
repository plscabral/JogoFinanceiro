import React from 'react';
import { Text, View, Image, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

function ProfileResult({ route, navigation }: any) {
  const { profileSummary, profileDescription, firstTip, secondTip, thirdTip, fourthTip } = route.params

  function handleNavigationToProfilesDescription() {
    navigation.navigate('ProfilesDescription',
      {
        profileDescription: profileDescription,
        firstTip: firstTip,
        secondTip: secondTip,
        thirdTip: thirdTip,
        fourthTip: fourthTip,
      })
  }

  return (
    <ImageBackground source={require('../images/fundo.png')} style={styles.container}>
      <Image style={styles.image} source={require('../images/logo1x.png')} />

      <Text style={styles.title}>Resultado</Text>

      <View style={styles.frame}>
        <Text style={styles.textFrame}>{profileSummary}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNavigationToProfilesDescription}>
        <Text style={styles.textButton}>Avançar</Text>
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
    marginBottom: 10
  },
  frame: {
    width: '90%',
    height: 150,
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
    maxWidth: '90%',
    alignItems: 'center',
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

export default ProfileResult;