import React, { PureComponent } from 'react';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';

// HOC for create persistor
export default function (Component, persistor) {
  class Enhancer extends PureComponent {
    render() {
      return (
        <PersistGate persistor={persistor} loading={<ActivityIndicator />}>
          <Component {...this.props} />
        </PersistGate>
      );
    }
  }

  return Enhancer;
}
