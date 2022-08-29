import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Card } from "./components/card";
import { Header } from "./components/header";
import {Footer} from "./components/footer"
import { Banner } from "./components/banner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Banner/>
      <Card />
      <Footer/>
    </QueryClientProvider>
  );
}

export default App;
