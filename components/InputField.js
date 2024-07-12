import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text, TextInput} from "react-native";
//4 props: Title, placeholder, multiline (bool), height

const InputField = (props) => {
    return (
    <View>
        <Text style={styles.title}>{props.title}</Text>
        <View style={[styles.inputField, {height: props.height}]}>
            <TextInput placeholder={props.placeholder} multiline={props.multiline}></TextInput>
        </View>
    </View>
    )
};
const styles = StyleSheet.create({
    inputField: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontStyle: 'bold',
    },
})
export default InputField;