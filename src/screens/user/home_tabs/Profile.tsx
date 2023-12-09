import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useUserContext } from '../../../context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
     const {authEmail} =useUserContext()
    const navigation = useNavigation()
      
      const userLogout = async () => {
        try {
            // Clear user authentication information from AsyncStorage or any other storage mechanism
            await AsyncStorage.removeItem('EMAIL');
            
            
            // Navigate to the login screen or any other appropriate screen
            navigation.navigate('SelectLogin'); // Assuming 'Login' is the name of your login screen
        } catch (error) {
            console.error('Error during logout', error);
            alert(`An error occurred during logout`)
        }
      }
      
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>User </Text>
            </View>
            <View style={styles.adminView}>

       <Text style={styles.label}>Welcome</Text>
      <Text style={styles.text}>{authEmail}</Text>



   
      <TouchableOpacity style={styles.editButton} onPress={userLogout}>
        <Text style={styles.editButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
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
    adminView: {
        
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        elevation: 4,
        marginTop: 10,
        borderRadius: 10,
        height: 580,
        marginBottom: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
      },
      label: {
        fontWeight: 'bold',
        marginTop: 10,

      },
      text: {
        marginBottom: 10,
      },
      editButton: {
        marginTop: 20,
        backgroundColor: '#111C26',
        height :50,
        width: 150,
        borderRadius: 5,
        marginLeft: 70
        
      },
      editButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15
      },
});

export default Profile