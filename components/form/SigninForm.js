import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const initialValues = {
  email: "",
  password: "",
};

const SigninFormSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function SigninForm() {
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const _handleSignIn = (fields) => {
    enqueueSnackbar("Successfully Logged In!", {
      variant: "success",
    });
    console.log("Submitting ....: ", fields);
    router.push("/dashboard");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SigninFormSchema}
        onSubmit={(fields) => {
          _handleSignIn(fields);
        }}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div className="row">
              <div className="col-12 mb-16">
                <label className="form-label">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="col-12 mb-16">
                <label className="form-label">Password</label>
                <Field
                  name="password"
                  type="text"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-6">
                <div className="form-check">
                  <Field
                    type="checkbox"
                    name="acceptTerms"
                    className={"form-check-input "}
                  />
                  <label className="form-check-label">Remember me</label>
                </div>
              </div>
              <div className="col-6 text-end">
                <Link href="/reset">
                  <a>Forgot Password?</a>
                </Link>
              </div>
            </div>

            <div className="mt-16 d-grid gap-2">
              <button type="submit" className="btn btn-primary mr-2">
                Sign In
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default SigninForm;
