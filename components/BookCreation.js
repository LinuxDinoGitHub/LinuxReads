import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";
import InputField from "./InputField";

const BookCreation = props => {
    return (
        <View style={[styles.container, props.style]}>
        <TouchableOpacity style={styles.close} onPress={props.event}>
            <Text style={styles.x}>+</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Create New Book Diary</Text>
            <InputField title="New book name" placeholder="Enter title of your book" multiline={true} height={50} style={styles.input}/>
            <TouchableOpacity style={styles.submitButton} onPress={props.event}>
                <Text style={styles.submitButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: 250,
        backgroundColor: '#E5E4E2',
        borderRadius: 10,
        padding: 50,
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
        height: 30,
        width: 30,
        transform: [
            { rotateZ: '45deg' }
        ],
        backgroundColor: 'grey',
        borderRadius: 20,
    },
    x: {
        fontSize: 35,
    }
})

export default BookCreation;