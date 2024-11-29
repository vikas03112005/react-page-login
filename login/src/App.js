import { Route, Routes } from 'react-router-dom';

import './App.css';

import Edite from './component/Edite';
// import Create from './component/Create';
import History from './component/History';
import New from './component/New';
function App() {
  return (
    <div>
    
 <Routes>
  <Route path='/' element={<New/>}/>
  <Route path='/History' element={<History/>}/>
 <Route path='/Edite' element={<Edite/>}/>
 </Routes>

    </div>
  );
}

export default App;
