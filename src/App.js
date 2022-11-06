import './App.css';
import Home from './views/Home/Home';
import Nav from "./views/Nav/Nav";
import ListTodo from './views/TodoList/ListTodo';
import UseEffect from './views/UseEffect/UseEffect';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Covid from './views/UseEffect/Covid-19/Covid';
function App() {

  return (
    <Router>
      <div className="App">
        <Nav/>
        <div className='content'>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/todolist" element={<ListTodo/>}/>
              <Route exact path="/useeffect" element={<UseEffect/>}/>
              <Route exact path="/covid19" element={<Covid/>}/>


          </Routes>

        </div>
      </div>

    </Router>
  );
}

export default App;
