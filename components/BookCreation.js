import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";
import InputField from "./InputField";

const BookCreation = props => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Create New Book Diary</Text>
            <InputField title="New book name" placeholder="Enter title of your book" multiline={true} height={20}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
})

export default BookCreation;