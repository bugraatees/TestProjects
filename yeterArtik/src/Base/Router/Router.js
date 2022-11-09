import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login2 from "../../pages/Auth/Login2";
import Register from "../../pages/Auth/Register";
import Login3 from "../../pages/Auth/Login3";
import Commerce from "../../pages/Auth/Commerce";
import Social from "../../pages/Auth/Social";
import Linkedin from "../../pages/Auth/Linkedin";
import Food from "../../pages/Auth/Food";
import Profile from "../../pages/Auth/Profile";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        <Stack.Screen name="Social" component={Social} options={{ headerShown: false }} />
        <Stack.Screen name="Commerce" component={Commerce} options={{ headerShown: false }} />
        <Stack.Screen name="Login2" component={Login2} options={{ headerShown: false }} />
        <Stack.Screen name="Login3" component={Login3} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />    
        <Stack.Screen name="Food" component={Food} options={{headerShown: false}} />          
        <Stack.Screen name ="Linkedin" component={Linkedin} options={{headerShown : false}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Router;