import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export default function RulesAndRegulationsPage() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#035088', '#0682C0', '#03B7F2']}
                style={styles.background}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Rules and Regulations</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    {buildBulletText(
                        'Smoking, Alcohol & Narcotic consumption is strictly prohibited in and around the Hostel premises.'
                    )}
                    {buildBulletText(
                        'Strict adherence to the prescribed dress code is required. Decency in dressing & demeanor is a must.'
                    )}
                    {buildBulletText(
                        'Loitering in the Hostel campus during the class hours will not be appreciated.'
                    )}
                    {buildBulletText(
                        'The Management & Staff will not be responsible for personal belongings.'
                    )}
                    {buildBulletText('Late comers will be penalized.')}
                    {buildBulletText(
                        'Students must keep the Campus & Rooms clean. Defacing walls, equipment, furniture etc., is strictly prohibited.'
                    )}
                    {buildBulletText(
                        'Birthday/Other Celebrations are strictly prohibited in Hostel.'
                    )}
                    {buildBulletText(
                        'Students must turn off all the electrical equipments & lights before leaving their rooms.'
                    )}
                    {buildBulletText(
                        'Students are not allowed to use electric stoves, heaters etc in rooms except in designated places.'
                    )}
                    {buildBulletText(
                        'Students are not allowed to organize any group activities in their room.'
                    )}
                </ScrollView>
            </LinearGradient>
        </View>
    );
}

function buildBulletText(text) {
    return (
        <View style={styles.bulletTextContainer}>
            <MaterialIcons
                name="fiber-manual-record"
                size={14}
                color="white"
                style={styles.bulletIcon}
            />
            <Text style={styles.bulletText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        paddingHorizontal: 20,
    },
    titleContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
    },
    scrollView: {
        marginTop: 20,
    },
    bulletTextContainer: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    bulletIcon: {
        marginRight: 8,
        marginTop: 4,
    },
    bulletText: {
        flex: 1,
        fontSize: 18,
        color: 'white',
    },
});
