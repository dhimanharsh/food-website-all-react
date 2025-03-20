const { createRoot } = require("react-dom/client");
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./components/Header";
import { ReceipeCard, sep } from "./components/ReceipeCard";
import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Receipe from "./components/Receipe";

export const Communication = () => {
  const [data, setdata] = useState([]);
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    async function dataCapture() {
      let fetchTheData = await fetch("https://dummyjson.com/recipes");
      let inReadableForm = await fetchTheData.json();
      setSearch(inReadableForm.recipes);
      setdata(inReadableForm.recipes);
    }
    dataCapture();
  }, []);

  return (
    <>
      <div className="input-field">
        <input
          type="text"
          placeholder="Search Any Receipe"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let flt = search.filter((e) => {
              return e.name.toLowerCase().includes(input.toLowerCase());
            });
            setdata(flt);
          }}
        >
          serach
        </button>
      </div>

      <div className="order-our-best">
        {data.map((e) => {
          return <ReceipeCard key={e.id} sep={e}></ReceipeCard>;
        })}
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

const routerRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      { path: "/", element: <Communication></Communication> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/about", element: <About></About> },
      { path: "/receipe", element: <Receipe></Receipe> },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerRoute}></RouterProvider>);
