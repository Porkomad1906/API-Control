
import { NavigationContainer } from '@react-navigation/native'
import { Main } from './components/Main'
import { Detalles } from './components/Detalles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Principal } from './components/Principal'
import { Acerca } from './components/Acerca'

const pila=createNativeStackNavigator()
export const App = () => {
  return (
   <NavigationContainer>
     <pila.Navigator>
       <pila.Screen name='home' options={{title:'Inicio'}} component={Main}/>
       <pila.Screen name='Principal' options={{title:'Personajes'}} component={Principal}/>
       <pila.Screen name='Detalles' options={{title:'Información'}} component={Detalles}/>
       <pila.Screen name='Acerca' options={{title:'Historia'}} component={Acerca}/>
     </pila.Navigator>
   </NavigationContainer>
  )
}

export default App
