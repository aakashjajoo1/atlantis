import './App.css';
import Login from './components/login';

function App() {
  const users = [['admin', '123']];
  localStorage.setItem('users', JSON.stringify(users));
  return (
    <div className="App">
      <Login />
    </div>
  );
}


export default App;
