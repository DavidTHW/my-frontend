import {Route, Routes } from "react-router"
import Landing from "./containers/Landing"
import Series from "./containers/Series";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing}/>
      <Route path="/series" Component={Series} />
    </Routes>
  );
}

export default Router;
