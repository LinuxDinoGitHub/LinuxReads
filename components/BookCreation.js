import {React, useState , useEffect} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";
import InputField from "./InputField";
//MUST ADD ONCHANGETEXT PROP
const BookCreation = props => {
    const [bookTitle, setBookTitle] = useState();
    const [newBook, setnewBook] = useState('');
    const [author, setauthor] = useState('');
    const [maxPage, setMaxPage] = useState(0);
    const [errorMessage, seterrorMessage] = useState('');
    useEffect(() => {
        const data = props.data()
        if (props.data) {
          setBookTitle(Object.keys(data));
        }
      }, [props.data]);
    console.log(bookTitle)
    const sendData = () => {
        if(newBook == '' || author == '' || maxPage == 0){
            seterrorMessage('Please enter the required fields');
        }
        else if(bookTitle.includes(newBook)){ //"Security checks"
            seterrorMessage('Book already exists');
        }
        else{
            props.retrieve({[newBook]: [{max: maxPage, curr: 0, thoughts: "Book created", time: 0, index: 0, author: author}]})
            props.event(); //Hides
        }
    }
    return (
        <View style={[styles.container, props.stylep]}>
        <TouchableOpacity style={styles.close} onPress={props.event}>
            <Text style={styles.x}>+</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Create New Book Diary</Text>
            <InputField 
            title="New book name" 
            placeholder="Enter title of your book" 
            multiline={true} height={50} 
            style={styles.input}
            onChangeText={setnewBook}
            />
            <InputField 
            title="Author" 
            placeholder="Enter author of book" 
            multiline={true} 
            height={50} 
            style={styles.input}
            onChangeText={setauthor}
            />
            <InputField 
            title="Pages" 
            placeholder="Enter max page of your book" 
            multiline={true} 
            height={50} 
            style={styles.input}
            inputMode='numeric'
            onChangeText={setMaxPage}
            />
            <Text style={styles.error}>{errorMessage}</Text>
            <TouchableOpacity style={styles.submitButton} onPress={sendData}>
                <Text style={styles.submitButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        minHeight: 250,
        backgroundColor: '#E5E4E2',
        borderRadius: 10,
        width: '80%',
        padding: 20,
    },
    submitButton: {
        backgroundColor: '#62929E',
        padding: 5,
        borderRadius: 5,
        width: '40%',
        height: 40,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10,
        height: 35,
        width: 35,
        maxWidth: 'fit-content',
    },
    x: {
        fontSize: 35,
        transform: [
            { rotateZ: '45deg' }
        ],
    },
    error:{
        color: 'red',
        width: '70%',
    },
    title: {
        fontFamily: 'monospace',
    }
})

export default BookCreation;