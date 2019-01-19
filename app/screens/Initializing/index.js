import React, { PureComponent } from "react";
import { View, Text, Alert } from "react-native";
import { connect } from "react-redux";
import { Button } from "native-base";

export class Initializing extends PureComponent {
  static componentName = "rnn.screens.initializing";

  render() {
    Reactotron.log(this.props);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10
        }}
      >
        <Text> isaacs </Text>
        <Button block onPress={() => Alert.alert("Isaacc deja de comerla")}>
          <Text>Tocame</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Initializing);
