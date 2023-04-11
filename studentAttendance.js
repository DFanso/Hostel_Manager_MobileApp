import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const AttendanceInterface = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Attendance</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <AntDesign name="checkcircle" size={85} color="green" />
                    <TouchableOpacity style={styles.checkInButton}>
                        <Text style={styles.buttonText}>IN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <MaterialIcons name="cancel" size={85} color="#b92e34" />
                    <TouchableOpacity style={styles.checkOutButton}>
                        <Text style={styles.buttonText}>OUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#612CE8',
        paddingHorizontal: 16,
        paddingTop: 50,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
        color: 'white',
    },
    buttonsContainer: {
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
    },
    checkInButton: {
        backgroundColor: 'green',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginTop: 20,
        marginBottom: 30,
    },
    checkOutButton: {
        backgroundColor: '#b92e34',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 14,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default AttendanceInterface;
