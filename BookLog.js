import {React, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Log from './components/Log'


export default function BookLog({route}) {
  const {data} = route.params;
  const {title} = route.params;
  const display = data[title];
  console.log(data, title)
  return (
    <View style={styles.container}>
      <Text>{display[0].author}</Text>
      <View style={styles.log}>
        <Log />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    backgroundColor: "#393D3F",
  },
  log:{
    width: '90%',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  }
});
