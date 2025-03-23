const { createRoot } = require("react-dom/client");
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./components/Header";
import { ReceipeCard } from "./components/ReceipeCard";
import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Receipe from "./components/Receipe";

const Communication = () => {
  const [dataFromApi, setDataFromApi] = useState([]);
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    async function api() {
      let data = await fetch("https://dummyjson.com/recipes");
      let inReadableForm = await data.json();
      setDataFromApi(inReadableForm.recipes);
      setSearch(inReadableForm.recipes);
    }
    api();
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
        />
        <button
          onClick={() => {
            let flt = search.filter((e) => {
              return e.name.toLowerCase().includes(input.toLowerCase());
            });
            setDataFromApi(flt);
          }}
        >
          search
        </button>
      </div>

      {/* card show */}
      <div className="order-our-best">
        {dataFromApi.map((e) => {
          return <ReceipeCard key={e.id} sep={e}></ReceipeCard>;
        })}
      </div>
    </>)
}

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
      { path: "receipe/:receipeid", element: <Receipe></Receipe> },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerRoute}></RouterProvider>);

// todolist
// employent system management
// add and show product
