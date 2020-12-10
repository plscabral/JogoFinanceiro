import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
    const navigation = useNavigation();

    function handleNavigationToQuestionsPage() {
        navigation.navigate('QuestionsPage')
    }

    return (
        <ImageBackground source={require('../images/fundo.png')} style={styles.container}>
            <Image style={styles.image} source={require('../images/logo1x.png')} />
            <TouchableOpacity style={styles.button} onPress={handleNavigationToQuestionsPage}>
                <Text style={styles.textButton}>Começar</Text>
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
    image: {
        maxHeight: 280,
        maxWidth: 210,
    },
    button: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 40,
        backgroundColor: '#000',
        borderRadius: 20,
        height: 56,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        elevation: 3
    },
    textButton: {
        color: '#fff',
        fontSize: 12
    },
})

export default HomePage;