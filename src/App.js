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


          </Routes>

        </div>
      </div>

    </Router>
  );
}

export default App;
