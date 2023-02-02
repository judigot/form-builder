import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import FormBuilder from "./components/form-builder/FormBuilder";

function App() {
  const formFields: Field[] = [
    {
      title: "First Name",
      type: "text",
    },
  ];

  return (
    <div className="App">
      <FormBuilder fields={formFields} />
    </div>
  );
}

export default App;
