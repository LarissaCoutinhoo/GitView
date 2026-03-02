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

                <Stack.Screen
  name="login"
  component={Login}
  options={{
    title: "LOGIN",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "purple"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }}
/>

            {/* <Stack.Screen name="main" component={Main}>
                options  = {{
                    title: "GitHub VIEWER",
                    headerTitleAlign: "center",
                    headerStyle:{
                        fontWeight: "bold",
                        color: "purple"
                    }
                }}                    
                </Stack.Screen>

                <Stack.Screen name="user" component={User}>
                options  = {{
                    title: "USER",
                    headerTitleAlign: "center",
                    headerStyle:{
                        fontWeight: "bold",
                        color: "purple"
                    }
                }}                    
                </Stack.Screen> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}