import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/Styles'

export const Main = ({navigation}:any) => {
    
  return (
   <View style={styles.container}>
    <Image source={require('./logo.png')} style={styles.logo}></Image>
    <View style={styles.mainContainer}>
    <Image source={require('./banner2.jpg')} style={styles.banner}></Image>
        <View style={styles.viewB}>
        <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('Principal')}>
        <Text style={styles.whiteText}>Personajes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('Acerca')}>
        <Text style={styles.whiteText}>Acerca De</Text>
        </TouchableOpacity>
        </View>
    </View>
   </View>
  )
}
