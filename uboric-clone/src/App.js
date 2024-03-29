
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
