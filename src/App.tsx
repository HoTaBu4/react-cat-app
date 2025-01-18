import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Images from "./components/ImagesPage/ImagesPage";
import Liked from "./components/Favorite/Favorite"; 
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="images" replace />} />
            <Route path="images"  element={<Images />} />
            <Route path="Favorite" element={<Liked />} />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
