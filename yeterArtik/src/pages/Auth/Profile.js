import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'

const Profile = () => {
  const data =
    [
      {
        "id": "0",
        "images": "file:///C:/Users/bugra/Yazilim/yeterArtik/src/Base/images/resim1.jpg",
      },
      {
        "id": "1",
        "images": "file:///C:/Users/bugra/Yazilim/yeterArtik/src/Base/images/resim2.jpeg",
      },
      {
        "images": "file:///C:/Users/bugra/Yazilim/yeterArtik/src/Base/images/resim3.jpg",
      },
      {

        "images": "file:///C:/Users/bugra/Yazilim/yeterArtik/src/Base/images/resim4.jpeg",
      },
    ];
    
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ borderWidth: 1, height: '45%', borderRadius: 10, borderColor: 'white' }}>
        <Image style={{ height: '100%' }} source={require('../../Base/images/atatürk.jpg')} />

        <View style={{ borderWidth: 1, height: '150%', position: 'absolute', backgroundColor: '#e2efed', opacity: 1, marginTop: 230, width: '100%', borderRadius: 60, borderColor: 'white' }}>
          <View style={{ alignSelf: 'center', borderWidth: 2, borderRadius: 30, borderColor: 'white', marginTop: -40 }}>
            <Image style={{ width: 90, height: 80, borderRadius: 30 }} source={require('../../Base/images/ben.jpg')} />
          </View>

          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 60, marginTop: -30 }}>100 Takip</Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', marginRight: 50, marginTop: -30 }}>250 Takipçi</Text>
          </View>

          <View style={{ alignSelf: 'center', margin: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>@bugraatees</Text>
          </View>

          <View style={{ flexDirection: 'row', margin: 20, alignSelf: 'center' }}>
            <TouchableOpacity style={{ borderWidth: 1, width: '30%', height: 35, borderRadius: 10, alignItems: 'center', backgroundColor: '#2095d8', borderColor: 'white' }}>
              <Text style={{ fontSize: 15, margin: 5, fontWeight: 'bold', color: 'white' }}>Takip Et</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, width: '30%', height: 35, borderRadius: 10, alignItems: 'center', backgroundColor: 'white', borderColor: 'white', marginLeft: 10 }}>
              <Text style={{ margin: 5, fontSize: 15, fontWeight: 'bold' }}>Mesaj At</Text>
            </TouchableOpacity>
          </View>

          {/* <ScrollView style = {{margin:5}} horizontal={true}>
            <Image style = {{borderRadius:30,width:150, height:250}} source={require('../../Base/images/resim1.jpg')} />
            <Image style = {{width:150, height:250}} source={require('../../Base/images/resim2.jpeg')} />
            <Image style = {{width:150, height:250}} source={require('../../Base/images/resim3.jpg')} />
            <Image style = {{width:150, height:250}} source={require('../../Base/images/resim4.jpeg')} />
          </ScrollView> */}



          <FlatList
            data={data}
            renderItem={({ item }) =>
              <View>
                <Image style={{ width: 80, height: 80 }} source={{ uri: item.images }} />
              </View>}
          />

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})