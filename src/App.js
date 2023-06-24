
import "./styles/App.css";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { ResultPage } from './pages/ResultPage';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';


import './styles/App.css';
const fakeArr = [1, 2, 3, 4]
function App() {
  const auth = false
  return (

    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<>AuthPage</>} />
        {/* Если пользователь не авторизован то редиректит на форму авторизации, иначе есть доступ к поиску и результатам */}
        <Route element={auth ? <Outlet /> : <Navigate to="/auth" />}>
          <Route path='/search' element={<>SearchPage</>} />
          <Route path='/result' element={<ResultPage data={fakeArr} />} />
        </Route>
      </Routes>
      <Footer />

    </div>

  );
}

export default App;
