import {Route, Routes } from "react-router"
import Landing from "./containers/Landing"
import Reviews from "./containers/Reviews";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing}/>
      <Route path="/reviews" Component={Reviews}/>
    </Routes>
  );
}

export default Router;
