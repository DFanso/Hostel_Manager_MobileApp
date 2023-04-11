import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#612CE8', '#904ECC', '#9B1BC6']}
                style={styles.background}
            >
                <View style={styles.appBar}>

                </View>
                <Text style={styles.title}>Log In</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri:
                                'https://drive.google.com/uc?id=1IrNKNqXEmkkW1iMiHoUZHt62fLnVpvAE',
                        }}
                        style={styles.image}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StudentLoginPage')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>STUDENT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ParentLoginPage')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>PARENT</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBar: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBarTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 70,
    },
    imageContainer: {
        marginTop: 50,
        marginBottom: 40,
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 22,
        color: 'white',
    },
});
