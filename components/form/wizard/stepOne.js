import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const stepOneValidationSchema = Yup.object({
    first_name: Yup.string().required().label("First name"),
    last_name: Yup.string().required().label("Last name"),
});

const StepOne = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    };

    return (
        <Formik
            validationSchema={stepOneValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {({ errors, status, touched }) => (
                <Form>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                            <label className="form-label">Full Name</label>
                            <Field
                                name="first_name"
                                type="text"
                                className={
                                    "form-control" +
                                    (errors.first_name && touched.first_name
                                        ? " is-invalid"
                                        : "")
                                }
                            />
                            <ErrorMessage
                                name="first_name"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                            <label className="form-label">Full Name</label>
                            <Field
                                name="last_name"
                                type="text"
                                className={
                                    "form-control" +
                                    (errors.last_name && touched.last_name
                                        ? " is-invalid"
                                        : "")
                                }
                            />
                            <ErrorMessage
                                name="last_name"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Next
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default StepOne;
