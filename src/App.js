import './App.css';
import Home from './Component/HomePage/Home';
import LoginPage from './Component/LoginPage';


function App() {
  return (
    <div className="App">
      {
      (localStorage.getItem("users")==undefined || localStorage.getItem("users")==null ) ? 
      <LoginPage /> : <Home/> 
      }
    </div>
  );
}

export default App;
