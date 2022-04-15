
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup'
import Todo from './components/Todo'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginSignup />} />
        <Route exact path='/todo' element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
