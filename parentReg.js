import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import axios from 'axios';

const ParentRegistrationPage = () => {
    const [studentId, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const onSubmit = async () => {
        
        if (!studentId) {
            alert('Please enter a student ID.');
            return;
        }
    
        if (!firstName) {
            alert('Please enter First name.');
            return;
        }
        if (!lastName) {
            alert('Please enter Last name.');
            return;
        }
    
        if (!email) {
            alert('Please enter an email address.');
            return;
        }
    
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        if (!password) {
            alert('Please enter a password.');
            return;
        }
    
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }
    
        if (password !== retypePassword) {
            alert('Passwords do not match.');
            return;
        }

        
        const API_URL = 'http://192.168.8.116:3000/api/parents/register';

        try {
            const response = await axios.post(API_URL, {
                studentId,
                firstName,
                lastName,
                email,
                password,
            });

            if (response.status === 201) {
                alert('Registration successful!');
                // Navigate to the parent login screen 
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Student ID</Text>
                <TextInput
                    style={styles.input}
                    value={studentId}
                    onChangeText={setStudentId}
                    placeholder="Enter Your Child's Student ID"
                    placeholderTextColor="white"
                />
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholder="Enter First Name"
                    placeholderTextColor="white"
                />
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={setLastName}
                    placeholder="Enter Last Name"
                    placeholderTextColor="white"
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholder="Enter Email"
                    placeholderTextColor="white"
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="Enter Password"
                    placeholderTextColor="white"
                />
                <Text style={styles.label}>Re-type Password</Text>
                <TextInput
                    style={styles.input}
                    value={retypePassword}
                    onChangeText={setRetypePassword}
                    secureTextEntry
                    placeholder="Re-enter Password"
                    placeholderTextColor="white"
                />
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e90ff',
        padding: 20,
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    input: {
        width: '100%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#001475',
        borderRadius: 20,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        fontSize: 22,
        color: 'white',
        alignSelf: 'center',
    },
});

export default ParentRegistrationPage;
