import React from "react";
import { render } from "react-dom";
import CountryPage from "./components/CountryPage";

const wrapper = document.getElementById("root");

if(wrapper) {
  render(<CountryPage />, wrapper);
}