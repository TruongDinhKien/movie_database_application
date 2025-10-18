import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { TabNavigator } from "./TabNavigator"
import Header from "./Header"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{
            headerShown: true,
            headerTitle: '',
            header: Header,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation




