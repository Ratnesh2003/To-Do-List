import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import LoginPage from "./scenes/loginPage/index.jsx"
import RegisterPage from "./scenes/registerPage/index.jsx";
import TaskPage from './scenes/taskPage/index.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/tasks' element={<TaskPage></TaskPage>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
