import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import imagebg from './assets/hexagon.jpg';
import { MaterialIcons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

const Limas = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Gistesy': require('./assets/Gistesy.ttf'),
    });

    const [luasAlas, setLuasAlas] = useState('0');
    const [luasSisiTegak, setLuasSisiTegak] = useState('0'); // Tambahkan state untuk luas sisi tegak jika diperlukan
    const [luas, setLuas] = useState('0');

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    const hitungLuasLimas = () => {
        const LuasAlas = parseFloat(luasAlas);
        const LuasSisiTegak = parseFloat(luasSisiTegak); // Ambil luas sisi tegak dari input jika diperlukan
        const Luas = LuasAlas + LuasSisiTegak; // Hitung luas limas dengan menambahkan luas alas dan luas sisi tegak
        setLuas(Luas.toString());
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <ImageBackground source={imagebg} style={styles.image}>
                <Text style={styles.text}>
                    L I M A S
                </Text>
                <View style={styles.card}>
                    <Text style={styles.text}>
                    Luas Alas + Luas Sisi
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setLuasAlas}
                            placeholder="Luas Alas"
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setLuasSisiTegak}
                            placeholder="Luas Sisi Tegak"
                            keyboardType="numeric"
                        />
                    </View>
                    <TouchableOpacity onPress={hitungLuasLimas}>
                        <Text style={styles.button}>
                            Hitung Luas Limas
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.hasil}>
                        Luas Limas adalah {luas} cm²
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

export default Limas;

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
        width: 130,
    },
    text: {
        fontWeight: '500',
        textAlignVertical: "center",
        margin: 10,
        padding: 10,
        textAlign: "center",
        borderRadius: 13,
        color: "#3D3B40",
        fontSize: 25,
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
