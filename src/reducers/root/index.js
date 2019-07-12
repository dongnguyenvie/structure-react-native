import {
  RESET_ALL_STATE,
  ROOT_CHANGED
} from '@constants/action-names';

const initialState = {
  root: null
};

const root = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ALL_STATE: {
      return initialState;
    }
    case ROOT_CHANGED:
      return {
        root: action.root
      };
    default: {
      return state;
    }
  }
};

export default root;
