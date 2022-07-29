import React from "react";
import ReactDOM from "react-dom";
import BookTemplate from "./BookTemplate";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BookTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
