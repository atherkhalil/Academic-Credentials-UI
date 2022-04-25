import React from "react";
import NumberFormat from "react-number-format";
import { useField } from "formik";

function NumberFieldHooks(props) {
  const { name, format } = props;
  const [field] = useField(name);

  return (
    <NumberFormat
      format={format}
      {...field}
      decimalScale={0}
      allowNegative={false}
      {...props}
    />
  );
}

export default NumberFieldHooks;