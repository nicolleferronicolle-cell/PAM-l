import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 import Login from './screens/login/Login';
 import Home from './screens/home/Home';
 import Cadastro from './screens/cadastro/Cadastro';
import Perfil from './screens/perfil/Perfil';
//  import Editar from './screens/editar/Editar';



 const Stack = createNativeStackNavigator();


export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
            headerShown: false,
            }}
            >

                <Stack.Screen
                name="Login"
                component={Login}
                 options={{
                 headerShown: false,
                 }}
                />

                <Stack.Screen
                name="Home"
                component={Home}
                />

                <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                />

                <Stack.Screen
                name="Perfil"
                component={Perfil}
                />
{/* 
                <Stack.Screen
                name="Editar"
                component={Editar}
                />

             */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}