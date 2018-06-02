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
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>

          </View>

          <View style={styles.homeContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.logo}>Red Flag</Text>
            <Text>Report potentially abusive situations.</Text>
          </View>

          // <View style={styles.helpContainer}>
          //   <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
          //     <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          //   </TouchableOpacity>
          // </View>


          // <Text>Red flags selected: {this.state.redFlags}</Text>
          // <Picker
          //   selectedValue={this.state.redFlags}
          //   style={{ height: 50, flex: 1, flexDirection: 'row' }}
          //   onValueChange={(itemValue, itemIndex) => this.setState({redFlags: itemValue})}>
          //   <Picker.Item label="Appearance" value="Appearance" />
          //   <Picker.Item label="Actions" value="Actions" />
          //   <Picker.Item label="Language" value="Language" />
          // </Picker>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeContainer: {

  },
  logo{

  },

});
