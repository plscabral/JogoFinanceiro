import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

function ProfileResult({ route, navigation }: any) {
  const
    {
      profileSummary,
      profileDescription,
      firstTip,
      secondTip,
      thirdTip,
      fourthTip,
      padding,
      heightProfilesSummary,
      heightProfilesDescriptions,
      heightTips
    } = route.params

  function handleNavigationToProfilesDescription() {
    navigation.navigate('ProfilesDescription',
      {
        profileDescription: profileDescription,
        firstTip: firstTip,
        secondTip: secondTip,
        thirdTip: thirdTip,
        fourthTip: fourthTip,
        padding: padding,
        heightProfilesDescriptions: heightProfilesDescriptions,
        heightTips: heightTips,
      })
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/LOGO3x.png')} />

      <Text style={styles.title}>Resultado</Text>

      <View style={{
        width: 350,
        height: heightProfilesSummary,
        borderRadius: 20,
        backgroundColor: '#F3F2F2',
        elevation: 3,
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: padding
      }}>
        <Text style={styles.textFrame}>{profileSummary}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNavigationToProfilesDescription}>
        <Text style={styles.textButton}>Avançar</Text>
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
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 40
  },
  textFrame: {
    maxWidth: 300,
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000',
    textAlign: 'justify',
    marginTop: 15,
    marginBottom: 10
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

export default ProfileResult;