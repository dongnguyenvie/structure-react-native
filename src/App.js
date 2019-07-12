import { Component } from 'react';

import {registerScreens, registerScreenVisibilityListener, startRoot} from '@screens';
import configureStore from '@store/configureStore'
import {appInitialized, login} from '@actions/changeRoot';
import sagaMiddleware from '@store/middleware/saga'
import rootSaga from '@sagas'
// Configure Store Redux And Register Navigation
export const store = configureStore();
sagaMiddleware.run(rootSaga)
registerScreens(store);
registerScreenVisibilityListener();

class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appInitialized());
  }
  startApp = (root) => startRoot(root);
  onStoreUpdate = () => {
    let {root} = store.getState().root;
    // handle a root change
    if (this.currentRoot != root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }
}

export default App;