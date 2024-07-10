import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../styles/Styles'
import { Personajes } from '../interfaces/Personajes';

export const Principal = ({navigation}:any) => {
  const [baseDatos, setBaseDatos] = useState<Personajes[]>([])
  const [buscar, setBuscar] = useState<Personajes[]>([])
  const [text, setText] = useState<string>('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setBaseDatos(data.results));
  }, []);

 const busqueda=()=>{
  if(text===''){
    Alert.alert('Ingresa un personaje')
    setText('')
    setBuscar([])
  }else{
    const busqueda=baseDatos.filter((personaje)=>{
      if(personaje.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())){
        return personaje
      }
    }
  )
  setBuscar(busqueda)
  }
 }

  return (
    <View style={styles.container}>
    <Image source={require('./logo.png')} style={styles.logo}></Image>
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Ingrese una busqueda' value={text} onChangeText={(t:string)=> setText(t)}/>
        <TouchableOpacity style={styles.addButton} onPress={busqueda}>
          <Text style={styles.whiteText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
      {buscar.length===0 ?(
          <FlatList  data={baseDatos} renderItem={({item}) =><View>
          <Image source={{ uri:item.image}} style={styles.ImagenCards}></Image>
          <Text style={styles.Text}>Nombre: {item.name}</Text>
          <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('Detalles',{ character: item })}>
          <Text style={styles.whiteText}>Ver Más</Text>
          </TouchableOpacity>
        </View> }/>
        ):(
          <FlatList  data={buscar} renderItem={({item}) =><View key={item.id}>
          <Image source={{ uri:item.image}} style={styles.ImagenCards}></Image>
          <Text style={styles.Text}>Nombre: {item.name}</Text>
          <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('Detalles',{ character: item })}>
          <Text style={styles.whiteText}>Ver Más</Text>
          </TouchableOpacity>
        </View> }/>
        )}
      </View>
   </View>
  )
}
