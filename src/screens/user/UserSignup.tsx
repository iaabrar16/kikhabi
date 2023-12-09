import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Loader from '../common/Loader';
import { useNavigation } from '@react-navigation/native';
import { translation } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserContext } from '../../context/userContext';

const UserSignup = () => {
    const { authEmail, setAuthEmail } = useUserContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [mobile, setMobile] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const [selectedLang, setSelectedLang] = useState(0);
    useEffect(() => {
        getLang();
    }, []);

    const getLang = async () => {
        console.log(await AsyncStorage.getItem('LANG'));
        setSelectedLang(parseInt(await AsyncStorage.getItem('LANG')));
    };
    const signUp = async (email, password) => {
        try {
            setModalVisible(true);
    
            const response = await fetch('http://192.168.0.122:3000/auth/signup', {
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
                setAuthEmail(email);

                console.log('Signup successful', result);
            } else {
                console.error('Signup failed');
                const result = await response.json();
                alert(`Signup failed. Details: ${result.message}`);
            }
        } catch (error) {
            console.error('Error during signup', error);
            alert(`An error occurred. Details: ${error.message}`);
        }
    };
    


    return (
        <View style={styles.container}>
            <Image source={require('../../images/logo.png')} style={styles.logo}
            />
            <Text style={styles.title}>
                {selectedLang == 0
                    ? translation[3].English
                    : selectedLang == 1
                        ? translation[3].বাংলা
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
        if (
            email !== '' &&
            password !== '' 
        ) {
            signUp(email, password);  // Pass email and password to signUp function
        } else {
            alert('Please Enter Data');
        }
    }}>
    <Text style={styles.btnText}>Sign up</Text>
</TouchableOpacity>

            <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};

export default UserSignup;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000',
        marginTop: 20,
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
    logo: {
        height: 150,
        width: 150,
        borderRadius: 150,
        marginLeft: 120,
        marginTop: 100
    }
});
