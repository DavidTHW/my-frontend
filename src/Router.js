import logo from './logo.svg';
import './App.css';
import {Route, Routes } from "react-router"
import Landing from "./containers/Landing"

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing}/>
    </Routes>
  );
}

export default Router;
