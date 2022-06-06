import Home from './Pages/Home';
import Question from './Pages/Question';
import Result from './Pages/Result';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/question' element={<Question />} />
      <Route path='/result' element={<Result />} />
    </Routes>
  );
}

export default App;
