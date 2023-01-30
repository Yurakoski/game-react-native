import { View } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { Header } from './components';
import { StartGame, Game } from './screens'

const App = () => {

  const [userNumber, setUserNumber] = useState(null);

  const onHandlerStart = (selectedNumber) => {
    console.log("se guardo el numero ");
    setUserNumber(selectedNumber);
    console.log("selected number", selectedNumber);
    console.log("user number", userNumber);
  }

  const Content = () => (
    userNumber ? 
      (<Game selectedNumber={userNumber}/> )
    :
      (<StartGame onHandlerStart={onHandlerStart}  />));

  return (
    <View style={styles.container}>
      <Header title="Adivina el número"/>
      <Content />
    </View>
  );
}

export default App;