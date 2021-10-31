import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Pressable } from 'react-native';

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

export default function DeliveryView({ navigation, route }) {
  console.log(route.params.delivery);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.separator} />
      <View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('DisplayDeliveries')}>
          <Text style={styles.text}>SEE ALL DELIVERIES</Text>
        </Pressable>
      </View>
      <View style={styles.separator} />
      <View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('DeliveriesToPick')}>
          <Text style={styles.text}>DELIVERIES TO PICK</Text>
        </Pressable>
      </View>
      <View style={styles.separator} />
    </SafeAreaView>
  )
};