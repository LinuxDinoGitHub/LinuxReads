import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.shape} onPress={props.onClick}>
            <View>
                <Text>+</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    shape: {
        borderRadius: 10,
        height: 50,
        width: 50,
        backgroundColor: "blue"
    },
    wrapper: {
        display: "flex"
    }
});

export default Button;