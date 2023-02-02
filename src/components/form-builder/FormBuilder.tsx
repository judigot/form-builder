import React from "react";

import Text from "./fields/Text";
import Number from "./fields/Number";

interface Props {
  fields: TextField[];
}

const FormBuilder: React.FC<Props> = (props: Props) => {
  const [fields, setFields] = React.useState<TextField[]>(props.fields);

  return (
    <>
      {fields &&
        fields.map((field: TextField) => {
          if (field.type === "text") return <Text />;
          if (field.type === "number") return <Number />;
        })}
    </>
  );
};

export default FormBuilder;
