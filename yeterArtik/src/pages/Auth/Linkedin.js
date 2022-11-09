import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Linkedin = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#091ab1' }}>
      <View style={{ borderWidth: 1, marginTop: 20, height: '100%', width: '100%', backgroundColor: 'white', borderRadius: 30 }}>

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 100 }}>
          <Text style={{ fontSize: 30, color: '#091ab1', fontWeight: 'bold' }}>Linked</Text>
          <View style={{ borderWidth: 1, backgroundColor: '#091ab1', width: 30, height: 33, marginLeft: 3 }}>
            <Text style={{ fontSize: 28, color: 'white', fontWeight: 'bold' }}>in</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 20 }}>
          <TouchableOpacity style = {{borderWidth:1, width:'40%', backgroundColor:'#091ab1', height:40, borderRadius:10}}>
            <Text style = {{color :'white', alignSelf:'center', marginTop:10, fontSize:15, fontWeight:'500'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {{borderWidth:1, width:'40%', backgroundColor:'#d7efed', height:40, borderRadius:10, marginLeft:5}}>
            <Text style = {{color :'#091ab1', alignSelf:'center', marginTop:10, fontSize:15, fontWeight:'500'}}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={{ margin: 20 }}>
          <TextInput placeholder='Email Adress' />
          <View style={{ borderWidth: 0.2, width: '100%', borderColor: '#091ab1' }}></View>
          <TextInput placeholder='Password' />
          <View style={{ borderWidth: 0.2, width: '100%', borderColor: '#091ab1' }}></View>
        </View>

        <View style = {{alignSelf:'center', margin:50, width:'80%'}}>
            
          <TouchableOpacity>
            <Text style = {{textAlign:'center', fontWeight:'bold', color:'#091ab1'}}>FORGOT PASSWORD</Text>
          </TouchableOpacity>
          
          
          <TouchableOpacity  style = {{borderWidth:1, width:'90%',height:'25%' ,backgroundColor:'#091ab1', borderRadius:10, alignSelf:'center',margin:15}}>
            <Text style = {{textAlign:'center', marginTop:8, fontSize:15, fontWeight:'400', color:'white'}}>CONTINUE</Text>
          </TouchableOpacity>
          

        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default Linkedin

const styles = StyleSheet.create({})