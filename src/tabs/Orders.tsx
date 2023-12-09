import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Orders = () => {
    const handleAccept = () => {
        console.warn('Order accepted');
      };
    
      const handleReject = () => {
        console.warn('Order rejected');
      };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Orders</Text>
            </View>
            <View style={styles.customerView}>
            <Text style={styles.label}>Customer 1</Text>
                     <Text style={styles.label}>Name:</Text>
                      <Text style={styles.text}>Aabrar</Text>

                <Text style={styles.label}>Ordered:</Text>
                 <Text style={styles.text}>Pizza</Text>

                <Text style={styles.label}>Payment Type:</Text>
                 <Text style={styles.text}>Cash on Delivery</Text>

                 <Text style={styles.label}>Address:</Text>
                 <Text style={styles.text}>Fuller Road, Dhaka </Text>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
                style={[ styles.acceptButton]}
                onPress={handleAccept}>
             <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
             style={[ styles.rejectButton]}
             onPress={handleReject}>
            <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>

      </View>
      </View>

      <View style={styles.customerView}>
            <Text style={styles.label}>Customer 2</Text>
                     <Text style={styles.label}>Name:</Text>
                      <Text style={styles.text}>Ismail</Text>

                <Text style={styles.label}>Ordered:</Text>
                 <Text style={styles.text}>Burger</Text>

                <Text style={styles.label}>Payment Type:</Text>
                 <Text style={styles.text}>Cash on Delivery</Text>

                 <Text style={styles.label}>Address:</Text>
                 <Text style={styles.text}>Azimpur Road, Dhaka </Text>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
                style={[ styles.acceptButton]}
                onPress={handleAccept}>
             <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
             style={[ styles.rejectButton]}
             onPress={handleReject}>
            <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>

      </View>
      </View>
      <View style={styles.customerView}>
            <Text style={styles.label}>Customer 3</Text>
                     <Text style={styles.label}>Name:</Text>
                      <Text style={styles.text}>Aabrar</Text>

                <Text style={styles.label}>Ordered:</Text>
                 <Text style={styles.text}>Pizza</Text>

                <Text style={styles.label}>Payment Type:</Text>
                 <Text style={styles.text}>Cash on Delivery</Text>

                 <Text style={styles.label}>Address:</Text>
                 <Text style={styles.text}>Fuller Road, Dhaka </Text>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
                style={[ styles.acceptButton]}
                onPress={handleAccept}>
             <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
             style={[ styles.rejectButton]}
             onPress={handleReject}>
            <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>

      </View>
      </View>
    </ScrollView>
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
    label: {
        fontWeight: 'bold',
        marginTop: 10,
      },
      text: {
        marginBottom: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      acceptButton: {
        flex: 1,
        marginRight: 10,
        backgroundColor: 'green',
        height: 30
      },
      rejectButton: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: 'red',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:5,
      },
      customerView: {
        
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        elevation: 4,
        marginTop: 10,
        borderRadius: 10,
        height: 370,
        marginBottom: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        
    },
});

export default Orders