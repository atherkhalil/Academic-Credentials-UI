import React from "react";
import NumberFormat from "react-number-format";
import { useField } from "formik";

function NumberFieldHooks(props) {
  const { name } = props;
  const [field] = useField(name);

  return (
    <NumberFormat
      format="+97# ## ### ####"
      {...field}
      decimalScale={0}
      allowNegative={false}
      {...props}
    />
  );
}

export default NumberFieldHooks;