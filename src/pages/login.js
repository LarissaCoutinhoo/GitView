import React, {useState} from 'react'; //observa o estado da aplicação
//ciclo de vida da aplicação: useEffect
import {StyleSheet, Text, TextInput, TouchableOpacity, Alert, View} from 'react-native'; 
//para estilizações //para mostrar textos //para inputs //para botões //alertas/avisos //Views são como "divs"
import { useNavigation } from '@react-navigation/native';
// para navegações a partir de stacks/pilhas 

const Login = () => {
    const [email, setEmail] = useState(""); //crio duas constantes, set->setar, useState-> estado atual/inicial vazio
    const [password, setPassword] = useState("");
    const navigation = useNavigation(); //crio a constante navigation (navigation é um nome), para poder usar o useNavigation

return(
   <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="E-mail:"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput/>
        <TextInput
            style={styles.input}
            placeholder="Senha:"
            value={password}
            onChangeText={setPassword}
        />
        <TextInput/>
   </View> 
)
} 

const styles = StyleSheet.create({
container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF"
},
input: {
    borderWidth:1,
    borderColor: " #ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%"
}
});

export default Login;