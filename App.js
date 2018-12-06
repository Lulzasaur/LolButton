import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';
import { Audio } from 'expo';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  _handleButtonPress = () => {
    this.setState({backgroundColor: '#28C925'});
  };

  playSound = async () => {
  
    const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(require('./assets/blah.mp3'));
        this.audioPlayer1  = soundObject;
        this.audioPlayer1.playAsync();
        this.audioPlayer1.setPositionAsync(0);
        this.audioPlayer1.setRateAsync(1, false);
      } catch (error) {
      // An error occurred!
      } 
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between',}}>
        <ImageBackground source={require('./assets/200w.gif')} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
            <Button title="LOL!" onPress={this.playSound} />
          </View>
        </ImageBackground>
      </View>
    );   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
