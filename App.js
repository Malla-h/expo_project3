import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "@expo/metro-runtime";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaLista from "./TelaLista";
import TelaAdicionar from "./TelaAdicionar";

// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="TelaLista" component={TelaLista} />
        <MyStack.Screen name="TelaAdicionar" component={TelaAdicionar} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;