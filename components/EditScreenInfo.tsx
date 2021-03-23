import React, { Component } from 'reactn';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';


// export default class Screen extends Component 
export default class EditScreenInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={() => {
          this.setGlobal({ myGlobalText: 'Hello World !' });
          // Uncomment this line to trigger rerendering
          // this.setState({ myLocalText: 'Hello Local !' });
        }} style={styles.helpLink}>
          <Text style={styles.helpLinkText}>
            Click me to setGlobal()
          </Text>
          <Text style={styles.helpLinkText}>
            this.state in child {this.state.myLocalText}
          </Text>
          <Text style={styles.helpLinkText}>
            this.global in child {this.global.myGlobalText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
