import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {redFlags: ''};
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.containerProper}>
            <View style={styles.homeContainer}>
              <Text style={styles.logo}>RedFlag</Text>
              <Text>Report potentially abusive situations.</Text>
            </View>

            <View style={styles.homeContainer}>
              <Text>Is anyone in immediate danger?</Text>
              <Button onPress={onPressCallPolice} title="YES - Call 911" color="red" accessibilityLabel="Red button that anonymously sends location data to the police."/>
              <Button onPress={() =>
            navigate('Report')} title="NO - File Report" color="blue" accessibilityLabel="Blue button that opens a form to report possible abusive situations to anti-trafficking "/>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
onPressCallPolice = () =>{
};
// onPressFileReport = () =>{
//   navigate('ReportScreen')
// };


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerProper: {
    alignItems: 'center',
  },
  homeContainer: {
    alignItems: 'center',
  },

  logo:{
    color: 'red',
    fontSize: 28,
  },

  // policeBtn:{
  //   color: 'red'
  // },
  // reportBtn:{
  //   color: 'blue'
  // },

});
