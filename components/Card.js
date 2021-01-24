import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20
    }
})

export default Card;