import "./App.css";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Banner } from "./components/banner";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Card />
      <Footer />
    </>
  );
}

export default App;
