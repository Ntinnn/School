import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import imagebg from './assets/hexagon.jpg';

SplashScreen.preventAutoHideAsync();

export default function Intro({ navigation }) {
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
      <Image source={require('./assets/3.png')} style={{ width: 194, height:113}}/>
        <Text style={{color: "#3D3B40", fontSize: 93, bottom: 10, fontFamily: "Gistesy"}}>
          Welcome
        </Text>
        <View style={styles.container2}>
          <Text style={{fontFamily: "sans-serif", fontSize: 30, textAlign:'center', top:5, padding: 15}}>
            T e a m  D e v 
          </Text>
         <View>
          
          <View style={{flexDirection:'row'}}>
          <Image source={require('./assets/ntin.jpg')} style={{width:100, height:100, borderRadius:300, borderColor:'black', borderWidth: 3, margin:5}} />
          <Text style={{fontFamily: "montserrat", fontSize:20, top:40, margin:5}}>
           Martin Chan
          </Text>
          </View>

          <View style={{flexDirection:'row', left:20}}>
          <Text style={{fontFamily: "montserrat", fontSize:20, top:40, margin:5}}>
            Josua Emanuel Arseto
          </Text>
          <Image source={require('./assets/josua.jpg')} style={{width:100, height:100, borderRadius:300, borderColor:'black', borderWidth: 3,  margin:5}} />
          </View>

          <View style={{flexDirection:'row'}}>
          <Image source={require('./assets/jeje.jpg')} style={{width:100, height:100, borderRadius:300, borderColor:'black', borderWidth: 3, margin:5}}/>
          <Text style={{fontFamily: "montserrat", fontSize:20, top:40, margin:5}}>
            Jessica M.O Manurung 
          </Text>
          </View>

          <View style={{backgroundColor:'#EEEEEE', width:70, height:40,  borderRadius:20, alignSelf:'flex-end', borderColor:'black', borderWidth:2, top:40}}>
            <Text style={{fontSize:25,textAlign:'center', justifyContent:'flex-end'}}>
            Skip
            </Text>
          </View>
          </View> 
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
    alignItems:'center',
    backgroundColor: '#FBFBFB',
    width: 340,
    height: 500,
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