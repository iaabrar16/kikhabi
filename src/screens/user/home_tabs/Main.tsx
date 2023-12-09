import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
let userId = '';
const Main = () => {
  


    const [items, setItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {

    }, []);

    const fetchMealItems = async () => {
        try {
          const response = await fetch('http://localhost:3000/meal');
          if (!response.ok) {
            throw new Error('Failed to fetch meal items');
          }
    
          const mealItems = await response.json();
          setItems(mealItems);
          console.log(items)
        } catch (error) {
          console.error('Error fetching meal items:', error.message);
        }
    }
    fetchMealItems()

    return (
        <View style={styles.container}>
            <Header
                title={'kiKhabi?'}
                icon={require('../../../images/cart.png')}
                count={cartCount}
                onClickIcon={() => {
                    navigation.navigate('Cart');
                }}
            />
            
            
                        <View style={styles.itemView}>
                        <Image source={require('../../../images/burger.png')} style={styles.itemImage}
                             />
                            <View style={styles.nameView}>
                                <Text style={styles.nameText}>Burger</Text>
                                <Text style={styles.descText}>Cheese Burger</Text>
                                <View style={styles.priceView}>
                                    <Text style={styles.priceText}>
                                    100 Taka
                                    </Text>
                                    
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.addToCartBtn}
                                onPress={() => {

                                }}>
                                <Text style={{ color: '#fff' }}>Add To cart</Text>
                            </TouchableOpacity>
                        </View>
                        

                       
             
        </View>
    );
};

export default Main;
const styles = StyleSheet.create({
    container: { flex: 1 },
    itemView: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        elevation: 4,
        marginTop: 10,
        borderRadius: 10,
        height: 100,
        marginBottom: 10,
        alignItems: 'center',
    },
    itemImage: {
        width: 90,
        height: 90,
        borderRadius: 10,
        margin: 5,
    },
    nameView: {
        width: '30%',
        margin: 10,
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameText: {
        fontSize: 18,
        fontWeight: '700',
    },
    descText: {
        fontSize: 14,
        fontWeight: '600',
    },
    priceText: {
        fontSize: 18,
        color: 'green',
        fontWeight: '700',
    },
    discountText: {
        fontSize: 17,
        fontWeight: '600',
        textDecorationLine: 'line-through',
        marginLeft: 5,
    },
    addToCartBtn: {
        backgroundColor: '#111C26',
        padding: 10,
        borderRadius: 10,
    },
});
