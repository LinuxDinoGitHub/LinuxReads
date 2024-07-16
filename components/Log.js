import {React, useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';

const Log = props => {
  const initialdata = props.data[0]
  const latestdata = props.data[1]
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Entry: {latestdata.index}</Text>
      <Text style={styles.text}>Progress: {latestdata.curr} out of {initialdata.max}</Text>
      <Text style={styles.text}>Minutes read: {latestdata.time} minutes</Text>
      <Text style={styles.text}>Entry comments: {latestdata.thoughts}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container:{
    minHeight: 150,
    width: '100%',
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  text: {
    color: 'white',
  }
});

export default Log;
