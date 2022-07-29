import React from "react";
import ReactDOM from "react-dom";
import BookListPage from "./BookListPage";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BookListPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
