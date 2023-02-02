import React from "react";

import Text from "./fields/Text";
import Number from "./fields/Number";
import Boolean from "./fields/Boolean";
import Dropdown from "./fields/Dropdown";

interface Props {
  form: MasterField[];
}

const FormBuilder: React.FC<Props> = (props: Props) => {
  // const [form, setForm] = React.useState(props.form);

  const form: MasterField[] = props.form;

  return (
    <>
      {form &&
        form.map((field: MasterField, i: number) => {
          switch (field.type) {
            case "text":
              return <Text key={i} {...field} />;

            case "number":
              return <Number key={i} {...field} />;

            case "boolean":
              return <Boolean key={i} {...field} />;

            case "dropdown":
              return <Dropdown key={i} {...field} />;

            default:
              break;
          }
        })}
    </>
  );
};

export default FormBuilder;
