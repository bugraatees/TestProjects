import {SafeAreaView, StyleSheet, Text, View, KeyboardAvoidingView,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Register = () => {

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style = {{flex:0.8, backgroundColor:'#f27700', borderBottomLeftRadius:100, justifyContent:'center', alignItems:'center'}}>
      <Text style = {{fontSize:30}}>LOGO</Text>
    </View>

    <View style = {{margin:10,  marginTop:50, width:'80%', marginLeft:40, }}>
      <TextInput style = {{borderWidth:1, borderRadius:20, paddingHorizontal:15,borderColor:'gray' }} placeholder='Kullanıcı Adı Giriniz'></TextInput>
    </View>

    <View style = {{margin:10, marginTop:10, width:'80%', marginLeft:40}}>
      <TextInput style = {{borderWidth:1, borderRadius:20, paddingHorizontal:15, borderColor:'gray'}} placeholder='Email Giriniz'></TextInput>
    </View>

    <View style = {{margin:10, marginTop:10, width:'80%', marginLeft:40}}>
      <TextInput style = {{borderWidth:1, borderRadius:20, paddingHorizontal:15, borderColor:'gray'}} secureTextEntry={true} placeholder='Şifre Giriniz'></TextInput>
    </View>

    <View style = {{margin:10, marginTop:10, width:'80%', marginLeft:40}}>
      <TextInput style = {{borderWidth:1, borderRadius:20, paddingHorizontal:15, borderColor:'gray'}} secureTextEntry={true} placeholder='Tekrar Şifre Giriniz'></TextInput>
    </View>

    <View style = {{margin:10, marginTop:10, width:'80%', marginLeft:40, flexDirection:'row'}}>
      <Text style = {{fontSize:17}}>Kullanım Amacı : </Text>
      <Text style = {{fontSize:15, marginLeft:10}}>Firma</Text>
      <Text style = {{fontSize:17, marginLeft:50, }}>Kişi</Text>
    </View>
  
    <TouchableOpacity style = {{alignItems:'center', borderWidth:1, width:'80%' , height:45,borderRadius:20 ,marginLeft:40, marginTop:20, backgroundColor:'#f27700'}}>
      <Text style = {{marginTop:10, fontSize:15, color:'white'}}>KAYIT OL</Text>
    </TouchableOpacity>
    

</KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
})