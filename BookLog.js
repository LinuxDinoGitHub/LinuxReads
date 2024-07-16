import {React, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function BookLog({route}) {
  const {data} = route.params;
  console.log(data)
  return (
    <Text></Text>
  );
};

const styles = StyleSheet.create({

});
