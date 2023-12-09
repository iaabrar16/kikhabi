import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
//   import storage from '@react-native-firebase/storage';
//   import firestore from '@react-native-firebase/firestore';
const Add = () => {
    const [imageData, setImageData] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    const uplaodImage = async () => {
       
    };

    const uploadItem = url => {
       
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Add Item</Text>
                </View>

                {imageData !== null ? (
                    <Image
                        source={{ uri: imageData.assets[0].uri }}
                        style={styles.imageStyle}
                    />
                ) : null}
                <TextInput
                    placeholder="Enter Item Name"
                    style={styles.inputStyle}
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    placeholder="Enter Item Price"
                    style={styles.inputStyle}
                    value={price}
                    onChangeText={text => setPrice(text)}
                />
                <TextInput
                    placeholder="Enter Item Discount Price"
                    style={styles.inputStyle}
                    value={discountPrice}
                    onChangeText={text => setDiscountPrice(text)}
                />
                <TextInput
                    placeholder="Enter Item Description"
                    style={styles.inputStyle}
                    value={description}
                    onChangeText={text => setDescription(text)}
                />

                <TouchableOpacity
                    style={styles.pickBtn}
                    onPress={() => { pickImage(); }}>
                    <Text>Pick Image From Gallery</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.uploadBtn}
                    onPress={() => {
                        uplaodImage();
                    }}>
                    <Text style={{ color: '#Fff' }}>Upload Item</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Add;
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
    inputStyle: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        alignSelf: 'center',
    },
    pickBtn: {
        width: '90%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    uploadBtn: {
        backgroundColor: '#111C26',
        width: '90%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
    },
    imageStyle: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
    },
});
