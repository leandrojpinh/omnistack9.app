import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, ScrollView, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

import logo from '../assets/logo.png';
import SpotItem from './SpotList';

export default function Spot() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storage => {
            const techsArray = storage.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={logo} />

                {techs.map(tech => <SpotItem key={tech} tech={tech} />)}
            </SafeAreaView>
        </ScrollView>        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10
    }
});