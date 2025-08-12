import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import RequestEstimate from "./component/RequestEstimate";
import LearnMore from "./component/LearnMore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />

        <Route path="/request-a-free-estimate" element={<RequestEstimate />} />

        <Route
          path="/https://izimaid-sage.vercel.app/why-hire-us"
          element={<LearnMore />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
