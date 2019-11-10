/**
 * Settings Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    Image,
    Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import Slider from '@react-native-community/slider';


let f1 = function () {
    alert("pressed third button")
}
let f2 = function (func) {
    const options = { noData: true, };
    ImagePicker.launchImageLibrary({ options }, response => {
        if (response.path) {
            func.updateParentState("file://" + response.path);
            const setData = async () => {
                try {
                    await AsyncStorage.setItem('@ProfilePicture', "file://" + response.path);

                } catch (error) {
                    console.log(error);
                }
            }
            setData();
        }
    })
}
let f3 = function (func) {
    func.updateParentState(0);
    let rem = async () => {
        try {
            await AsyncStorage.removeItem('@ProfilePicture')
        } catch (e) {
            console.log(e);
        }
    }
    rem()
}

function HSLToRGB(h) {
    // Must be fractions of 1

    s = 1;
    l = 0.5;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return "rgb(" + r + "," + g + "," + b + ")";
}
export class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 0,
            rgb: HSLToRGB(0),
        }
        
        this.DATA = [
            {
                id: '1',
                title: 'Change Profile Picture',
                icon: 'photo',
                onpress: f2,
            },
            {
                id: '2',
                title: 'Delete Picture',
                icon: 'trash-o',
                onpress: f3,
            },
            {
                id: '3',
                title: 'Third Item',
                icon: 'close',
                onpress: f1,
            },
        ];
    }
    updateParentState(data) {
        this.props.screenProps.postMessage(data);
    }
    updateColor = (color) => {
        this.setState({color: color});
        this.setState({rgb: HSLToRGB(color)});
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{ width: '100%', flex: 1 }}>
                    {this.DATA.map((item) => (
                        <TouchableHighlight
                            onPress={() => { item.onpress(this) }}
                            style={styles.item}
                            underlayColor="rgba(160,160,160,20)"
                            key={item.title}
                        >
                            <View style={styles.item}>
                                <View style={{ marginRight: "1%", marginLeft: 3, width: "9%", }}>
                                    <Icon name={item.icon} size={25} color="#808080" style={{ textAlign: 'center' }} />
                                </View>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                    <View style={{ height: 80 ,width: '100%', marginBottom: "4%", flexDirection: 'row', justifyContent:'center', marginTop: '5%'}}>
                        <Slider
                        {...this.props}
                            style={{ width: '75%', height: 40, alignSelf: 'center' }}
                            minimumValue={0}
                            maximumValue={359}
                            minimumTrackTintColor="rgba(160,160,160,20)"
                            maximumTrackTintColor="#000000"
                            onValueChange={value => this.updateColor(value)}
                            thumbTintColor={this.state.rgb}
                        />
                        <TouchableHighlight onPress={() => {alert(this.state.rgb)}} 
                            style={{borderRadius: 1000, width: '100%', flex: .6, alignSelf: 'center', justifyContent: 'center'}}>
                            <Image
                                style={{width: '100%', aspectRatio: 1, borderRadius: 1000, alignSelf: 'center'}} 
                                backgroundColor={this.state.rgb}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
};
export default SettingsScreen;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(244,244,244)',
        marginTop: 3,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: "baseline",
    },
    item: {
        backgroundColor: 'rgba(230,230,230,20)',
        padding: 0,
        marginVertical: 2,
        width: '100%',
        height: 45,
        flexDirection: "row",
        alignItems: 'center',

    },
    title: {
        fontSize: 16,
        textAlignVertical: "center",
        alignSelf: 'center',
    },
});
