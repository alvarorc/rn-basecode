// @flow

import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

// import all screens
import { Initializing, Signin, ForgotPassword, Welcome } from 'app/screens';
import persistorEnhancer from 'app/utils/persistorEnhancer';

export default function registerScreens({ store, persistor }) {
  const registerComponent = (name, Component) =>
    Navigation.registerComponentWithRedux(name, Component, Provider, store);

  registerComponent(Initializing.componentName, () => persistorEnhancer(Initializing, persistor));
  registerComponent(Signin.componentName, () => Signin);
  registerComponent(ForgotPassword.componentName, () => ForgotPassword);
  registerComponent(Welcome.componentName, () => Welcome);
}
