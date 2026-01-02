import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Components/Structure/HomeLayout";
import LandingLayout from "./Components/Structure/LandingLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<LandingLayout />}/>
      </Route>
    </Routes>
  );
}

export default App;
