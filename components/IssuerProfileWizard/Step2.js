import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import CreateApi from "../form/CreateApi";

const Step2 = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Upload Signature</h4>
        </div>
        <div className="card-body">
          <Formik
            initialValues={{
              file: ""
            }}
            onSubmit={(fields) => handleSubmit(fields)}
          >
            <Form>
              <Field
                name="file"
                type="file"
                className={"form-control col-lg-9"}
              />
            </Form>
          </Formik>
          <div className="mt-10">
            <img src={"/images/signature.jpg"} width="260px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
