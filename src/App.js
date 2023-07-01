import "./styles/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ResultPage } from "./pages/ResultPage";
import { Auth } from "./pages/AuthPage";
import { MainPage } from "./pages/MainPage";
import { AuthErrorPage } from "./pages/AuthErrorPage";
import { SearchPage } from "./pages/SearchPage";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

const fakeArr = [1, 2, 3, 4];

function App() {
  const [AuthStatus, setAuthStatus] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("AuthStatus") === 'false') {
      setAuthStatus(setAuthStatus(false))
    } else {
      setAuthStatus(setAuthStatus(true))
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<Auth />} />
        {/* Если пользователь не авторизован то редиректит на форму авторизации, иначе есть доступ к поиску и результатам */}
        <Route element={AuthStatus ? <Outlet /> : <Navigate to="/auth" />}>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/result' element={<ResultPage data={fakeArr} />} />
        </Route>
        <Route path="/error" element={<AuthErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
