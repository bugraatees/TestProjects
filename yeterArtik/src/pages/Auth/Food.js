import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Food = () => {

  const DATA = [
    {
      "id": "0",
      "title": "Sushi",
      "image": "https://i.nefisyemektarifleri.com/2018/01/23/cindeki-yemekler-ve-cin-yemek-tarifleri-uzerine.jpg",
    },
    {
      "id": "1",
      "title": "Jasons Jacket",
      "image": "https://www.nizampide.com/wp-content/uploads/2018/07/adana-kebab%C4%B1-porsiyon-nizam-pide-s%C3%BCtla%C3%A7-istanbul-beyo%C4%9Flu-istiklal-caddesi-600x600.jpg",
    },
    {
      "id": "2",
      "title": "Arclyic Sweat",
      "image": "https://cdn.yemek.com/mncrop/620/412/uploads/2018/01/20180104064644774222.jpeg",
    },
    {
      "id": "3",
      "title": "Bluz",
      "image": "https://i20.haber7.net/resize/1300x788//haber/haber7/photos/2021/45/korenin_meshur_tursusu_kimci_nasil_yapilir_kimchi_yapmanin_puf_noktalari_1636448100_5929.jpg",
    },

  ]

  const eats = [
    {
      "id": "0",
      "title": "Sushi",
      "image": "https://iasbh.tmgrup.com.tr/01382c/650/344/0/35/1365/751?u=https://isbh.tmgrup.com.tr/sbh/2020/02/20/lezzetli-bir-aksam-yemegi-icin-pratik-yemek-tarifleri-1582185048536.jpg",
    },
    {
      "id": "1",
      "title": "Jasons Jacket",
      "image": "https://imgrosetta.mynet.com.tr/file/13340521/13340521-728xauto.png",
    },
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignSelf: 'center', margin: 50 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fe6a2e' }}>Food Menu</Text>
        <View style={{ borderWidth: 0.4, width: 150, alignItems: 'center', borderColor: '#fe6a2e' }}></View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 15 }}>En iyi yemeğini seç.. İyi Günler.</Text>
        </View>
      </View>

      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) =>
            <View>
              <Image style={styles.resimler} source={{ uri: item.image }} />
            </View>
          }
        />
      </View>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#12170c' }}>Daha Fazlası</Text>
        <View>
          <FlatList
            horizontal={true}
            data={eats}
            renderItem={({ item }) =>
              <View>
                <Image style={styles.resimler2} source={{ uri: item.image }} />
              </View>
            }
          />
        </View>
      </View>


      <TouchableOpacity style={{ borderWidth: 1, alignItems: 'center', width: '60%', height: '7%', marginLeft: 80, backgroundColor: '#fe6a2e', borderRadius: 10 }}>
        <Text style={{ fontSize: 17, margin: 10, color: 'white', fontWeight: 'bold' }}>Şimdi Sipariş Ver</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Food

const styles = StyleSheet.create({
  resimler: {
    margin: 10,
    width: 150,
    height: 160,
    borderRadius: 30,
  },
  resimler2: {
    margin: 10,
    width: 175,
    height: 160,
    borderRadius: 30,
  },
})