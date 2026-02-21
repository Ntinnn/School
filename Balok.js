import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import imagebg from './assets/hexagon.jpg';
import { MaterialIcons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

const Balok = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Gistesy': require('./assets/Gistesy.ttf'),
    });

    const [panjang, setPanjang] = useState('0');
    const [lebar, setLebar] = useState('0');
    const [tinggi, setTinggi] = useState('0');
    const [luas, setLuas] = useState('0');

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    const hitungLuasBalok = () => {
        const p = parseFloat(panjang);
        const l = parseFloat(lebar);
        const t = parseFloat(tinggi);
        const Luas = 2 * (p * l + p * t + l * t);
        setLuas(Luas.toString());
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <ImageBackground source={imagebg} style={styles.image}>
                <Text style={styles.text}>
                    B A L O K
                </Text>
                <View style={styles.card}>
                    <Text style={styles.text}>
                        2 X (P X L + P X T + L X T)
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPanjang}
                            placeholder="Panjang"
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setLebar}
                            placeholder="Lebar"
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setTinggi}
                            placeholder="Tinggi"
                            keyboardType="numeric"
                        />
                    </View>
                    <TouchableOpacity onPress={hitungLuasBalok}>
                        <Text style={styles.button}>
                            Hitung Luas Balok
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.hasil}>
                        Luas Balok adalah {luas} cm²
                    </Text>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
                        <MaterialIcons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Balok;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    card: {
        backgroundColor: '#FBFBFB',
        borderRadius: 10,
        width: 350,
        height: 400,
        padding: 20,
        margin: 30,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 20,
        fontSize: 15,
        color: 'black',
        padding: 10,
        paddingBottom: 50,
        margin: 15,
        width: 75,
    },
    text: {
        fontWeight: '500',
        textAlignVertical: "center",
        margin: 10,
        padding: 10,
        textAlign: "center",
        borderRadius: 13,
        color: "#3D3B40",
        fontSize: 23,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10,
        backgroundColor: "white",
    },
    button: {
        borderColor: 'Black',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 5,
        fontSize: 20,
        color: 'black',
        padding: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 20,
        width: 295,
        textAlign: 'center'
    },
    hasil: {
        marginBottom: 5,
        fontSize: 20,
        color: 'black',
        padding: 10,
        paddingBottom: 20,
        margin: 10,
        width: 295,
        textAlign: 'center'
    },

    bottomView: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50
    },

    backButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
});
