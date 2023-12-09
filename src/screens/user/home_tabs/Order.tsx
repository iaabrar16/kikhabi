import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Orders = () => {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Ordered</Text>
            </View>
            
                        <View style={styles.orderItem}>
                            
                                        <View style={styles.itemView}>
                                        <Image source={require('../../../images/cake.png')} style={styles.itemImage}
                             />
                                            <View>
                                                <Text style={styles.nameText}>Cake</Text>
                                                <Text style={styles.nameText}>
                                                    {'Price: 600 ' +
                                                        
                                                        ', Quantity: 1 ' 
                                                        }
                                                </Text>
                                            </View>
                                            

                                            
                                        </View>
                                        
                           
                        </View>
            
        </View>
    );
};

export default Orders;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    orderItem: {
        width: '90%',

        borderRadius: 10,
        elevation: 5,
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 10,
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    itemView: {
        margin: 10,
        width: '100%',
        flexDirection: 'row',
    },
    nameText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginLeft: 20,
        marginTop: 5,
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
