import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import CategorySelection from "./pages/CategorySelection";
import Home from "./pages/Home";
import NewEntry from "./pages/NewEntry";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategorySelection />} />
        <Route path="/entry/new" element={<NewEntry />} />
        <Route path="*" element={<h4>Page not found!</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
