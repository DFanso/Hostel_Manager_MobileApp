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

    const onSubmit = () => {
        if (email && email.includes('@') && password && password.length >= 6) {
            onLoginSuccess();
            console.log(`Email: ${email}, Password: ${password}`);
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
