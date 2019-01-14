global.Reactotron = null;

/* eslint no-undef: 0, global-require: 0, import/no-extraneous-dependencies: 0 */
export default function ReactotronConfig() {
  if (__DEV__ && process.env.NODE_ENV !== 'test') {
    const Reactotron = require('reactotron-react-native').default;

    const {
      trackGlobalErrors,
      openInEditor,
      overlay,
      networking,
    } = require('reactotron-react-native');

    const { reactotronRedux } = require('reactotron-redux');

    const sagaPlugin = require('reactotron-redux-saga');

    Reactotron.configure({
      name: 'RNN',
      enabled: true,
    })
      .use(trackGlobalErrors())
      .use(openInEditor())
      .use(overlay())
      .use(reactotronRedux())
      .use(sagaPlugin())
      .use(networking())
      .useReactNative({
        networking: { // optionally, you can turn it off with false.
          ignoreUrls: /socket.io/,
        },
        editor: false, // there are more options to editor
        overlay: false, // just turning off overlay
      })
      .connect();

    Reactotron.clear();

    global.Reactotron = Reactotron; // eslint-disable-line
  }
}
