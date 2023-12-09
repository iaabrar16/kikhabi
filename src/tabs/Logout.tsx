import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
    const navigation = useNavigation();
    const Logout =  () => {
               navigation.navigate('SelectLogin')

    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Logout</Text>
            </View>
            <TouchableOpacity
                style={styles.uploadBtn}
                onPress={() => Logout()}>
                <Text style={{ color: '#Fff' }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60,
        width: '100%',
        backgroundColor: '#fff',
        elevation: 5,
        paddingLeft: 20,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: '700',
    },
    uploadBtn: {
        backgroundColor: '#111C26',
        width: '80%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 350,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Logout