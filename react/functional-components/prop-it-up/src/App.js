import './App.css';
import PersonCard from './components/PersonCard'

const App = () => {
  return (
    <div className="App">
      <PersonCard firstName={'Alexander'} lastName = {'Vice'} age={29} hairColor={'Blonde'}/>
      <PersonCard firstName={'Clark'} lastName = {'Kent'} age={34} hairColor={'Brown'}/>
      <PersonCard firstName={'Bruce'} lastName = {'Wayne'} age={33} hairColor={'Black'}/>
      <PersonCard firstName={'Diana'} lastName = {'Prince'} age={32} hairColor={'Black'}/>
    </div>
  );
}

export default App;
