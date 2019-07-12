import {AppState, PushNotificationIOS} from 'react-native';
const ACTIVE = 'active';
const BACKGROUND = 'background';
let currentState = ACTIVE;
const appStateMiddleware = (store) => {
  AppState.addEventListener('change', (appState) => {
    console.log(appState);
    // PushNotification.configure({
    //   onNotification: function(notification) {
    //     console.log( 'NOTIFICATION:', notification);
    //     notification.finish(PushNotificationIOS.FetchResult.NoData);
    //   },
    //   requestPermissions: false,
    // });
    currentState = appState;
  });
  return (next) => (action) => next(action);
};
export default appStateMiddleware;
