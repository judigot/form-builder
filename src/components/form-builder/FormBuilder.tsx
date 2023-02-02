import React from "react";

import Text from "./fields/Text";
import Number from "./fields/Number";

interface Props {
  fields: Field[];
}

const FormBuilder: React.FC<Props> = (props: Props) => {
  const [fields, setFields] = React.useState<Field[]>(props.fields);

  return (
    <>
      {fields &&
        fields.map((field: Field) => {
          if (field.type === "text") return <Text />;
          if (field.type === "number") return <Number />;
        })}
    </>
  );
};

export default FormBuilder;
