import { Route, Routes } from "react-router-dom";
import CheckPage from "./components/check/check";
import CheckResultPage from "./components/check/checkresult";
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
        <Route path="/search" element={<CheckPage />}/>
        <Route path="/checkresult" element={<CheckResultPage />}/>
      </Routes>
    </div>
  );
}

export default App;
