import React, { useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';

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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#003f5c',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.id}</Text>
  </TouchableOpacity>
);

export default function DisplayDeliveries({ navigation, route }) {
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Delivery Details', {delivery: item})}
        backgroundColor='#003f5c'
        textColor="#FFFFFF"
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