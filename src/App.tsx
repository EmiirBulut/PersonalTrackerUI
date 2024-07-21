import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWithSlider from "./layouts/LayoutWithSlider/layout-with-slider";
import BooksPage from "./pages/Books/page-books";
import MoviesPage from "./pages/Movies/page-movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={
          <div>
            <h1>Home</h1>
            <h1>There will be a login page</h1>
            <h2>For now you can go to <a href="http://localhost:5173/books">/books page </a></h2>
          </div>
        }/>
        <Route path="/books" element={
          <LayoutWithSlider>
            <BooksPage />
          </LayoutWithSlider>
        }/>
        <Route path="/movies-tv-series" element={
          <LayoutWithSlider>
            <MoviesPage />
          </LayoutWithSlider>
        }/>
        <Route path="/books" element={
          <LayoutWithSlider>
            <BooksPage />
          </LayoutWithSlider>
        }/>
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;