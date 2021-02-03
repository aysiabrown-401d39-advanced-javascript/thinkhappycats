import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';


export default function Gallery (props) {
    const [permissions, setPermissions] = useState(false);

useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            props.addImageToList(result.uri);
        }
      };

    return(
        <>
        <ScrollView id='gallery'>
          <View style={{padding: 30, flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
            {props.cats.map((cat, idx) => (
                idx < 20 ? (<Image style={styles.logo} source={cat}></Image>)
                : (<Image style={styles.logo} source={{uri: cat}}></Image>)
            ))}
            <Button style={styles.button} onPress={() =>  pickImage()}>Add!</Button>
            </View>
        </ScrollView>
        </>
    )
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
      height: 100,
      width: 100,
    },
    button: {
      backgroundColor: '#c5a2db',
      width: 100,
    }
  });