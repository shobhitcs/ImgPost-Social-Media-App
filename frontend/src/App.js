import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
              <Route path='/' element={!user ? <Home/>: <Dashboard /> } />
              {/* <Route path='/login' element={!user ? <Login/>: <Navigate to="/"/>} />
              <Route path='/signup' element={!user ? <Signup/>: <Navigate to="/"/>} />
              <Route path='/edit' element={ <EditProfile /> } /> */}
        </Routes>
    </div>
  );
}

export default App;
