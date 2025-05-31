import "./App.css";
import {
  Header,
  Welcome,
  Specials,
  Testimonials,
  About,
  Footer,
} from "./Components";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Welcome />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
