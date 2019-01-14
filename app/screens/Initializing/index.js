import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

export class Initializing extends PureComponent {
  static componentName = 'rnn.screens.initializing';

  render() {
    Reactotron.log(this.props)
    return (
      <View>
        <Text> prop </Text>
      </View>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Initializing);
