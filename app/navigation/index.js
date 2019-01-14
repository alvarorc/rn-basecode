// @flow

import { Navigation } from 'react-native-navigation';
import { Welcome, Signin, ForgotPassword, Initializing } from 'app/screens';

export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      options: {
        topBar: {
          visible: false
        }
      },
      children: [
        {
          component: {
            name: Signin.componentName,
          }
        },
        {
          component: {
            name: ForgotPassword.componentName,
          }
        }
      ]
    }
  }
});

export const goHome = () =>  Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: Welcome.componentName,
          }
        }
      ],
    }
  }
});

export default () => Navigation.setRoot({
  root: {
    component: {
      name: Initializing.componentName,
    }
  },
});
