import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MonthlyBill = () => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const [selectedMonth, setSelectedMonth] = useState('');

    // Validation states
    const [nameValid, setNameValid] = useState(false);
    const [cardNumberValid, setCardNumberValid] = useState(false);
    const [expiryValid, setExpiryValid] = useState(false);
    const [cvcValid, setCvcValid] = useState(false);
    const [amountValid, setAmountValid] = useState(false);
    const [monthValid, setMonthValid] = useState(false);

    // Validation functions
    const validateName = (text) => {
        setNameValid(text.trim().length > 0);
    };

    const validateCardNumber = (text) => {
        setCardNumberValid(text.length === 16 && /^\d+$/.test(text));
    };

    const validateExpiry = (text) => {
        setExpiryValid(/^(0[1-9]|1[0-2])\/(2\d)$/.test(text));
    };

    const validateCVC = (text) => {
        setCvcValid(text.length === 3 && /^\d+$/.test(text));
    };

    const validateAmount = (text) => {
        setAmountValid(parseFloat(text) > 0);
    };

    const validateMonth = (itemValue) => {
        setMonthValid(itemValue !== '');
        setSelectedMonth(itemValue);
    };

    const submitPayment = () => {
        if (!nameValid || !cardNumberValid || !expiryValid || !cvcValid || !amountValid || !monthValid) {
            Alert.alert('Error', 'Please fill in all fields correctly');
            return;
        }

        // Process payment here
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={styles.label}>Name on card</Text>
                <TextInput
                    style={[styles.input, !nameValid ? styles.invalidInput : null]}
                    onChangeText={(text) => validateName(text)}
                />
                <Text style={styles.label}>Card number</Text>
                <TextInput
                    style={[styles.input, !cardNumberValid ? styles.invalidInput : null]}
                    keyboardType="number-pad"
                    maxLength={16}
                    onChangeText={(text) => validateCardNumber(text)}
                />
                <Text style={styles.label}>Expiry</Text>
                <TextInput
                    style={[styles.input, !expiryValid ? styles.invalidInput : null]}
                    keyboardType="number-pad"
                    maxLength={5}
                    placeholder="MM/YY"
                    onChangeText={(text) => validateExpiry(text)}
                />
                <Text style={styles.label}>CVC</Text>
                <TextInput
                    style={[styles.input, !cvcValid ? styles.invalidInput : null]}
                    keyboardType="number-pad"
                    maxLength={3}
                    onChangeText={(text) => validateCVC(text)}
                />
                <Text style={styles.label}>Month</Text>

                <Picker
                    selectedValue={
                        selectedMonth}
                    style={[styles.picker, !monthValid ? styles.invalidPicker : null]}
                    onValueChange={(itemValue) => validateMonth(itemValue)}
                >
                    <Picker.Item label="Select Month" value="" />
                    {months.map((month, index) => (
                        <Picker.Item key={index} label={month} value={month} />
                    ))}
                </Picker>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                    style={[styles.input, !amountValid ? styles.invalidInput : null]}
                    keyboardType="number-pad"
                    onChangeText={(text) => validateAmount(text)}
                />
                <TouchableOpacity style={styles.payButton} onPress={submitPayment}>
                    <Text style={styles.payButtonText}>Pay Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#612CE8',
        paddingHorizontal: 16,
    },
    cardContainer: {
        backgroundColor: '#CB8AFF',
        borderRadius: 16,
        padding: 24,
        marginTop: 30,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 8,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        color: 'black',
        marginBottom: 16,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    payButton: {
        backgroundColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 26,
        paddingVertical: 12,
        marginTop: 40,
    },
    payButtonText: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    invalidInput: {
        borderColor: 'red',
    },
    invalidPicker: {
        borderWidth: 1,
        borderColor: 'red',
    },
});

export default MonthlyBill;