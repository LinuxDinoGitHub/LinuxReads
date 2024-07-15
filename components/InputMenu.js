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
    const [errorMessageStatus, seterrorMessageStatus] = useState(false);
    const [existingBooks, setExistingBooks] = useState([props.data]);
    const [bookTitle, setBookTitle] = useState('None');
    const [maxPage, setMaxPage] = useState(0);
    const [currPage, setcurrPage] = useState(0);
    const [review, setreview] = useState('');
    const [time, settime] = useState(0);

    
    const existingBookTitle = existingBooks.keys();  
    const inputFailure = msg => {
        seterrorMessageStatus(true);
        console.log(msg)
    }
    const sendData = () => {
        for(const x in existingBookTitle){
            if (x == bookTitle){
                let book = existingBooks[bookTitle];
                setMaxPage(book.max);
                break;
            }
            if(x == existingBookTitle[existingBookTitle.length-1]){
                inputFailure('No current books exists')
            }
        };
        if (bookTitle === 'None'){
            inputFailure('No book title entered')
        }
        else if(currPage === 0){
            console.log(currPage)
            inputFailure('No current page entered')
        }
        else{
            props.event2({bookTitle: {max: maxPage, curr: currPage, thoughts: review, time: time}})
            props.event()
        }
    };
    return (
    <View>
        <View style={[styles.container, props.stylep]}>
            <TouchableOpacity style={styles.close} onPress={props.event}>
                <Text style={styles.x}>+</Text>
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
            <TouchableOpacity style={styles.submitButton} onPress={sendData}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#e0dbce',
        padding: 20,
    },
    submitButton: {
        backgroundColor: '#007bff',
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
    x: {
        fontSize: 35,
        transform: [
            { rotateZ: '45deg' }
        ],
    }
});

export default InputMenu;