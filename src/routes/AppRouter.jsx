import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import routes from "./index.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
