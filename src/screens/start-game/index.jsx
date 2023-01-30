import { React, useState } from "react";
import { View, Text, TextInput, Button, Alert} from "react-native";
import Card from "../../components/card";
import NumberContainer from "../../components/number-container";
import { styles } from "./styles";

const StartGame = ({ onHandlerStart }) =>{

    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const onHandlerStartGame = () => {
        console.log("HOLIIIII");
        onHandlerStart(selectedNumber);
    }

    const onHandlerChange = (text) =>{
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    }

    const onHandlerReset = () => {
        setEnteredValue("");
        setConfirmed(false);
    }

    const onHandlerConfirmed = () => {
        const choosenNumber = parseInt(enteredValue, 10) 
        if (choosenNumber==NaN || choosenNumber<=0 || choosenNumber>99){
            Alert.alert("Número no válido", 
                        "Debe elegir un número entre 1 y 99", 
                        [{text: "Aceptar", style: "destructive", onPress: onHandlerReset}]);
        }else{
            setConfirmed(true);
            setSelectedNumber(choosenNumber);
            setEnteredValue("");
        }
    }

    const Confirmed = () => 
        //console.log("confirmado?", confirmed)
        confirmed ? (   
            <Card style={styles.confirmedContainer}>
                <Text style={styles.confirmedTitle}>Número seleccionado</Text>
                <NumberContainer number={selectedNumber} />
                <Button title="Iniciar juego" color="green" onPress={onHandlerStartGame} />
            </Card>
        ): null;
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <Card style={styles.inputContainer}>
                <Text>Ingrese un número</Text>
                <TextInput 
                    keyboardType="numeric" 
                    style={styles.input} 
                    placeholder="0" 
                    maxLength={2}
                    value={enteredValue}
                    onChangeText={onHandlerChange}
                    />
            <View style={styles.buttonContainer}>
                <Button 
                title="Reiniciar"
                onPress={onHandlerReset}
                color="red"
                />
            <Button 
                title="Aceptar"
                onPress={onHandlerConfirmed}
                color="blue"
                />
            </View>
            </Card>
            <Confirmed />
        </View>
    )
}

export default StartGame;