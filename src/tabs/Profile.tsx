import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const profile = {
        name: 'Ismail Aabrar',
        email: 'ia@gmail.com',
        password: '********',
        bloodGroup: 'B+',
       
      };
      const navigation = useNavigation();
    const Logout =  () => {
               navigation.navigate('SelectLogin')

    };
    
      const handleEditProfile = () => {
        console.log('Edit profile button pressed');
      };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Admin </Text>
            </View>
            <View style={styles.adminView}>

            <Image
                  source={require('../images/admin.png')}
                   style={styles.profileImage}
             />  
       <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{profile.name}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{profile.email}</Text>

      <Text style={styles.label}>Password:</Text>
      <Text style={styles.text}>{profile.password}</Text>

      <Text style={styles.label}>Blood Group:</Text>
      <Text style={styles.text}>{profile.bloodGroup}</Text>

      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton} onPress={() => Logout()}>
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
        height: 570,
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