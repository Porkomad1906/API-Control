import React from "react"
import { StyleSheet, Dimensions } from "react-native"

const styles=StyleSheet.create({
    whiteText:{
      fontSize:16,
      color:'white',
      fontWeight:'bold'
    },
    Text:{
      fontSize:16,
      color:'darkcyan',
      fontWeight:'bold',
      marginTop:10
    },
    textInput:{
      paddingLeft:15,
      borderColor:'darkcyan',
      borderWidth:1,
      borderRadius:8,
      width:Dimensions.get('screen').width*0.6,
      justifyContent:'space-between'
    },
    inputContainer:{
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    },
    addButton:{
      padding:10,
      marginTop:10,
      marginRight:5,
      backgroundColor:'darkcyan',
      justifyContent:'center',
      alignItems:'center',
      width:Dimensions.get('screen').width*0.25,
      borderRadius:8,
    },
    scrollContainer:{
      width:'90%',
      height:400,
      marginTop:25,
    },
    logo:{
      width:'100%',
      height:100,
      margin:10,
    },
    banner:{
      width:'100%',
      height:500,
      marginTop:20
    },
    ImagenCards:{
      width:'100%',
      height:250,
      marginTop:20,
      justifyContent:'center',
      alignItems:'center'
    },
    mainContainer:{
      marginVertical:20,
      width:'100%',
      height:500,
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'center'
    },
    container: {
      flex: 1,
      width:'100%',
      height:1000,
      justifyContent: 'center',
      alignItems:'center',
      padding: 20,
    },
    containerH: {
      flex:1,
      width:'100%',
      height:'100%',
      justifyContent: 'center',
      alignItems:'center',
      padding: 20,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    },
    species: {
      fontSize: 16,
      marginBottom: 10,
    },
    origin: {
      fontSize: 14,
      marginBottom: 10,
    },
    viewB:{
      width:'80%',
      flexDirection:'row',
      justifyContent:'center',
    },
    Titulo:{
      fontSize:25,
      color:'darkcyan',
      fontWeight:'bold',
      textAlign:'center'
    },
    history:{
      fontSize:16,
      color:'black',
      fontWeight:'bold',
      textAlign:'center',
      marginBottom:5,
    },
    })

    export default styles;