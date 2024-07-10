import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/Styles'

export const Acerca = ({navigation}:any) => {
  return (
    <View style={styles.containerH}>
    <Image source={require('./logo.png')} style={styles.logo}></Image>
    <Image source={require('./banner3.jpg')} style={styles.banner}></Image>
    <Text style={styles.Titulo}>Historia del Programa</Text>
    <Text style={styles.history}>
    La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos.
    </Text>
   </View>
  )
}
