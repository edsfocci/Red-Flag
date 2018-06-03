<Text>Red flags selected: {this.state.redFlags}</Text>
          <Picker
            selectedValue={this.state.redFlags}
            style={{ height: 50, flex: 1, flexDirection: 'row' }}
            onValueChange={(itemValue, itemIndex) => this.setState({redFlags: redFlagsMap[itemValue]})}>
            <Picker.Item label="Appearance" value="appearance" />
            <Picker.Item label="Actions" value="actions" />
            <Picker.Item label="Language" value="language" />
          </Picker>
