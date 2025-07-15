import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./component/HomePage";
import RequestEstimate from "./component/RequestEstimate";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<HomePage />} />

      <Route path="/request-a-free-estimate" element={<RequestEstimate />} />
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
