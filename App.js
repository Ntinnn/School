import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login.js';

//  Membuat tumpukan navigasi (stack navigator) dengan menggunakan library React Navigation
const Stack = createStackNavigator();

const App = () => {
    return (
        // Mengelola navigasi dalam aplikasi menggunakan React Navigation.
        <NavigationContainer>
            {/* Inisialisasi tumpukan navigator dengan rute awal yang ditentukan sebagai "Home"  */}
            <Stack.Navigator initialRouteName='Login'>
                {/* 
                Setiap "Stack.Screen" merepresentasikan satu rute (layar) dalam tumpukan navigator. Anda dapat menambahkan lebih banyak Stack.Screen sesuai dengan kebutuhan aplikasi.
                */}
                {/* Contoh */}
                {/* <Stack. Screen name="NamaRute" component (NamaRuteComponent) /> */}
                {/* Layar "Home" akan menggunakan komponen HomeScreen untuk tampilannya.  */}
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                {/* Layar "Profiles" akan menggunakan komponen ProfilesScreen untuk tampilannya. */}
                {/* <Stack.Screen name="Profiles" component={ProfilesScreen} /> */}
                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;