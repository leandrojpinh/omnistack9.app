import React, { useState } from 'react';
import { SafeAreaView, Text, AsyncStorage, Button, StyleSheet, Alert } from 'react-native';

import api from '../services/api';

export default function Book({ navigation }) {
    const [date, setDate] = useState('');
    const id = navigation.getParam('id');

    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spot${id}/booking`, { date }, {
            headers: { user_id }
        })

        Alert.alert('Solicitação de reserva enviada.');

        navigation.navigate('Spot');
    }

    function handleCancel() {
        navigation.navigate('Spot');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Data de interesse *</Text>
            <TextInput
                style={styles.input}
                placeholder="Qual data você quer reservar?"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                     <Text style={styles.buttonText}>Encontrar Spots</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
                     <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 30
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 30,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    cancelButton: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});