import './App.css';
import Calculator from './components/Calculator';
// import Login from './components/Login';
// import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
// import Signup from './components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={
            <Calculator />
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
