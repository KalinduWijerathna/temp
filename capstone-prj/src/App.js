import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  Welcome,
  Specials,
  Testimonials,
  About,
  Footer,
  Reserve,
} from "./Components/index.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Welcome />
                  <Specials />
                  <Testimonials />
                  <About />
                </>
              }
            />
            <Route path="/reserve" element={<Reserve />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
