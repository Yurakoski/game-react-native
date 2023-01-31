import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#97A1D8',
      height: height * 0.15,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 30,
    }, 
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });