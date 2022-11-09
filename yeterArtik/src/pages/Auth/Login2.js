import {SafeAreaView, StyleSheet, Text, View,Image, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import React from 'react'


const Login2 = () => {
  return (
    
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style = {{flex:0.8, backgroundColor:'#f27700', borderBottomLeftRadius:100, justifyContent:'center', alignItems:'center'}}>
      <Text style = {{fontSize:30}}>LOGO</Text>
    </View>

    <View style = {{margin:10,  marginTop:50, width:'80%', marginLeft:40, }}>
      <TextInput style = {{borderWidth:1, borderRadius:20, paddingHorizontal:15,borderColor:'gray' }} placeholder='Email Giriniz'></TextInput>
    </View>

    <View style = {{margin:10, marginTop:10, width:'80%', marginLeft:40}}>
      <TextInput style = {{borderWidth:1, borderRadius:20, paddingHorizontal:15, borderColor:'gray'}} secureTextEntry={true} placeholder='Şifre Giriniz'></TextInput>
    </View>

   <TouchableOpacity style = {{alignItems:'flex-end', marginEnd:50, margin:10}}>
    <Text style = {{fontSize:15}}>Şifremi Unuttum</Text>
   </TouchableOpacity>

    <TouchableOpacity style = {{alignItems:'center', borderWidth:1, width:'80%' , height:45,borderRadius:20 ,marginLeft:40, marginTop:20, backgroundColor:'#f27700'}}>
      <Text style = {{marginTop:10, fontSize:15, color:'white'}}>GİRİŞ YAP</Text>
    </TouchableOpacity>

    <View style = {{marginTop:40, flexDirection:'row', marginLeft:100}}>
      <Text style = {{fontSize:15}}>Hesabın yok mu ? </Text>
      <TouchableOpacity>
        <Text style = {{ color:'#f27700' , fontWeight:'bold', fontSize:17}}>Kaydol</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default Login2

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
})