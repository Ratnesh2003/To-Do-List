import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import LoginPage from "./scenes/loginPage/index.jsx"
import RegisterPage from "./scenes/registerPage/index.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
