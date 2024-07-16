import {React, useState, useEffect , useRef} from 'react';
import { StyleSheet, Text, View, FlatList , Animated} from 'react-native';
import Button from "./components/Button";
import InputMenu from "./components/InputMenu";
import Book from './components/Book';
import BookCreation from './components/BookCreation';


export default function Home({route, navigation}) {
  const [books, setBooks] = useState(
    {"Example": [{ max: 369, curr: 10, thoughts: "Blah", time: 120, index: 0, author: 'LinuxDino'}]},
  );

  const [visible, setvisible] = useState(false);
  const [BookCreationStatus, setBookCreationStatus] = useState(false);
  const toggleBookCreation = () => {
      setBookCreationStatus(!BookCreationStatus);
      console.log(BookCreationStatus);
  };
  const openBookInput = () => {
    setvisible(!visible);
    toggleMenu();
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
  const animation = useRef(new Animated.Value(500)).current;

  const toggleMenu = () => {
    Animated.timing(animation, {
      toValue: visible ? 500 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }

  const getTitle = title => {
    navigateBook(title)
  }
  const navigateBook = title => {
    console.log(title)
    navigation.navigate('BookLog', 
        {data: books,
        title: title
        })
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Linux Reads</Text>
      </View>
      {Object.entries(books).length > 0 ? (
        <FlatList
        style={[styles.booksFlat, {zIndex: visible ? 97 : 100}]}
        data={Object.keys(books)}
        renderItem={({ item }) => (
          <Book
            title={item}
            maxPage={books[item][0].max}
            currPage={books[item][books[item].length - 1].curr}
            getTitle={getTitle}
          />
        )}
        keyExtractor={(item) => item}
      />
      ) : (
        <Text>No books to display.</Text>
      )}
      <View style={[styles.background, BookCreationStatus ? styles.show: styles.hide]}></View>
      <View style={[styles.bookCre, {zIndex: BookCreationStatus ? 101 : 98}]}>
        <BookCreation 
              stylep={BookCreationStatus ? styles.show: styles.hide}
              event={toggleBookCreation}
              data = {sendData}
              retrieve = {retrieveNewBook}
        />
      </View>
      <Animated.View
        style={[styles.inputMenu, {
          transform: [
            {
              translateY: animation
            }
          ]
        }]}
      >
        <InputMenu 
        bookcreation={toggleBookCreation}
        event={openBookInput} 
        event2={retrieveData}
        data = {sendData}
        />
      </Animated.View>
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
  background:{
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 100,
    backgroundColor: 'black',
    opacity: 0.4,
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
  booksFlat: {
    flexGrow: 1,
    flexDirection: 'column',
    width: '100%',
    paddingTop: 0,
    marginLeft: 20, 
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
  }
});
