import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';

var DATA = [{
  "id": 1,
  "first_name": "Brina",
  "last_name": "Guilleton",
  "email": "bguilleton0@over-blog.com",
  "address": "94 4th Way",
  "state": "Gurgaon",
  "item": "Jeans"
}, {
  "id": 2,
  "first_name": "Duncan",
  "last_name": "Tildesley",
  "email": "dtildesley1@last.fm",
  "address": "533 Dunning Hill",
  "state": "Delhi",
  "item": "Shirt"
}, {
  "id": 3,
  "first_name": "Arabella",
  "last_name": "Baldi",
  "email": "abaldi2@friendfeed.com",
  "address": "24 Scofield Park",
  "state": "Delhi",
  "item": "Shoes"
}, {
  "id": 4,
  "first_name": "Adora",
  "last_name": "Mack",
  "email": "amack3@alexa.com",
  "address": "8 Arkansas Center",
  "state": "Noida",
  "item": "Pram"
}, {
  "id": 5,
  "first_name": "Ashlie",
  "last_name": "Adolphine",
  "email": "aadolphine4@amazonaws.com",
  "address": "7398 Corben Way",
  "state": "Delhi",
  "item": "Shirt"
}, {
  "id": 6,
  "first_name": "Elena",
  "last_name": "Tibalt",
  "email": "etibalt5@tinyurl.com",
  "address": "72099 Grasskamp Junction",
  "state": "Noida",
  "item": "Pram"
}, {
  "id": 7,
  "first_name": "Melosa",
  "last_name": "Swatman",
  "email": "mswatman6@tinyurl.com",
  "address": "180 Dahle Lane",
  "state": "Delhi",
  "item": "Pram"
}, {
  "id": 8,
  "first_name": "Faber",
  "last_name": "Fassmann",
  "email": "ffassmann7@wp.com",
  "address": "1650 Bay Junction",
  "state": "Delhi",
  "item": "Jeans"
}, {
  "id": 9,
  "first_name": "Hendrika",
  "last_name": "Girke",
  "email": "hgirke8@earthlink.net",
  "address": "523 Huxley Court",
  "state": "Delhi",
  "item": "Jeans"
}, {
  "id": 10,
  "first_name": "Sofie",
  "last_name": "Osmant",
  "email": "sosmant9@aboutads.info",
  "address": "335 Del Sol Park",
  "state": "Noida",
  "item": "Jeans"
}, {
  "id": 11,
  "first_name": "Arnie",
  "last_name": "Critch",
  "email": "acritcha@seattletimes.com",
  "address": "0 Stephen Trail",
  "state": "Kolkata",
  "item": "Shirt"
}, {
  "id": 12,
  "first_name": "Even",
  "last_name": "Casse",
  "email": "ecasseb@aol.com",
  "address": "53 Vidon Crossing",
  "state": "Kolkata",
  "item": "Pram"
}, {
  "id": 13,
  "first_name": "Ninon",
  "last_name": "Sessions",
  "email": "nsessionsc@house.gov",
  "address": "38072 Butterfield Center",
  "state": "Kolkata",
  "item": "Shoes"
}, {
  "id": 14,
  "first_name": "Sunny",
  "last_name": "Robelet",
  "email": "srobeletd@ibm.com",
  "address": "6989 Burning Wood Junction",
  "state": "Kolkata",
  "item": "Shoes"
}, {
  "id": 15,
  "first_name": "Gregoire",
  "last_name": "Eustice",
  "email": "geusticee@linkedin.com",
  "address": "5853 Artisan Park",
  "state": "Kolkata",
  "item": "Shoes"
}];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    padding: 0,
    marginVertical: 0,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
  separator: {
    marginBottom: 10,
    marginTop: 10,
    // marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.separator} />
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 0,
        backgroundColor: "#B9D4EC"
      }}
    >
      <Text style={[styles.title, textColor], {flex: 0.5}}>{item.first_name} {item.last_name}</Text>
      <Text style={[styles.title, textColor], {flex: 0.5}}>{item.address}</Text>
      <Text style={[styles.title, textColor], {flex: 0.5}}>{item.state}</Text>
    </View>
    <View style={styles.separator} />
    {/* <Text style={[styles.title, textColor]}>{item.address}</Text> */}
  </TouchableOpacity>
);

export default function DeliveriesToPick({ navigation, route }) {
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Delivery Details', {delivery: item})}
        backgroundColor='#B9D4EC'
        textColor="#003f5c"
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
};