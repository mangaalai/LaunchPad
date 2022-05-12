import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import CountryRegion from "./components/CountryRegion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-page" element={<FormPage />} />
        <Route path="/country-region" element={<CountryRegion />} />
      </Routes>
    </>
  );
}

export default App;
