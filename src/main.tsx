import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Register from "./pages/register/Register";
import Catalog from "./pages/catalog/Catalog";
import Login from "./pages/login/Login";

createRoot(document.getElementById("root")!).render(<StrictMode>
    <Register />
    <Login />
    <Catalog />
</StrictMode>);
