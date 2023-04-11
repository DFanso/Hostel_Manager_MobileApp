import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

const ParentRegistrationPage = () => {
    const [parentID, setParentID] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const onSubmit = () => {
        // Save button logic
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Parent ID</Text>
                <TextInput
                    style={styles.input}
                    value={parentID}
                    onChangeText={setParentID}
                    placeholder="Enter Parent ID"
                    placeholderTextColor="white"
                />
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter Name"
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
