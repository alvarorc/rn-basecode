/** @format */

import { Navigation } from 'react-native-navigation';
import configureStore from 'app/store/configure';
import RegisterRoot from 'app/navigation';
import registerScreens from 'app/navigation/registerScreens';

// Register all screens on app launch and inject the store
const appStore = configureStore();
registerScreens(appStore);

Navigation.events().registerAppLaunchedListener(RegisterRoot);
