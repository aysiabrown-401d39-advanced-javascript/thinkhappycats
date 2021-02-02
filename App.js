import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import RandomCat from './components/RandomCat';

// or any pure javascript modules available in npm
import { Card, Button } from 'react-native-paper';

import Cat1 from './assets/cat1.png';
import Cat2 from './assets/cat2.jpeg';
import Cat3 from './assets/cat3.jpeg';
import Cat4 from './assets/cat4.jpeg';
import Cat5 from './assets/cat5.jpeg';
import Cat6 from './assets/cat6.jpeg';
import Cat7 from './assets/cat7.jpeg';
import Cat8 from './assets/cat8.jpeg';
import Cat9 from './assets/cat9.jpeg';
import Cat10 from './assets/cat10.jpeg';
import Cat11 from './assets/cat11.jpeg';
import Cat12 from './assets/cat12.jpeg';
import Cat13 from './assets/cat13.jpeg';



export default function App() {
  const [allCats, setallCats] = useState([Cat1,Cat2,Cat3,Cat4,Cat5,Cat6,Cat7,Cat8,Cat9,Cat10,Cat11,Cat12,Cat13])
  const [jokes, setJokes] = useState([
    {joke:'What do cats like to eat on a hot day?', punchline: 'A mice-cream cone!'},
    {joke: 'Why do cats always get their way? ', punchline: 'They are very purr-suavsive!'},
    {joke: 'How do two cats end a fight?', punchline: 'They hiss & make-up!'},
    {joke: 'What is a cat\'s favorite color?', punchline: 'Purrrple!'},
    {joke: 'Why can\'t cats play poker in the jungle?', punchline: 'There are simply too many cheetahs!'},
    {joke: 'What\'s a cat\'s favorite subject in school?', punchline: 'Hisstory!'},
    {joke: 'What does a cat say during holidays?', punchline: 'Meowry Christmas!'},
    {joke: 'How many cats can you put into an empty box?', punchline: 'Only one, after that the box isn\'t empty!'},
    {joke: 'Do you want to hear a bad cat joke?', punchline: 'Just kitten!'},
    {joke: 'Someone made a joke about my three-legged cat.', punchline: 'It was a meow-jer faux paw'},
    {joke: 'When a cat doesn’t want to say goodbye, what do they say instead?', punchline: 'See ya litter!'},
    {joke: 'What do cats look for in a significant other?', punchline: 'A great purrsonality!'},
  ])
  const [punchline, setPunch] = useState(false);
  const [index, setIndex] = useState([0, 0])
  const [cat, setCat] = useState([allCats[index[0]],jokes[index[1]]])
  

  const pressHandler = () => {
    let cat_idx = Math.floor(Math.random() * allCats.length);
    let joke_idx = Math.floor(Math.random() * jokes.length);
    // to ensure the same photo and joke don't happen twice in a row
    while(index[0] === cat_idx || index[1] === joke_idx) {
      cat_idx = Math.floor(Math.random() * allCats.length);
      joke_idx = Math.floor(Math.random() * jokes.length);
    }
    setIndex([cat_idx, joke_idx]);
    setCat([allCats[cat_idx], jokes[joke_idx]]);
    setPunch(false);
  }

  const viewPunchline = () => {
    setPunch(true);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Think Happy Cats!
      </Text>
      <Text style={styles.paragraph}>
          Turn that frown around with a random cat photo! 
      </Text>
      <Button onPress={pressHandler}>Tap for Cat!</Button>
      <Card>
        <RandomCat
        randoCat = {cat}
        viewPunchline = {viewPunchline}
        punchline = {punchline} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    fontSize: 12,
    textAlign: 'center',
  },
  header: {
    fontSize: 24, 
    textAlign: 'center',
  }
});
