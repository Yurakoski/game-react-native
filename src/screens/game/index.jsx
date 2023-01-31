import React, { useEffect, useState, useRef } from "react";
import { View, Text, Button, Alert } from "react-native";
import { styles } from "./styles";
import { Card, NumberContainer } from "../../components";

const generateRandomNumber = (min, max, exclude) => {
    min= Math.ceil(min)
    max = Math.floor(max)
    const randonNumber = Math.floor(Math.random() * (max - min) + min)
    if (randonNumber === exclude){
        return generateRandomNumber(min, max, exclude);
    }else{
        return randonNumber;
    }
}

const Game = ({ selectedNumber, onHandlerGameOver}) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1,100,selectedNumber))
    const [ rounds, setRounds ] = useState(0);

    const currentLow= useRef(1);
    const currentHigh= useRef(100);

    const onHandlerNextGuess = (direction) => { 
        if (( direction === "lower" && currentGuess < selectedNumber) || 
           (direction === "greater" && currentGuess > selectedNumber))
        {
            Alert.alert("Error", "Opción incorrecta", [
                { text: "Aceptar", style: "cancel" },
              ]);
            return;
        }
    
    if (direction === "lower"){
        currentHigh.current = currentGuess;
    }else{
        currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds((rounds) => rounds + 1);
    };

    useEffect(() => {
        if (currentGuess === selectedNumber) onHandlerGameOver(rounds);
    },[currentGuess, selectedNumber, onHandlerGameOver]);

    return(
        <View style={styles.container}>
            <Card >
                <Text style={styles.title}>Número del oponente: {currentGuess}</Text>
                <NumberContainer number={currentGuess} />
                <View style={styles.buttonContainer}>
                    <Button title="Menor" onPress={()=> onHandlerNextGuess("lower") } color="red" />
                    <Button title="Mayor" onPress={()=> onHandlerNextGuess("greater") } color="blue" />
                </View>
            
            </Card>    
        </View>
    )
}

export default Game;