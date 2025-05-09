import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router";
import Provider from "./components/Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>
);
