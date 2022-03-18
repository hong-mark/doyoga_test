import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/Navigation";
import HomePage from './page/home';
import ReservePage from "./page/reserve";
function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/reserve" element={<ReservePage />}/>
      </Routes>
    </div>
  );
}

export default App;
