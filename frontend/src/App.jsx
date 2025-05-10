import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Post from "./pages/Post";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  </Router>
);

export default App;
