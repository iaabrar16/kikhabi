import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { translation } from '../utils';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedLang, setSelectedLang] = useState(0);
    const navigation = useNavigation();
    const adminLogin = () => {
        if(email=='ia@gmail.com' && password == '123456'){
            navigation.navigate('Dashboard');
        }else{
            alert('Please enter admin data')
        }
        

    };
    useEffect(() => {
        getLang();
    }, []);

    const getLang = async () => {
        console.log(await AsyncStorage.getItem('LANG'));
        setSelectedLang(parseInt(await AsyncStorage.getItem('LANG')));
    };

    return (
        <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.logo}
            />
            <Text style={styles.title}>
                {selectedLang == 0
                    ? translation[2].English
                    : selectedLang == 1
                        ? translation[2].বাংলা
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
                    adminLogin(email, password);
                   
                }}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000',
        marginTop: 50,
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
        marginTop: 120
    }
});
