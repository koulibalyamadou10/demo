import {Hero} from "./components/hero/Hero";
import {Header} from "./components/header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Hero/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
