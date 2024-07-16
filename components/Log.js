import {React, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Log = props => {
  return (
    <View style={styles.container}>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    height: 250,
    width: '100%',
    borderWidth: 1,
    borderBlockColor: "white",
    borderRadius: 10,
    padding: 20,
  }
});

export default Log;
