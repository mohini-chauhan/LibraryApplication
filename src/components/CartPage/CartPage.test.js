import React from "react";
import ReactDOM from "react-dom";
import CartPage from "./CartPage";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CartPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
