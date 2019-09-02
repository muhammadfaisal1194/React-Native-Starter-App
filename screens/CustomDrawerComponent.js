import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


class CustomDrawerComponent extends Component {

    constructor() {
        super();

        this.proileImage =
            'http://trek.tempservicesoftware.com/assets/images/tempservice.png';
        this.items = [
            {
                navOptionThumb: 'dashboard',
                navOptionName: 'Dashboard',
                screenToNavigate: 'Dashboard',
            },
            {
                navOptionThumb: 'error',
                navOptionName: 'About',
                screenToNavigate: 'About',
            }
        ];
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.sideMenuContainer}>

                    <Image
                        source={{ uri: this.proileImage }}
                        style={styles.sideMenuProfileIcon}
                    />

                    <Text style={styles.profileImage}>Admin</Text>

                    <View
                        style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: 'white',
                            marginTop: 15,
                        }}
                    />

                    <View style={{ width: '100%' }}>
                        {this.items.map((item, key) => (
                            <View key={key}>
                                <TouchableOpacity
                                    onPress={() => {
                                        global.currentScreenIndex = key;
                                        setTimeout(() => {
                                            this.props.navigation.navigate(item.screenToNavigate);
                                        }, 0)
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            backgroundColor:'#ffffff',
                                        }}>
                                        <View style={{ marginRight: 10, marginLeft: 20 }}>
                                            <Icon name={item.navOptionThumb} size={20} color="rgb(56, 56, 56)" />
                                        </View>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                marginLeft: 20,
                                                marginTop: 7,
                                                color: global.currentScreenIndex === key ? 'blue' : 'black',
                                            }}
                                        >
                                            {item.navOptionName}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default CustomDrawerComponent;

const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(56, 56, 56)',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
    profileImage: {
        color: 'white',
        fontSize: 18
    }
});
