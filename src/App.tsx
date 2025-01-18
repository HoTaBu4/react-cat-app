import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Images from "./components/Images/Images";
import Liked from "./components/Favorite/Favorite"; 
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="images" element={<Images />} />
          <Route path="Favorite" element={<Liked />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
