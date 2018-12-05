import { createStackNavigator } from "react-navigation";
import Login from './src/screens/login'
import Signup from './src/screens/signup';

const AppNavigator = createStackNavigator({
    Login: {
      screen: Login
    },
    Signup:{
        screen: Signup
    }
  });

export default AppNavigator;
