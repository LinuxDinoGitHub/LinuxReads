import {React, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from "./components/Button";
import InputMenu from "./components/InputMenu";
import Book from './components/Book';
import { withDecay } from 'react-native-reanimated';



export default function App() {
  const [books, setBooks] = useState([]);
  const [visible, setvisible] = useState(false);
  const openBookInput = () => {
    setvisible(!visible);
    console.log(visible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Linux Reads</Text>
      </View>
      <View style={styles.books}>
        <Book maxPage={100} currPage={15}/>
      </View>
      <InputMenu 
      event={openBookInput} 
      stylep={visible ? styles.show: styles.hide}
      style={styles.inputMenu}
      />
      <View style={styles.buttonContainer}>
        <Button onClick={openBookInput} content="+"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
  show: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  books: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingTop: 0,
  },
  textContainer: {
    position: 'relative',
    left: 40,
    paddingTop: 50,
    marginBottom: 40,
  },
  inputMenu:{
    position: 'absolute',
  }
});
