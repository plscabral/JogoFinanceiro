import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const Button = (props: any) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => { }}>
            <Text style={styles.textButton}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
});

export default Button;