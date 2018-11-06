import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("renders image", () => {
    const img = document.createElement("img");
    ReactDOM.render(<App />, img);
    ReactDOM.unmountComponentAtNode(img);
});
