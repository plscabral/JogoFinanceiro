import React from 'react'
import {View, Text, StyleSheet, ViewBase} from 'react-native';

const Frame = (props: any) => {
    return(
        <View style={styles.frame}>
            <Text style={styles.textFrame}>{props.question}</Text>
        </View>
    );   
}

const styles = StyleSheet.create({
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
        fontSize: 16,
        fontWeight: 'normal',
        color: '#000'
    }
})

export default Frame;