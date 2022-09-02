import "./App.css";
import { Main } from "./components/main/main";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Banner } from "./components/banner";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  );
}

export default App;
