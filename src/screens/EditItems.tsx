import { View, Text, StyleSheet, TextInput, TouchableOpacity, PermissionsAndroid, Image, ScrollView, } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useRoute } from '@react-navigation/native';
const EditItem = ({ }) => {
    const route = useRoute();
    const [imageData, setImageData] = useState({
        // assets: [{ }],
    });
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [discountPrice, setDiscountPrice] = useState(
        // route.params.data.discountPrice,
    );
    const [description, setDescription] = useState();
    const [imageUrl, setImageUrl] = useState('');



    const uplaodImage = async () => {

    };

    const uploadItem = () => {

    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            // setImage(result.assets[0].uri);
        }

        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Edit Item</Text>
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
                        onChangeText={text => setName(parseFloattext)}
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
                        onPress={() => {
                            pickImage();
                        }}>
                        <Text>Pick Image From Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.uploadBtn}
                        onPress={() => {
                            uploadItem();
                        }}>
                        <Text style={{ color: '#Fff' }}>Upload Item</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    };
};
export default EditItem;
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


