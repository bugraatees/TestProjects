import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const Social1 = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ borderWidth: 1, width: '100%', height: '40%', borderRadius: 20, borderColor: 'white' }}>
        <Image style={{ width: '100%', height: '100%', borderRadius: 10 }} source={require('../../Base/images/atatürk.jpg')} />

        <View style={{ borderWidth: 0.5, width: '100%', height: '115%' }}>
          <View style={{ borderWidth: 2, borderRadius: 45, width: 93, borderColor: '#1a64b6', alignSelf: 'center' }}>



            <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 90, height: 90, borderRadius: 50, resizeMode: 'center', }} source={require('../../Base/images/ben.jpg')} />
              <Text style={{ fontSize: 18, margin: 10, fontWeight: '600', color:'black' }}>142 Takipçi</Text>
            </View>

          </View>



        </View>


      </View>
    </SafeAreaView>
  )
}

export default Social1

const styles = StyleSheet.create({})