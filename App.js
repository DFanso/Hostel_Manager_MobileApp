import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import LoginPage from './login';
import RulesAndRegulationsPage from './rulesAndReg';

class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Welcome To Hostel Manager</Text>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://drive.google.com/uc?export=view&id=1CHQOCAJX4UQznKlOJR6kzsOIkXozE-P8',
            }}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RulesAndRegulationsPage')}
          >
            <Text style={styles.rulesText}>Rules and Regulations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('RegistrationPage')}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('LoginPage')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
  },
  LoginPage: {
    screen: LoginPage,
  },
  RulesAndRegulationsPage: {
    screen: RulesAndRegulationsPage,
  },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d47a1',
    justifyContent: 'center',
  },
  top: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  logo: {
    height: 250,
    width: 250,
    borderRadius: 125,
    marginTop: 40,
  },
  bottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rulesText: {
    fontSize: 22,
    color: 'white',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
  },
});

export default class HostelManagerApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}
