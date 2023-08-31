import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Cocktails from "./components/Cocktails/Cocktails";
import SingleCocktail from "./components/Cocktails/SingleCocktail";
import Ingredients from "./components/Ingredients/Ingredients";
import IngredientDetails from "./components/Ingredients/IngredientDetails";
import Footer from "./components/Home/Footer/Footer";
import SpecialMenu from "./components/Home/Menu/SpecialMenu";
import Newsletter from "./components/Home/Footer/Newsletter";
import History from "./components/History/History";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import ScrollToTop from "./components/Hooks/ScrollToTop";
import NamedCocktail from "./components/Cocktails/NamedCocktail";
import Wine from "./components/Wine/Wine";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

const queryClient = new QueryClient();
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const Layout = () => {
    return (
      <div className="App">
        {loading ? (
          <div className="loader">
            {" "}
            <RingLoader
              color={"#DCCA87"}
              loading={loading}
              size={150}
              speedMultiplier={1}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
          </>
        )}
      </div>
    );
  };

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="drinks" element={<SpecialMenu />} />
            <Route path="history" element={<History />} />
            <Route path="contact" element={<Newsletter />} />
            <Route path="cocktails" element={<Cocktails />} />
            {/* <Route path="cocktails/:id" element={<SingleCocktail />} /> */}
            <Route path="cocktails/:name" element={<NamedCocktail />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route
              path="/ingredients/:ingName"
              element={<IngredientDetails />}
            />
            <Route path="/wine" element={<Wine />} />
            {/* <Route path="/beer" element={<Beer />} />
            <Route path="/sake" element={<Sake />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
