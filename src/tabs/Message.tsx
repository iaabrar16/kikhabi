import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Message = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Messenger</Text>
            </View>
            
                <Text style={{ color: 'black', marginTop: 300, marginLeft: 70 }}>Future Work for Message Option</Text>
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
   
});

export default Message