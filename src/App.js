import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Card } from "./components/card";
import { Header } from "./components/header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Card />
    </QueryClientProvider>
  );
}

export default App;
