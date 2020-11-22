import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const ProfilesDescription = ({ route, navigation }: any) => {
  const
    {
      profileDescription,
      firstTip,
      secondTip,
      thirdTip,
      fourthTip,
      padding,
      heightProfilesDescriptions,
      heightTips
    } = route.params;

  function handleNavigaToTipsPage() {
    navigation.navigate('TipsPage', {
      firstTip: firstTip,
      secondTip: secondTip,
      thirdTip: thirdTip,
      fourthTip: fourthTip,
      padding: padding,
      heightTips: heightTips
    })
  }

  function handleNavigaToHomePage() {
    navigation.navigate('HomePage')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/LOGO3x.png')} />

      <Text style={styles.title}>Você sabia?</Text>

      <View style={{
        width: 350,
        height: heightProfilesDescriptions,
        borderRadius: 20,
        backgroundColor: '#F3F2F2',
        elevation: 3,
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: padding
      }}>
        <Text style={styles.textFrame}>{profileDescription}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNavigaToTipsPage}>
        <Text style={styles.textButton}>Visualizar as dicas sobre o perfil</Text>
      </TouchableOpacity>

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
  },
  image: {
    width: 150,
    height: 150
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  textFrame: {
    maxWidth: 300,
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000',
    textAlign: 'justify'
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

export default ProfilesDescription;