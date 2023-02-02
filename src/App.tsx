import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import FormBuilder from "./components/form-builder/FormBuilder";

function App() {
  const formFields: TextField[] = [
    {
      title: "First Name",
      type: "text",
    },
  ];
  const Test = [
    { title: "First Name", type: "text", maxLength: null },
    { title: "Last Name", type: "text", maxLength: null },
    {
      title: "Age",
      type: "number",
      minVal: "1",
      maxVal: "100",
    },
    { title: "Married", type: "boolean", default: "false" },
    {
      title: "Car Model",
      type: "dropdown",
      values: { options: ["Mitsubishi", "Toyota", "Ferrari", "BMW"] },
      default: "Mitsubishi",
    },
    { title: "Attendance", type: "time", default: "false" },
  ];

  return (
    <div className="App">
      <FormBuilder fields={formFields} />
    </div>
  );
}

export default App;
