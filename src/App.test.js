import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders App without crashing", () => {
  const { getByText } = render(<App />);
  const field = getByText(/First Name/i);
  expect(field).toBeInTheDocument();
  expect(field).toBeTruthy();
  expect(field).not.toBeFalsy();
});