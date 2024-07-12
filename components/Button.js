import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text} from "react-native";

const Button = () => {
    return (
        <TouchableOpacity style={styles.shape}>
            <View>
                <Text>+</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shape: {
        borderRadius: 10,
    },
    wrapper: {
        display: "flex"
    }
})

export default Button;