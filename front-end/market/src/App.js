import Log from './componenet/Login/Login.js';
import Home from './componenet/home/Home.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {  
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Log/>}></Route>
        <Route path='/home' element={<Home/>}></Route>

      </Routes>
    </Router>
  ); 
}

export default App;
