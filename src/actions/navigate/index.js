import screenKeys from "@constants/screenKey";

// API Navigate to A Screen
const navigateToScreen = (key, {navigator},params={}) => {
  navigator.push({screen: key, 
    navigatorStyle: {
      drawUnderTabBar: true,
      navBarHidden: true
      },
    passProps: params
  });
}
// API Navigate to A Screen With Root
const navigateToNewRoot = (key, {navigator}) => {
  navigator.resetTo({screen: key, navigatorStyle: {
    drawUnderTabBar: true,
    navBarHidden: true
  }});
}

// API GoBack Navigation
export const goBack = ({navigator}) => {
  navigator.pop({
    animated: true,
    animationType: 'fade'
  });
}

// API Hide TabBar
export const showTabBar = ({navigator}, isShow = true) => {
  navigator.toggleTabs({
    to: isShow ? 'show' : 'hidden',
    animate: true,
  })
}

// Navigate To Login Screen
export const navigateToLogin = (props) => {
  navigateToScreen(screenKeys.LoginScreen, props);
  showTabBar(props, false);
};
export const navigateToLoginRoot = (props) => {
  navigateToNewRoot(screenKeys.LoginScreen, props);
  showTabBar(props, false);
};

// Navigate To Create Profile Student/ Alumni
export const navigateToCreateProfile = (props,type) => {
  navigateToScreen(screenKeys.CreateProfile, props,type);
  showTabBar(props, false);
}