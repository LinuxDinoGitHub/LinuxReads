import {React, useState, useEffect} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";
import InputField from "./InputField";

const InputMenu = (props) => {
    /* Book name (Selection) if new book -> BookCreation.js
    Current page (int input)
    Time spent reading
    Entry comments (text area)
    Submit button
    */
    
    const [errorMessage, seterrorMessage] = useState('');
    const [existingBooks, setExistingBooks] = useState({});
    const [bookTitle, setBookTitle] = useState('None')
    const [maxPage, setMaxPage] = useState(0);
    const [currPage, setcurrPage] = useState(0);
    const [review, setreview] = useState('');
    const [mtime, settime] = useState(0);
    useEffect(() => {
        if (props.data) {
          setExistingBooks(props.data);
        }
      }, [props.data]);

    const inputFailure = msg => {
        seterrorMessage(msg);
        console.log(msg);
    }
    const [bookInList, setbookInList] = useState(false);
    const existingBookTitle = Object.keys(existingBooks);  
    console.log(existingBookTitle)
    const sendData = () => {
        if (existingBookTitle.includes(bookTitle)){
            let book = existingBooks[bookTitle][0];
            setMaxPage(book.max);
            setbookInList(true);
            console.log('book in list')
        }
        if (bookTitle === 'None'){
            inputFailure('No book title entered')
        }
        else if(!bookInList){
            inputFailure(`"${bookTitle}" does not exist yet, please add through the \'+ Add new book\' button above`)
        }
        else if(currPage === 0){
            inputFailure('No current page entered')
        }
        else if(currPage > maxPage){
            inputFailure('The page you entered does not exist in this book (exceeds maximum)')
        }
        else{
            let nextIndex = parseInt(existingBooks[bookTitle][existingBooks[bookTitle].length-1].index)+1;
            let x = {[bookTitle]: 
                [
                    ...existingBooks[bookTitle],
                    {max: maxPage, curr: currPage, thoughts: review, time: mtime, index: nextIndex}
                ]};
            seterrorMessage(false);
            props.event2(x);
            props.event();
        }
    };
    return (
    <View>
        <View style={styles.container}>
            <TouchableOpacity style={styles.close} onPress={props.event}>
                <View style={styles.closeContainer}>
                    <Text style={styles.x}>+</Text>
                </View>
            </TouchableOpacity>
            <InputField 
            title="Book Title" 
            placeholder=" " 
            multiline={true} 
            height={20} 
            onChangeText={setBookTitle}
            />
            <TouchableOpacity onPress={props.bookcreation}>
                <Text><View style={styles.edit}></View>+ Add New book</Text>
            </TouchableOpacity>
            <InputField 
            title="Current page" 
            placeholder=" " 
            multiline={false} 
            height={20}
            inputMode = "numeric"
            onChangeText={setcurrPage}
            />
            <InputField title="Time spent reading" placeholder="Time in minutes" multiline={false} height={20} onChangeText={settime}/>
            <InputField 
            title="Entry comments"
            placeholder="Enter your thoughts about the book here!" 
            multiline={true} 
            height={100}
            onChangeText={setreview}
            />
            <Text style={styles.error}>{errorMessage}</Text>
            <TouchableOpacity style={styles.submitButton} onPress={sendData}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
};
const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#C6C5B9',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    submitButton: {
        backgroundColor: '#62929E',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        marginTop: 20,
        width: '40%'
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    show: {
        display: 'flex',
      },
    hide: {
        display: 'none',
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10,
        height: 35,
        width: 35,
        maxWidth: 'fit-content',
    },
    closeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: '100%',
        zIndex: 999,
    },
    x: {
        fontSize: 35,
        transform: [
            { rotateZ: '45deg' }
        ],
        zIndex: -99,
    },
    error:{
        color: 'red',
        width: '70%',
    },
    wave: {
        zIndex: 5,
    }
});

export default InputMenu;