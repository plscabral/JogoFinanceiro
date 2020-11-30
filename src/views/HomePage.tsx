import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
    const navigation = useNavigation();

    function handleNavigationToQuestionsPage() {
        navigation.navigate('QuestionsPage')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/LOGO3x.png')} />

            <TouchableOpacity style={styles.button} onPress={handleNavigationToQuestionsPage}>
                <Text style={styles.textButton}>Começar</Text>
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
        width: 300,
        height: 300
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