import { View } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { Header } from './components';
import { StartGame, Game, GameOver } from './screens'

const App = () => {

  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);

  const onHandlerStart = (selectedNumber) => {
    console.log("se guardo el numero ");
    setUserNumber(selectedNumber);
    console.log("selected number", selectedNumber);
    console.log("user number", userNumber);
  }

  const Content = () => {
    if (userNumber && guessRounds <= 0) {
      return <Game selectedNumber={ userNumber } onHandlerGameOver={ onHandlerGameOver }  />;
    }
    if (guessRounds > 0) {
      return <GameOver />
    }
    return <StartGame onHandlerStart={ onHandlerStart }  />;
  };

  const onHandlerGameOver = (rounds)=>{
    setGuessRounds(rounds);
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina el número"/>
      <Content />
    </View>
  );
}

export default App;