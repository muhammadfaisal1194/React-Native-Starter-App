import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default class AboutScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'About',
            headerTitleStyle: {
                paddingTop: 0,
                marginLeft: 80,
                fontSize: 16,
                color: 'white'
            },
            headerStyle: {
                backgroundColor: 'rgb(56, 56, 56)'
            },
            headerLeft: (
                <TouchableOpacity  onPress = {() => navigation.openDrawer()}>
                    <Icon
                        name = "md-menu"
                        size = {25}
                        color = "white"
                        style = {{paddingLeft : 20}}
                    />
                </TouchableOpacity>
            ),
        };
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>About Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
