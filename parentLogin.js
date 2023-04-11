import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
} from 'react-native';
import ParentWelcomePage from './parentWelcome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Parent = () => {
    const [showWelcomePage, setShowWelcomePage] = useState(false);

    const onParentLoginSuccess = () => {
        setShowWelcomePage(true);
    };

    return showWelcomePage ? (
        <ParentWelcomePage />
    ) : (
        <ParentLoginPage onLoginSuccess={onParentLoginSuccess} />
    );
};

const ParentLoginPage = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async () => {
        if (email && email.includes('@') && password && password.length >= 6) {
          try {
            const response = await axios.post(
              'http://192.168.8.116:3000/api/parents/login', // replace with the actual URL of your login API
              {
                email,
                password,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
              },
            );
      
            if (response.data && response.data.token) {
              await AsyncStorage.setItem('parent_jwt', response.data.token);
              onLoginSuccess();
            } else {
              alert('Invalid credentials');
            }
          } catch (error) {
            console.error(error);
            alert('An error occurred during login');
          }
        } else {
          alert('Please enter a valid email and password (minimum 6 characters)');
        }
      };
      

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    style={styles.icon}
                    source={{
                        uri: 'https://drive.google.com/uc?id=1v9aRbYNwJVooZObYcwy9cAvRJvG4gm3A',
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    placeholderTextColor="white"
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="white"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#612CE8',
    },
    innerContainer: {
        alignItems: 'center',
        padding: 20,
    },
    icon: {
        width: 225,
        height: 225,
        marginBottom: 30,
    },
    input: {
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginBottom: 20,
        color: 'white',
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
});

export default Parent;
