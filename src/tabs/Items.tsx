import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
const Items = () => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [items, setItems] = useState([]);
    useEffect(() => {
        getItems();
    }, [isFocused]);
    const getItems = () => {
        
    };

    const deleteItem = docId => {
       
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Items</Text>
            </View>
          
                        <View style={styles.itemView}>
                           
                            <Image source={require('../images/burger.png')} style={styles.itemImage}
                             />
                            <View style={styles.nameView}>
                                <Text style={styles.nameText}>Burger</Text>
                                <Text style={styles.descText}>Cheese Burger</Text>
                                <View style={styles.priceView}>
                                    <Text style={styles.priceText}>
                                        100 Taka
                                    </Text>
                                    <Text style={styles.discountText}>
                                       120 Taka
                                    </Text>
                                </View>
                            </View>
                            <View style={{ margin: 10 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('EditItem');
                                    }}>
                                    <Image
                                        source={require('../images/edit.png')}
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        deleteItem(item.id);
                                    }}>
                                    <Image
                                        source={require('../images/delete.png')}
                                        style={[styles.icon, { marginTop: 20 }]}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.itemView}>
                           
                           <Image source={require('../images/pizza.png')} style={styles.itemImage}
                            />
                           <View style={styles.nameView}>
                               <Text style={styles.nameText}>Pizza</Text>
                               <Text style={styles.descText}>Cheese Pizza</Text>
                               <View style={styles.priceView}>
                                   <Text style={styles.priceText}>
                                       180 Taka
                                   </Text>
                                   <Text style={styles.discountText}>
                                      220 Taka
                                   </Text>
                               </View>
                           </View>
                           <View style={{ margin: 10 }}>
                               <TouchableOpacity
                                   onPress={() => {
                                       navigation.navigate('EditItem');
                                   }}>
                                   <Image
                                       source={require('../images/edit.png')}
                                       style={styles.icon}
                                   />
                               </TouchableOpacity>
                               <TouchableOpacity
                                   onPress={() => {
                                       deleteItem(item.id);
                                   }}>
                                   <Image
                                       source={require('../images/delete.png')}
                                       style={[styles.icon, { marginTop: 20 }]}
                                   />
                               </TouchableOpacity>
                           </View>
                       </View>

                       <View style={styles.itemView}>
                           
                           <Image source={require('../images/pasta.png')} style={styles.itemImage}
                            />
                           <View style={styles.nameView}>
                               <Text style={styles.nameText}>Pasta</Text>
                               <Text style={styles.descText}>Cheese Pasta</Text>
                               <View style={styles.priceView}>
                                   <Text style={styles.priceText}>
                                       150 Taka
                                   </Text>
                                  
                               </View>
                           </View>
                           <View style={{ margin: 10 }}>
                               <TouchableOpacity
                                   onPress={() => {
                                       navigation.navigate('EditItem');
                                   }}>
                                   <Image
                                       source={require('../images/edit.png')}
                                       style={styles.icon}
                                   />
                               </TouchableOpacity>
                               <TouchableOpacity
                                   onPress={() => {
                                       deleteItem(item.id);
                                   }}>
                                   <Image
                                       source={require('../images/delete.png')}
                                       style={[styles.icon, { marginTop: 20 }]}
                                   />
                               </TouchableOpacity>
                           </View>
                       </View>

                       <View style={styles.itemView}>
                           
                           <Image source={require('../images/frenchfries.png')} style={styles.itemImage}
                            />
                           <View style={styles.nameView}>
                               <Text style={styles.nameText}>French Fries</Text>
                               <Text style={styles.descText}>Cheese French Fries</Text>
                               <View style={styles.priceView}>
                                   <Text style={styles.priceText}>
                                       60 Taka
                                   </Text>
                                   
                               </View>
                           </View>
                           <View style={{ margin: 10 }}>
                               <TouchableOpacity
                                   onPress={() => {
                                       navigation.navigate('EditItem');
                                   }}>
                                   <Image
                                       source={require('../images/edit.png')}
                                       style={styles.icon}
                                   />
                               </TouchableOpacity>
                               <TouchableOpacity
                                   onPress={() => {
                                       deleteItem(item.id);
                                   }}>
                                   <Image
                                       source={require('../images/delete.png')}
                                       style={[styles.icon, { marginTop: 20 }]}
                                   />
                               </TouchableOpacity>
                           </View>
                       </View>
                       <View style={styles.itemView}>
                           
                           <Image source={require('../images/cake.png')} style={styles.itemImage}
                            />
                           <View style={styles.nameView}>
                               <Text style={styles.nameText}>Cake</Text>
                               <Text style={styles.descText}>Choclate Cake</Text>
                               <View style={styles.priceView}>
                                   <Text style={styles.priceText}>
                                       600 Taka
                                   </Text>
                                   <Text style={styles.discountText}>
                                      700 Taka
                                   </Text>
                               </View>
                           </View>
                           <View style={{ margin: 10 }}>
                               <TouchableOpacity
                                   onPress={() => {
                                       navigation.navigate('EditItem');
                                   }}>
                                   <Image
                                       source={require('../images/edit.png')}
                                       style={styles.icon}
                                   />
                               </TouchableOpacity>
                               <TouchableOpacity
                                   onPress={() => {
                                       deleteItem(item.id);
                                   }}>
                                   <Image
                                       source={require('../images/delete.png')}
                                       style={[styles.icon, { marginTop: 20 }]}
                                   />
                               </TouchableOpacity>
                           </View>
                       </View>
               
        </View>
    );
};

export default Items;
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
    },
    itemImage: {
        width: 90,
        height: 90,
        borderRadius: 10,
        margin: 5,
    },
    nameView: {
        width: '53%',
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
    icon: {
        width: 24,
        height: 24,
    },
});
