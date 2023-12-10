import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';
import { translation } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../../context/userContext';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedLang, setSelectedLang] = useState(0);
    const navigation = useNavigation();
    const { authEmail, setAuthEmail } = useUserContext();

    useEffect(() => {
        getLang();
    }, []);

    const getLang = async () => {
        console.log(await AsyncStorage.getItem('LANG'));
        setSelectedLang(parseInt(await AsyncStorage.getItem('LANG')));
    };

    const userLogin = async () => {
        try {
            setModalVisible(true);

            const response = await fetch('http://192.168.0.122:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            setModalVisible(false);

            if (response.ok) {
                const result = await response.json();
                
                setAuthEmail(email)
                goToNextScreen(email)

            } else {
                console.error('Login failed');
                const result = await response.json();
                alert(`Login failed. Details: ${result.message}`);
            }
        } catch (error) {
            console.error('Error during login', error);
            alert(`An error occurred. Details: ${error.message}`);
        }
    };
    const goToNextScreen = async (email) => {
        await AsyncStorage.setItem('EMAIL', email);
        
        navigation.navigate('Home');
    };

    
    return (
        <View style={styles.container}>

            <Image source={require('../../images/logo.png')} style={styles.logo}
            />
            <Text style={styles.title}>
                {selectedLang == 0
                    ? translation[1].English
                    : selectedLang == 1
                        ? translation[1].বাংলা
                        : null}
            </Text>
            <TextInput
                style={styles.inputStyle}
                placeholder={'Enter Email Id'}
                value={email}
                onChangeText={txt => setEmail(txt)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder={'Enter Password '}
                value={password}
                onChangeText={txt => setPassword(txt)}
            />
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                    if (email !== '' && password !== '') {
                        userLogin();
                    } else {
                        alert('Please Enter Data');
                    }
                }}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <Text
                style={styles.createNewAccount}
                onPress={() => {
                    navigation.navigate('UserSignup');
                }}>
                Create New Account
            </Text>
            <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};

export default UserLogin;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000',
        marginTop: 30,
        alignSelf: 'center',
    },
    inputStyle: {
        paddingLeft: 20,
        height: 50,
        alignSelf: 'center',
        marginTop: 30,
        borderWidth: 0.5,
        borderRadius: 10,
        width: '90%',
    },
    loginBtn: {
        backgroundColor: '#111C26',
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    createNewAccount: {
        fontSize: 18,
        fontWeight: '600',
        textDecorationLine: 'underline',
        marginTop: 50,
        alignSelf: 'center',
    },
    logo: {
        height: 150,
        width: 150,
        borderRadius: 150,
        marginLeft: 120,
        marginTop: 120
    }
});
