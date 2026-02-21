// Jika ingin memasukan seperti image, dll pada bagian bawah perlu di masukkan juga
import { View, StyleSheet,} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

// Note bagian App.js jika nama filenya mau di rubah yg dari login menjadi X pada bagian App.js perlu di rubah juga bagian Loginnya menjadi X

// Layar Detail

SplashScreen.preventAutoHideAsync()

const Login = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Knewave': require('./asset/fonts/Knewave-Regular.ttf'),
    'KiwiMaruMedium': require('./asset/fonts/KiwiMaru-Medium.ttf'),
    'KiwiMaruMedium': require('./asset/fonts/KiwiMaru-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.container2}>
    
      </View>
      <View style={styles.container3}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },

  container2: {
    alignItems: 'center',
    flex: 2,
    paddingTop: 55,
    backgroundColor: 'blue',
  },

  container3: {
    backgroundColor: 'yellow',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Login;

// Note untuk melihat hasil, pergi ke terminal, jika meliat tanda plus / + di atas, klik dan pilih git bash jika sudah tulis 'expo start' setelah itu tunggu loading dan jika sudah selesai klik 'w' untuk 'website'  (Ingat loadingnya agak lama) dan untuk menyambungkan ke expo gonya pakailah qr code yang di sediakan git bashnya