import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors'

const Header = props => {
    return(
        <View style={styles.Header}> 
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    Header: {
      width: "100%",
      height: 90,
      paddingTop: 36,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      color: 'black',
      fontSize: 18,
      fontFamily: 'open-sans-bold'
    }
  });