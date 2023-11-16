/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import Crashes from 'appcenter-crashes';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  Button,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  var [isRedActive, setRed] = useState("false");
  const onPressSetRed = () => {
    setRed(isRedActive === "false" ? "true" : "false");
  }

  var [isYellowActive, setYellow] = useState("false");
  const onPressSetYellow = () => {
    setYellow(isYellowActive === "false" ? "true" : "false");
  }

  var [isBlueActive, setBlue] = useState("false");
  const onPressSetBlue = () => {
    setBlue(isBlueActive === "false" ? "true" : "false");
  }



  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View>
            <Button title="Crash" onPress={() => Crashes.generateTestCrash()}/>
          </View>
        <View>
            <Button title='Red' 
            onPress={onPressSetRed}/>
            <Text>Red is: {isRedActive}</Text>
            <Button title='Yellow' 
            onPress={onPressSetYellow}/>
            <Text>Yellow is: {isYellowActive}</Text>
            <Button title='Blue' 
            onPress={onPressSetBlue}/>
            <Text>Blue is: {isBlueActive}</Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
