
import './App.css';
import {Routes,Route} from 'react-router-dom'
import CounterApp from './Pages/CounterApp';
import TodoApp from './Pages/TodoApp';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/'element={<CounterApp/>}/>
       <Route path='/TodoApp'element={<TodoApp/>}/>
     </Routes>
    </div>
  );
}

export default App;
