import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Layout from "./layout";
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}