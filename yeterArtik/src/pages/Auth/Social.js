import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'

const Social = () => {
  const data = [
    {
      "id": 0,
      "name": "Buğra Ateş",
      "image": "https://cdnuploads.aa.com.tr/uploads/Contents/2022/08/09/thumbs_b_c_237e90e304b3acbecf8faad84f1580ac.jpg"
    },
    {
      "id": 1,
      "name": "Emre Özen",
      "image": "https://www.haberankara.com/images/upload/ofke-nobeti-geciren-kel-kartalin-goruntusu-15018884_8016_m.jpg"
    },
    {
      "id": 2,
      "name": "Anıl Bulsun",
      "image": "https://www.yabanihayvanlar.com/wp-content/uploads/2021/07/kanarya.jpg"
    },
    {
      "id": 3,
      "name": "Buğra Uslu",
      "image": "https://img-s3.onedio.com/id-606f52256c094a316de50328/rev-0/w-620/f-jpg/s-ba1c7ee78bf4df529d352d4580bfdc9a49a54a62.jpg"
    }
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ margin: 15, flexDirection: 'row' }}>
        <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', color: '#153c93' }}>facebook</Text>
        <TextInput style={{ borderWidth: 1, width: '60%', height: 40, marginLeft: 5, paddingHorizontal:10, borderRadius:5 }} placeholder='Ara' />
        <Image style={styles.image} source={require('../../Base/images/search.png')} />
      </View>

      <View>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item }) =>
            <View style={{ margin: 5 }}>
              <View style={{ borderWidth: 2, borderRadius: 22, borderColor: 'blue' }}>
                <Image style={styles.resimler} source={{ uri: item.image }} />
              </View>

              <View>
                <Text style={{ margin: 5, padding: 5, fontWeight: '500' }}>{item.name}</Text>
              </View>
            </View>}
        />

        <View style={{ margin: 10, borderWidth: 1, height: 120, borderColor: '#f8efd2', flexDirection: 'row', }}>
          <Image style={styles.images} source={require('../../Base/images/ben.jpg')} />
          <View style={{ height: 60, width: '100%' }}>
            <TextInput style={{ margin: 10, }} placeholder='Düşüncelerini Yaz..' />
            <View style={{ margin: 5, borderWidth: 0.5, borderColor: 'gray', width: '80%' }}>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <TouchableOpacity>
                <Text style={{ fontStyle: 'italic' }}>Live</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ fontStyle: 'italic' }}>Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ fontStyle: 'italic' }}>Check In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', margin: 5 }}>
          <Image style={styles.images} source={require('../../Base/images/scarlet.jpg')} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ margin: 10, fontSize: 15, fontWeight: 'bold' }}>Scarlett JOHANSSON</Text>
            <Text style={{ marginLeft: 15, fontSize: 12 }}>32min</Text>
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <Text>Bugün ise harika bir yer olan İstanbul arkeoloji müzesini gezdik...</Text>
        </View>
        <View>
          <Image style={styles.müze} source={require('../../Base/images/müze.jpg')} />
        </View>


      </View>
    </SafeAreaView>
  )
}

export default Social

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 40,
    backgroundColor: 'white'
  },
  resimler: {
    width: 100,
    height: 150,
    borderRadius: 20,

  },
  images: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 20
  },
})