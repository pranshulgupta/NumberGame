import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Button , Keyboard, Alert} from 'react-native';
import Card from "../components/Card";
import Colors from "../constants/Colors"
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue);
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
            Alert.alert('Invalid Number', 'Number has to be number between 1 and 99', [{text: 'Okay', style: 'destructive' , onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmOutput

    if(confirmed){
        confirmOutput = <Card style={styles.summaryContainer}>
            <Text>Selected Number </Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="Start Game" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorect={false} keyboardType="numeric" maxLength={2} onChangeText={numberInputHandler} value={enteredValue}/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={resetInputHandler} color={Colors.primary}/>
                    <Button title="Confirm " onPress={confirmInputHandler} color={Colors.accent}/>
                </View>
            </Card>
            {confirmOutput}
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
       
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20
    }
})

export default StartGameScreen;