import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("creates failing test to see in CircleCI", () => {
    const a;
    expect(a).toEqual(0);
});
