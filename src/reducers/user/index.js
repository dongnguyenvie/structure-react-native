import {
  RESET_ALL_STATE
} from '@constants/action-names';

const initialState = {
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ALL_STATE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
