import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StudentAttendanceRecord = () => {
    const [status1, setStatus1] = useState('IN');
    const time1 = '3.00';
    const [status2, setStatus2] = useState('OUT');
    const time2 = '5.00';
    const studentId = '20305';

    const containerStyle1 = {
        backgroundColor: status1 === 'IN' ? 'green' : '#8B0000',
    };

    const containerStyle2 = {
        backgroundColor: status2 === 'IN' ? 'green' : '#8B0000',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.studentIdText}>Student ID: {studentId}</Text>

            <View style={[styles.statusContainer, containerStyle1]}>
                <Text style={styles.statusLabel}>Time: {time1}</Text>
                <Text style={styles.statusLabel}>Status: {status1}</Text>
            </View>

            <View style={[styles.statusContainer, containerStyle2]}>
                <Text style={styles.statusLabel}>Time: {time2}</Text>
                <Text style={styles.statusLabel}>Status: {status2}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e90ff',
    },
    studentIdText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    statusContainer: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '60%',
    },
    statusLabel: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default StudentAttendanceRecord;
