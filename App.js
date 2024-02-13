import React from "react";
import ReactDOM from "react-dom/client";

const head = React.createElement("h1", {}, [
  React.createElement("h1", {}, "priyanhsu"),
  React.createElement("h1", {}, "priyanhsu"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);
