import React from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';

const CharacterCard = ({ char }) => {
    return (
        <TouchableOpacity>
            <View>
                <Image />
                <View>
                    <Text> {char.name} </Text>
                    <Button title='Favoriler' onPress={null} />
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default CharacterCard; 
