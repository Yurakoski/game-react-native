import React, { useState } from "react";
import { View, Text, Button } from "react-native";
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

const Game = ({ selectedNumber}) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1,100,selectedNumber))

    return(
        <View style={styles.container}>
            <Card >
                <Text style={styles.title}>Game screen</Text>
                <NumberContainer number={currentGuess} />
                <View style={styles.buttonContainer}>
                    <Button title="Menor" onPress={()=>{}} color="red" />
                    <Button title="Mayor" onPress={()=>{}} color="blue" />
                </View>
            
            </Card>    
        </View>
    )
}

export default Game;