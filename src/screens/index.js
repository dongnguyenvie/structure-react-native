import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';
import screenKeys from '@constants/screenKey';
import LoginScreen from './LoginScreen';
import CreateProfile from './CreateProfile';
import Home1 from './Home1';
import Home2 from './Home2';
import {Provider} from 'react-redux';
import {SignUpAfterScreen,SignUpActiveScreen} from './SignUp';
import SignUpContainer from '@containers/signupContainer/signupContainer';
import LandingScreen from './Landing';
export function registerScreens(store) {
  Navigation.registerComponent(screenKeys.LoginScreen, () => LoginScreen, store, Provider);
  Navigation.registerComponent(screenKeys.TabOne, () => Home1, store, Provider);
  Navigation.registerComponent(screenKeys.TabTwo, () => Home2, store, Provider);
  Navigation.registerComponent(screenKeys.CreateProfile, () => CreateProfile, store, Provider);
  Navigation.registerComponent(screenKeys.SignUpAfter, () => SignUpAfterScreen, store, Provider);
  Navigation.registerComponent(screenKeys.SignUpActive, () => SignUpContainer, store, Provider);
  Navigation.registerComponent(screenKeys.Landing, () => LandingScreen, store, Provider);
}
export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => {
      debugger
      console.log(`Displaying screen ${screen}`)
    },
    didAppear: ({screen, startTime, endTime, commandType}) => {
      console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`)
    },
    willDisappear: ({screen}) => {
      console.log(`Screen will disappear ${screen}`)
    },
    didDisappear: ({screen}) => {
      console.log(`Screen disappeared ${screen}`)
    }
  }).register();
};

export function startRoot(value) {
  switch(value) {
    case 'login': {
      Navigation.startSingleScreenApp({
        animationType: 'fade',
        screen: {
          screen: screenKeys.SignUpActive, 
          title: 'Signup Success', 
          navigatorStyle: {
            navBarHidden: true
          }, 
          navigatorButtons: {},
        },
      });
      return;
    }
    case 'after-login': {
      Navigation.startTabBasedApp({
        tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
          tabBarButtonColor: '#929292', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
          tabBarSelectedButtonColor: '#fd8042', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
          tabBarBackgroundColor: '#FFFFFF', // optional, change the background color of the tab bar,
        },
        appStyle: {
            tabBarButtonColor: '#929292', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
            tabBarSelectedButtonColor: '#fd8042', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
            tabBarBackgroundColor: '#FFFFFF', // optional, change the background color of the tab bar,
        },
        animationType: 'fade',
        tabs: [
        {
          iconInsets: {top: 5,bottom: -5},
          label: 'Home1',
          screen: screenKeys.TabOne,
          icon: require('../thumbnails/settings.png'),
          selectedIcon: require('../thumbnails/settings.png'),
          title: 'Hey',
          overrideBackPress: false, //this can be turned to true for android
          navigatorStyle: {
            drawUnderTabBar: true,
            navBarHidden: true,
            screenBackgroundColor: '#0D1011',
          }
        },{
          iconInsets: {top: 5,bottom: -5},
          label: 'Home2',
          screen: screenKeys.TabOne,
          icon: require('../thumbnails/settings.png'),
          selectedIcon: require('../thumbnails/settings.png'),
          title: 'Hey',
          navigatorStyle: {
            drawUnderTabBar: true,
            navBarHidden: true,
            screenBackgroundColor: '#0D1011',
          }
        },{
          iconInsets: {top: 5,bottom: -5},
          label: 'Home3',
          screen: screenKeys.TabOne,
          icon: require('../thumbnails/settings.png'),
          selectedIcon: require('../thumbnails/settings.png'),
          title: 'Hey',
          navigatorStyle: {
            drawUnderTabBar: true,
            navBarHidden: true,
            screenBackgroundColor: '#0D1011',
          }
        },{
          iconInsets: {top: 5,bottom: -5},
          label: 'Home4',
          screen: screenKeys.TabOne,
          icon: require('../thumbnails/settings.png'),
          selectedIcon: require('../thumbnails/settings.png'),
          title: 'Hey',
          navigatorStyle: {
            drawUnderTabBar: true,
            navBarHidden: true,
            screenBackgroundColor: '#0D1011',
          }
        }],
      });
      return;
    }
  }
}