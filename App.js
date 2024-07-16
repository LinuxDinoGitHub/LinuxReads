import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from "./components/Button";
import InputMenu from "./components/InputMenu";
import Book from './components/Book';
import BookCreation from './components/BookCreation';

let bookCreationStatus = false;

export default function App() {
  const [books, setBooks] = useState(
    {"Example": [{ max: 369, curr: 10, thoughts: "Blah", time: 120, index: 0, author: 'LinuxDino'}]},
  );
  const [visible, setvisible] = useState(false);
  const [BookCreationStatus, setBookCreationStatus] = useState(false);
  const toggleBookCreation = () => {
      setBookCreationStatus(!BookCreationStatus);
      bookCreationStatus = !BookCreationStatus;
      console.log(BookCreationStatus);
  };
  const openBookInput = () => {
    setvisible(!visible);
    console.log(visible);
  };
  const retrieveData = data => {
    setBooks({...books, ...data});
    console.log(data);
  };
  const retrieveNewBook = newBook => {
    setBooks({...newBook, ...books});
  }
  const sendData = () => {
    return books;
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Linux Reads</Text>
      </View>
      <View style={styles.books}>
      {Object.entries(books).length > 0 ? (
        Object.entries(books).map(([title, book], index) => (
          <Book
            key={title}
            title={title}
            maxPage={book[0].max}
            currPage={book[book.length-1].curr}
          />
        ))
      ) : (
        <Text>No books to display.</Text>
      )}
      </View>
      <View style={styles.bookCre}>
        <BookCreation 
              stylep={BookCreationStatus ? styles.show: styles.hide}
              event={toggleBookCreation}
              data = {sendData}
              retrieve = {retrieveNewBook}
        />
      </View>
      <View style={styles.inputMenu}>
        <InputMenu 
        bookcreation={toggleBookCreation}
        event={openBookInput} 
        event2={retrieveData}
        stylep={visible ? styles.show: styles.hide}
        data = {sendData}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onClick={openBookInput} content="+"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#393D3F',
  },
  title: {
    fontSize: 24,
    fontFamily: 'monospace',
    color: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    zIndex: 999,
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
    zIndex: -99,
  },
  textContainer: {
    position: 'relative',
    left: 40,
    paddingTop: 50,
    marginBottom: 40,
  },
  inputMenu:{
    zIndex: 99,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bookCre:{
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: bookCreationStatus ? 98 : 100,
  }
});
