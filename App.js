import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from "./components/Button";
import InputMenu from "./components/InputMenu";
import BookCreation from "./components/BookCreation";


export default function App() {
  const [books, setBooks] = useState([]);
  const [menuStatus, setMenuStatus] = useState('none');
  const openBookInput = () => {
    setMenuStatus('flex');
    console.log('opened menu');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Linux Reads</Text>
      <InputMenu event={openBookInput} style={[styles.inputMenu, { display: menuStatus }]}/>
      <View style={styles.buttonContainer}>
        <Button onClick={openBookInput} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
  inputMenu: {
    display: 'none',
  },
});
