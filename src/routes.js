import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login";
//import Main from "./pages/main";
//import User from "./pages/user";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login}/>
                {/* <Stack.Screen name="main" component={Main}/>
                <Stack.Screen name="user" component={User}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}