import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import imagebg from './assets/hexagon.jpg';

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Gistesy': require('./assets/Gistesy.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={imagebg} style={styles.image}>
        <Image source={require('./assets/3.png')} style={{ width: 194, height:113 }}/>
        <Text style={{color: "#3D3B40", fontSize: 93, bottom: 25, fontFamily: "Gistesy"}}>
        Geometría
        </Text>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
          <Text style={styles.text}>
            Bangun Datar
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
          <Text style={styles.text}>
           Bangun Ruang
          </Text>
         </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    backgroundColor: '#3D3B40',
    width: 295,
    height: 415,
    bottom: 8,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity:  0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    height: null,
    width: null
  },
  text : {
    top: 100,
    width: 200,
    height:40,
    backgroundColor: "#F7F7F7",
    fontSize: 12,
    fontWeight: '500',
    textAlignVertical: "center",
    margin: 10,
    padding: 3.8,
    textAlign: "center",
    borderRadius: 13,
    color: "#3D3B40",
    fontSize: 21.2,
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 7,
    },
    shadowOpacity:  0.21,
    shadowRadius: 7.68,
    elevation: 10
    }
});