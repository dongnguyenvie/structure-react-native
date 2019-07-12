import { FETCH_LOGIN } from "@constants/action-names";

const login = (payload) => {
  return {
    type: FETCH_LOGIN,
    payload: {
      phoneNumber: payload.email,
      password: payload.password,
      navigator: payload.navigator
    }
  }
}

export default login