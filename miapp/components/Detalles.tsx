import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import styles from '../styles/Styles';


export const Detalles = ({ navigation, route }:any) => {
  const character = route.params.character;
  return (
    <View style={styles.container}>
      <Image source={require('./logo.png')} style={styles.logo}></Image>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.species}>{character.type}</Text>
      <Text style={styles.species}>{character.species}</Text>
      <Text style={styles.species}>{character.gender}</Text>
      <Text style={styles.origin}>Origen: {character.origin.name}</Text>
      <Text style={styles.origin}>Locación: {character.location.name}</Text>
      <Button title="Atras" onPress={() => navigation.goBack()} />
    </View>
  )
}
