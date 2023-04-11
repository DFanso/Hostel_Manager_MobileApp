import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';

const StudentRegistrationPage = () => {
    const [studentID, setStudentID] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [roomNo, setRoomNo] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const validateForm = () => {
        if (!studentID) {
            alert('Please enter a student ID');
            return;
        }

        if (!name) {
            alert('Please enter a name');
            return;
        }

        if (!email) {
            alert('Please enter an email');
            return;
        }

        if (!address) {
            alert('Please enter an address');
            return;
        }

        if (!roomNo) {
            alert('Please enter a room number');
            return;
        }

        if (!password) {
            alert('Please enter a password');
            return;
        }

        if (password !== retypePassword) {
            alert('Passwords do not match');
            return;
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Student Registration</Text>
            <TextInput
                style={styles.input}
                onChangeText={setStudentID}
                value={studentID}
                placeholder="Student ID"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Name"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                onChangeText={setAddress}
                value={address}
                placeholder="Address"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                onChangeText={setRoomNo}
                value={roomNo}
                placeholder="Room No"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                onChangeText={setRetypePassword}
                value={retypePassword}
                placeholder="Re-type Password"
                secureTextEntry={true}
                placeholderTextColor="#fff"
            />
            <TouchableOpacity style={styles.button} onPress={validateForm}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e90ff',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 30,
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'white',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#001475',
        borderRadius: 20,
        width: 70,
        paddingHorizontal: 10,
        paddingVertical: 5, // Use symmetric padding values
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
    },
});

export default StudentRegistrationPage;
