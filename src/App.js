import * as React from "react";
import './styles/App.css';
import { Route, Routes } from "react-router-dom";
import Authorization from "./components/Authorization/Authorization";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Authorization/>}></Route>
    </Routes>

  );
}

export default App;
