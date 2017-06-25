/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, Image} from "react-native";
import Task1 from "./example/task1.js";

export default class test extends Component {

    render() {
        return (

            <View style={styles.container}>
                <Task1/>
            </View>

        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        margin: 5,
        borderWidth: 1,
        borderColor: '#d2d2d2'
    },
});
AppRegistry.registerComponent('test', () => test);
