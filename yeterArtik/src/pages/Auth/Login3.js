import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'


const Login3 = () => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>HOŞGELDİNİZ</Text>
      </View>

      <View style={{ alignItems: 'center' , marginTop:10}}>
        <View style={{ borderWidth: 1, alignItems: 'flex-end', backgroundColor: '#24c449', width: '80%', height: 500, borderBottomStartRadius: 30, borderBottomEndRadius: 90, borderTopLeftRadius: 90, borderTopRightRadius: 46 }}>
          <Image style={styles.image} source={require('../../Base/images/ben.jpg')} />

          <View style={{ alignSelf: 'flex-start', margin: 10, marginLeft: 30 }}>
            <Text style={{ textAlign: 'left', fontSize: 25, fontWeight: 'bold', color: 'white' }}>Giriş Yap</Text>
          </View>

          <View style={{ margin: 10, width: '80%', alignSelf: 'center' }}>
            <TextInput style={{ borderWidth: 1, borderRadius: 5, paddingHorizontal: 15, borderColor: 'white'}} placeholderTextColor='white' placeholder='Kullanıcı Adı Giriniz'></TextInput>
          </View>

          <View style={{ margin: 10, width: '80%', alignSelf: 'center' }}>
            <TextInput style={{ borderWidth: 1, borderRadius: 5, paddingHorizontal: 15, borderColor: 'white' }} placeholderTextColor='white'  placeholder='Şifre Giriniz'></TextInput>
          </View>

          <View style={{ marginEnd: 32 }}>
            <Text style={{ fontSize: 15, color: 'white' }}>Şifremi Unuttum</Text>
          </View>

          <TouchableOpacity style={{ alignSelf: 'center', borderWidth: 1, width: '80%', height: 45, borderRadius: 20, marginTop: 20, backgroundColor: 'white' }}>
            <Text style={{ marginTop: 10, fontSize: 15, color: 'black', fontWeight: '500', textAlign: 'center' }}>GİRİŞ YAP</Text>
          </TouchableOpacity>

        </View>

        <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={{ fontSize: 15 }}>Hesabın yok mu ? </Text>
          <TouchableOpacity>
            <Text style={{ color: '#24c449', fontWeight: 'bold', fontSize: 16 }}>Kaydol</Text>
          </TouchableOpacity>
        </View>

      </View>

    </KeyboardAvoidingView>
  )
}

export default Login3

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  image: {
    width: 120,
    height: 90,
    borderRadius: 60
  },
})