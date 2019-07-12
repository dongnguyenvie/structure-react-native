import {connect} from 'react-redux';
import LoginScreen from '@screens/LoginScreen';
import login from '@actions/login';
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    login: (params) => dispatch(login(params))
  };
};

const mapStateToProps = ({user}) => {
  return ({
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
