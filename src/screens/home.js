import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Spinner
} from "native-base";

import * as firebase from "firebase/app";

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    loading: true,
    properties: []
  };

  componentDidMount() {
    var database = firebase.database();
    var leadsRef = database.ref("properties").limitToFirst(25);
    leadsRef.on("value", snapshot => {
      var properties = snapshot.val();
      this.setState(() => ({
        properties,
        loading: false
      }));
    });
  }

  render() {
    const { loading, properties } = this.state;
    const { imageStyle, textStyle } = styles;
    return (
      <Container>
        <Header />
        <Content>
          {loading && <Spinner color="blue" />}
          <Text style={textStyle}> Properties </Text>
          {properties.map(property => (
            <Card style={{ marginBottom: 5 }} key={property.id}>
              <CardItem cardBody>
                <Image source={{ uri: property.image }} style={imageStyle} />
              </CardItem>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{property.name}</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    paddingHorizontal: "10%",
    fontSize: 20,
    textAlign: "center"
  },
  imageStyle: {
    height: 200,
    width: null,
    flex: 1
  }
});
