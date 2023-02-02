import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import FormBuilder from "./components/form-builder/FormBuilder";

function App() {
  const form: MasterField[] = [
    { title: "First Name", type: "text", maxLength: undefined },
    { title: "Last Name", type: "text", maxLength: undefined },
    {
      title: "Age",
      type: "number",
      min: 1,
      max: 10,
    },
    { title: "Married", type: "boolean", isChecked: true },
    {
      title: "Car Model",
      type: "dropdown",
      options: ["Mitsubishi", "Toyota", "Ferrari", "BMW"],
      default: 3,
    },
  ];
  const Test = [{ title: "Attendance", type: "time", default: "false" }];

  return (
    <div className="App">
      <FormBuilder form={form} />
    </div>
  );
}

export default App;
