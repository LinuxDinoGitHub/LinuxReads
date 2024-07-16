import {React, useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import InputField from './InputField';
//not done
const EditLog = props => {
    const [show, setshow] = useState(false);
  return (
    <View>
    {show? 

        <TouchableOpacity style={styles.submit}>
        <Text style={styles.text}>Entry: {latestdata.index}</Text>
        </TouchableOpacity>
        : null}
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    minHeight: 150,
    width: '100%',
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  text: { //submit text*
    color: 'white',
  }
});

export default EditLogLog;
