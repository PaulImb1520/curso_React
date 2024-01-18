import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./CounterApp";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App title="Paúl Imbaquingo" />*/}
    <CounterApp value={0} />
  </React.StrictMode>
);
