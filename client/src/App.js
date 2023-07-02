import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import StreamerPage from "./StreamerPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/streamer/:id" element={<StreamerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
