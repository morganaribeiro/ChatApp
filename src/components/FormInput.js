import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

// Dimensions da API principal do RN fornece 
// uma maneira de obter a largura e altura da tela

const { width, height } = Dimensions.get('screen');


export default function FormInput ( { labelName, ... rest }) {
    return (
        <TextInput 
        label={labelName}
        style={styles.input}
        numberOfLines={1}
        {...rest}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        marginBottom: 10,
        width: width/ 1.5,
        height: height/ 15
    }
});