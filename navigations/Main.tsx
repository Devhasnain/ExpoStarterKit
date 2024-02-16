import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import HomeNavigations from "./HomeNavigations";
import SignUp from "../screens/auth/SignUp";
import configurations from "../configurations";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeNavigations}
          options={configurations.StackScreenOptions}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={configurations.StackScreenOptions}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={configurations.StackScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
