
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    PixelRatio
} from 'react-native';

export default class Cell extends Component {
    static defaultProps = {
        rowData: {}
    };

    render() {
        const rowData = this.props.rowData;
        return (
            <TouchableOpacity style={styles.container}>

                {/*上边*/}
                <View style={styles.topView}>
                    <Image source={{uri: rowData.icon}} style={styles.icon}/>
                    <Text style={styles.name}>{rowData.name}</Text>
                    {rowData.vip ? <Image source={{uri: "vip"}} style={styles.vip} /> : <View />}
                </View>

                {/*下边*/}
                <View>
                    <Text style={styles.text}>{rowData.text}</Text>
                    {rowData.picture ? <Image source={{uri: rowData.picture}} style={styles.pictureStyle} /> : <View />}
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1 / PixelRatio.get() * 2,
        borderBottomColor: "#ccc",
        padding: 15
    },
    topView: {
        flexDirection: "row",
        marginBottom: 10
    },
    icon: {
        width: 40,
        height: 40

    },
    name: {
        marginLeft: 10,
        marginRight: 10

    },
    vip: {
        width: 14,
        height: 14

    },
    text: {
        marginBottom: 5,
        lineHeight: 20
    },
    pictureStyle: {
        width: 100,
        height: 100,
        // backgroundColor: "red",
        resizeMode: "contain"
    }
})
