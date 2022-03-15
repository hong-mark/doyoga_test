import { Route, Routes } from "react-router-dom";
import HomePage from './page/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
