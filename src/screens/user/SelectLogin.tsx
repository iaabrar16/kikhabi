import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translation } from '../../utils';
import LanguageModal from '../common/LanguageModal';
import { useNavigation } from '@react-navigation/native';

const SelectLogin = () => {
    const [langModalVisible, setLangModalVisible] = useState(false);
    const [selectedLang, setSelectedLang] = useState(0);
    const navigation = useNavigation();

    const saveSelectedLang = async index => {
        await AsyncStorage.setItem('LANG', index + '');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../images/logo.png')} style={styles.logo}
            />


            <Text style={styles.title}>
                {selectedLang == 0
                    ? translation[0].English
                    : selectedLang == 1
                        ? translation[0].বাংলা
                        : null}
            </Text>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    navigation.navigate('Login');
                }}>
                <Text style={styles.btnText}>Admin Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    navigation.navigate('UserLogin');
                }}>
                <Text style={styles.btnText}>User Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.selectLangaugeBtn}
                onPress={() => {
                    setLangModalVisible(!langModalVisible);
                }}>
                <Text>Select Language</Text>
            </TouchableOpacity>
            <LanguageModal
                langModalVisible={langModalVisible}
                setLangModalVisible={setLangModalVisible}
                onSelectLang={x => {
                    setSelectedLang(x);
                    saveSelectedLang(x);
                }}
            />
        </View>
    );
};

export default SelectLogin;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 10
    },
    btn: {
        backgroundColor: '#111C26',
        height: 50,
        width: '90%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    btnText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
    },
    selectLangaugeBtn: {
        width: '50%',
        height: 50,
        borderWidth: 0.2,
        borderRadius: 10,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    logo: {
        height: 120,
        width: 120,
        borderRadius: 150,
        marginLeft: 0,
    }
});
