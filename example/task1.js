/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, Image} from "react-native";

export default class Task1 extends Component {

    render() {
        return (
            <View>
                <View style={styles.title}>
                    <Text style={styles.tfont}>CRM</Text>
                </View>
                <View style={styles.wrap}>
                    <View style={styles.image}>
                        <Image source={require('./icon.png')}/>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.iname}>
                            <Text style={styles.itext}>客户管理</Text>
                        </View>
                        <View style={styles.number}>
                            <View>
                                <Text style={styles.ntext}>人数</Text>
                            </View>
                            <View style={styles.nnumber}>
                                <Text style={styles.ntext}>50</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.wrap}>
                    <View style={styles.image}>
                        <Image source={require('./icon2.png')}/>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.iname}>
                            <Text style={styles.itext}>业务信息</Text>
                        </View>
                        <View style={styles.number}>
                            <View>
                                <Text style={styles.ntext}>单数</Text>
                            </View>
                            <View style={styles.nnumber}>
                                <Text style={styles.ntext}>50</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // 在此处进行样式编写,css语法
    title: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191970',
        marginTop: 20,
        height: 40,
    },
    tfont: {
        fontSize: 23,
        color: 'white',
        textAlign: 'center'
    },
    wrap: {
        flexDirection: 'row',
        backgroundColor: "#ffffff",
        height: 102,
        marginTop: 16,
    },
    image: {
        width: 90,
        height: 90,
        marginLeft: 10,
        marginBottom: 10,
    },
    item: {
        flexDirection: 'column',
        width: 100, height: 100,
        margin: 10,
    },
    iname: {
        marginTop: 18
    },
    itext: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    number: {
        flexDirection: 'row',
        marginTop: 10,
    },
    ntext: {
        color: 'darkgray',
        fontSize: 18,
    },
    nnumber: {
        marginLeft: 10,
        marginTop: -2
    },
});
