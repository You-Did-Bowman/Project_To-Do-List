import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FormProvider } from "./context/FormContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FormProvider>
      <App />
    </FormProvider>
  </BrowserRouter>
);
