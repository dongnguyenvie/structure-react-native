import {connect} from 'react-redux';

import SignUpActiveScreen from '@screens/SignUp/signup-active';



import {navigateToCreateProfile} from '@actions/navigate';


const mapStateToProps = (state) => (
  {

  }
);

const mapDispatchToProps = (dispatch,getState) => (
  {
    navigateToCreateProfile: (props,type) => navigateToCreateProfile(props,type),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpActiveScreen);
