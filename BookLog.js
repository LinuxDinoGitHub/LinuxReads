import {React, useState} from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Log from './components/Log'


export default function BookLog({route}) {
  const {data} = route.params;
  const {title} = route.params;
  const display = data[title];
  console.log(data, title)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title} By: {display[0].author}</Text>
      </View>
      <View style={styles.log}>
      {Object.entries(data).length > 0 ? (
        <FlatList
        style={styles.flatlist}
        data={display}
        renderItem={({ item }) => (
          <Log
            data={[display[0],item]}
          />
        )}
      />
      ) : (
        <Text>No current logs to display.</Text>
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    backgroundColor: "#393D3F",
    padding: 10,
  },
  log:{
    width: '90%',
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column'
  },
  header:{
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    fontFamily: 'monospace',
    fontSize: 36,
    color: 'white',
  },
  flatlist: {

  }
});
