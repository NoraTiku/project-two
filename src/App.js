import logo from './logo.svg';
import './App.css';
import Numbers from './Numbers';


const App = () => {

  const styles = {
    container: {
      padding : "9em",
      backgroundColor: "olive"
    }
  };
  return (
    <div style= {styles.container}>
    <h1>Mini Project Two App!!!</h1>
    <h1>Hello There!</h1>

    <Numbers firstNumber = {25} secondNumber = {25}/>
    <Numbers firstNumber = {30} secondNumber = {40}/>
    <Numbers firstNumber ={95} secondNumber = {80}/>
    
    

    </div>
  );
}

export default App;
