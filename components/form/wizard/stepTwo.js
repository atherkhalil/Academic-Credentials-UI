import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

const stepTwoValidationSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
});

const StepTwo = (props) => {
    const router = useRouter();
    const handleSubmit = (values) => {
        props.next(values, true);
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
        router.push("/");
    };

    return (
        <Formik
            validationSchema={stepTwoValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, values }) => (
                <Form>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                            <label className="form-label">Full Name</label>
                            <Field
                                name="email"
                                type="text"
                                className={
                                    "form-control" +
                                    (errors.email && touched.email
                                        ? " is-invalid"
                                        : "")
                                }
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                            <label className="form-label">Full Name</label>
                            <Field
                                name="password"
                                type="text"
                                className={
                                    "form-control" +
                                    (errors.password && touched.password
                                        ? " is-invalid"
                                        : "")
                                }
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => props.prev(values)}
                    >
                        Back
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default StepTwo;
