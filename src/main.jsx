import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./components/App/App";
import Main from "./components/Main/Main";
import SavedNews from "./components/SavedNews/SavedNews";
import ProtectedRoute from "./components/ProtectedRoute";

import "./index.css";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route
            path="saved-news"
            element={<ProtectedRoute element={<SavedNews />} />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
