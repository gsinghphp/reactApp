import React from "react";
import * as firebase from "firebase";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Root } from "native-base";
import { Font, AppLoading } from "expo";
import Login from "./src/screens/login";
import Signup from "./src/screens/signup";
import Home from './src/screens/home';

const firebaseConfig = {
  apiKey: "AIzaSyCc8FxGSQALmp6x5rs4hIey7na5iug10vU",
  authDomain: "reactfire-7b424.firebaseapp.com",
  databaseURL: "https://reactfire-7b424.firebaseio.com",
  storageBucket: "reactfire-7b424.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Home:{
    screen: Home
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  state = { loading: true };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}
