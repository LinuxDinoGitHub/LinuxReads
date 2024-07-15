import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";
import InputField from "./InputField";
//MUST ADD ONCHANGETEXT PROP
const BookCreation = props => {
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
            />
            <InputField 
            title="Author" 
            placeholder="Enter author of book" 
            multiline={true} 
            height={50} 
            style={styles.input}
            />
            <InputField 
            title="Pages" 
            placeholder="Enter max page of your book" 
            multiline={true} 
            height={50} 
            style={styles.input}
            />
            <TouchableOpacity style={styles.submitButton} onPress={props.event}>
                <Text style={styles.submitButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        minHeight: 250,
        backgroundColor: '#E5E4E2',
        borderRadius: 10,
        padding: 50,
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: '#007bff',
        padding: 5,
        borderRadius: 5,
        width: '40%'
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
})

export default BookCreation;