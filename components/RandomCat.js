import React, {useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

export default function RandomCat(props) {

  const handlePunchline = () => {
    props.viewPunchline();
  }


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {props.randoCat[1].joke}
      </Text>
      <Image style={styles.logo} source={props.randoCat[0]}/>
      <Button onPress={handlePunchline}> Punchline </Button>
      {props.punchline ? 
      <Text>{props.randoCat[1].punchline}</Text>
      : null 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 256,
    width: 256,
  }
});
