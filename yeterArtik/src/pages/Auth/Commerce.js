import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native'
import React from 'react'

const DATA = [
  {
    "id": "0",
    "title": "Winner Coat",
    "image": "https://images.squarespace-cdn.com/content/v1/54a04011e4b0d1a214af85a9/1604443958878-2IJZTR50O4J7A7LRYO8N/Screen+Shot+2020-11-03+at+2.52.30+PM.png",
    "price": 250
  },
  {
    "id": "1",
    "title": "Jasons Jacket",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJpuxUx1rZl8ekDz7SUap9UWXeYydecNYqQ&usqp=CAU",
    "price": 500
  },
  {
    "id": "2",
    "title": "Arclyic Sweat",
    "image": "https://cdn.shopify.com/s/files/1/0272/8270/2424/products/SWT00003060_1.jpg?v=1646474533",
    "price": 780,
  },
  {
    "id": "3",
    "title": "Bluz",
    "image": "https://cdn.dsmcdn.com/mnresize/500/-/ty65/product/media/images/20210205/15/60223190/136706836/1/1_org.jpg",
    "price": 1000
  },

]

const Commerce = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#dcc7c7' }}>
      <View style={{ margin: 10, alignSelf: 'flex-end' }}>
        <Image style={styles.image} source={require('../../Base/images/ben.jpg')} />
      </View>

      <View style={{ alignItems: 'center', margin: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: '800' }}>Tarzınıza Uygun Olanı Seçiniz</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TextInput style={{ borderWidth: 1, width: '80%', height: 45, borderColor: 'white', borderRadius: 20, paddingHorizontal: 10 }} placeholder='Ara..' />
      </View>

      <View style={{ margin: 5 }}>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({ item }) =>
            <View style={{ margin: 10 }}>
              <Image style={styles.resimler} source={{ uri: item.image }} />

              <View style={{ alignSelf: 'center', marginTop:5}}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
              </View>

              <View style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '800' }}>{item.price}TL</Text>
              </View>

            </View>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default Commerce

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 90,
    borderRadius: 60,
  },
  resimler: {
    width: 180,
    height: 300,
    borderRadius: 40
  },
})