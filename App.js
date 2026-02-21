import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home.js';
import Splash from './Splash.js';
import Intro from './Intro.js';
import Persegi from './Persegi.js';
import PersegiPanjang from './PersegiPanjang.js';
import Segitiga from './Segitiga.js';
import Lingkaran from './Lingkaran.js';
import JajarGenjang from './JajarGenjang.js';
import Trapesium from './Trapesium.js';
import Kubus from './Kubus.js';
import Balok from './Balok.js';
import Prisma from './Prisma.js';
import Tabung from './Tabung.js';
import Limas from './Limas.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Limas'>
                <Stack.Screen name="Kubus" component={Kubus} options={{ headerShown: false }} />
                <Stack.Screen name="Balok" component={Balok} options={{headerShown: false}}/>
                <Stack.Screen name="Prisma" component={Prisma} options={{headerShown: false}}/>
                <Stack.Screen name="Tabung" component={Tabung} options={{headerShown: false}}/>
                <Stack.Screen name="Limas" component={Limas} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}