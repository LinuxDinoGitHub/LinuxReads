import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from "./components/Button"



export default function App() {
  const [books, setBooks] = useState([]);
  const openBookInput = () => {
    console.log("yes");
  };
  return (
    <View style={styles.container}>
      <Text>Linux Reads</Text>
      <Button onClick={openBookInput}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});
