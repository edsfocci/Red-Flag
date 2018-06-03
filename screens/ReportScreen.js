import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
} from 'react-native';
import { WebBrowser } from 'expo';
import { CheckBox } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default class ReportScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      redFlags: '',
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checkedOther: false,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>
            Submission Check
          </Text>

          <View style={styles.checkboxContainer}>
            <CheckBox
              title='Visible injuries: bruising, swelling, welts'
              checked={this.state.checked1}
              onPress={() => this.setState({checked1: !this.state.checked1})}
            />
            <CheckBox
              title='Ownership tattoos, branding, burning'
              checked={this.state.checked2}
              onPress={() => this.setState({checked2: !this.state.checked2})}
            />
            <CheckBox
              title='Appearance of controlling relationship'
              checked={this.state.checked3}
              onPress={() => this.setState({checked3: !this.state.checked3})}
            />
            <CheckBox
              title='Malnourished or neglected'
              checked={this.state.checked4}
              onPress={() => this.setState({checked4: !this.state.checked4})}
            />
            <CheckBox
              title='Child or teen with unrelated older person'
              checked={this.state.checked5}
              onPress={() => this.setState({checked5: !this.state.checked5})}
            />
            <CheckBox
              title='Other:'
              checked={this.state.checkedOther}
              onPress={() => this.setState({checkedOther: !this.state.checkedOther})}
            />
          </View>
          <TextInput style={styles.textfield}
          />
          <View style={styles.submitContainer}>
            <Button style={styles.button}
              title="Submit"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  checkboxContainer: {
    alignItems: 'stretch',
    position: 'relative',
  },
  submitContainer: {
    alignItems: 'center',
  },
  textfield:{
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    position: 'relative',
    top: 10,
  },
});
