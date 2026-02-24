import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login";
//import Main from "./pages/main";
//import User from "./pages/login";

const Stack = createStackNavigator()

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}