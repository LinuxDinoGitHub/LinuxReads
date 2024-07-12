import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Button} from "./components/Button"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Linux Reads</Text>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
