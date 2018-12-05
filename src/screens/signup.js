import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Toast,
  Spinner
} from "native-base";
import { signup } from "../apis/auth";

export default class Signup extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: "",
    loading: false
  };

  handleChange = (value, field) => {
    this.setState(() => ({
      [field]: value
    }));
  };

  signupUser = () => {
    const { email, password } = this.state;
    this.setState(() => ({
      loading: true
    }));
    signup(email, password)
      .then(user => {
        this.setState(() => ({
          loading: false
        }));
        this.props.navigation.navigate('Login')
      })
      .catch(err => {
        Toast.show({
          text: err.message,
          buttonText: "Okay",
          position: "top"
        });
        this.setState(() => ({
          loading: false
        }));
      });
  };

  render() {
    const { loading } = this.state;
    return (
      <Container>
        <Header />
        <Content>
          <Text
            style={{
              paddingHorizontal: "10%",
              fontSize: 20,
              textAlign: "center"
            }}
          >
            Signup
          </Text>
          <Form style={{ paddingBottom: 20 }}>
            <Item>
              <Input
                placeholder="Email"
                onChangeText={e => this.handleChange(e, "email")}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                onChangeText={e => this.handleChange(e, "password")}
                secureTextEntry
              />
            </Item>
          </Form>
          <Button primary full onPress={this.signupUser}>
            <Text style={{ color: "#fff" }}>Sign Up</Text>
            {loading && <Spinner color="blue" />}
          </Button>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
