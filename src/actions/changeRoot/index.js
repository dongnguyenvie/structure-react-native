import {
  RESET_ALL_STATE,
  ROOT_CHANGED
} from '@constants/action-names';
//action creator
function changeAppRoot(root) {
  return {
    type: ROOT_CHANGED, 
    root: root
  };
}
function appInitialized() {
  return changeAppRoot('login')
}
function login() {
  return changeAppRoot('after-login')
}

export {
  changeAppRoot,
  appInitialized,
  login
}