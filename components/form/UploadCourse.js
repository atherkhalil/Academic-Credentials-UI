import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from 'reactstrap'

const initialValues = {
    courseThambnail: "",
    courseTitle: "",
    courseDesc: "",
    coursePrice: "",
    courseCategory: "",
    courseSubCategory: "",
    courseAccessibility: "",
    courseDificultyLevel: "",
    courseFeatures: "",
    courseTags: "",
    lessonVideo: "",
    lessonVideothumbnail: "",
    lessonName: "",
    lessonDesc: "",
};

const PersonalInfoSchema = Yup.object().shape({
    courseThambnail: Yup.string().required("Upload course thumbnail"),
    courseTitle: Yup.string().required("Course Title is required"),
    courseDesc: Yup.string().required("Course Description is required"),
    coursePrice: Yup.string().required("Course price is required"),
    courseCategory: Yup.string().required("Course selection is required"),
    courseSubCategory: Yup.string().required("Course sub-category is required"),
    courseAccessibility: Yup.string().required("Access selection is required"),
    courseDificultyLevel: Yup.string().required("Dificulty level shiuld be selected"),
    courseFeatures: Yup.string().required("Present Address is required"),
    courseTags: Yup.string().required("Present Address is required"),
    lessonVideo: Yup.string().required("Upload lesson video"),
    lessonVideothumbnail: Yup.string().required("Upload video thumbnail"),
    lessonName: Yup.string().required("Input a lesson name"),
    lessonDesc: Yup.string().required("Input the lesson's description"),
});

function UploadCourse() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={PersonalInfoSchema}
                onSubmit={(fields) => {
                    alert(
                        "SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4)
                    );
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Course Thambnail</label>
                            <div className="col-lg-9">
                                <Field
                                    name="courseThambnail"
                                    type="file"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.courseThambnail && touched.courseThambnail
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="courseThambnail"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Course Title</label>
                            <div className="col-lg-9">
                                <Field
                                    name="courseTitle"
                                    type="text"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.courseTitle && touched.courseTitle
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="courseTitle"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Course Description</label>
                            <div className="col-lg-9">
                                <Field
                                    name="courseDesc"
                                    type="text"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.courseDesc && touched.courseDesc
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="courseDesc"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Course Price</label>
                            <div className="col-lg-9">
                                <Field
                                    name="coursePrice"
                                    type="text"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.coursePrice && touched.coursePrice
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="coursePrice"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Course Category</label>
                            <div className="col-lg-9">
                                <Field
                                    name="courseCategory"
                                    as="select"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.courseCategory && touched.courseCategory
                                            ? " is-invalid"
                                            : "")
                                    }
                                >
                                    <option selected>Select a category</option>
                                    <option value="Bootstrap Learning">
                                        Bootstrap Learning
                                    </option>
                                    <option value="React JS">
                                        React JS
                                    </option>
                                    <option value="Laravel Framework">
                                        Laravel Framework
                                    </option>
                                </Field>
                                <ErrorMessage
                                    name="courseCategory"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Course Sub-Category</label>
                            <div className="col-lg-9">
                                <Field
                                    name="courseSubCategory"
                                    type="text"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.courseSubCategory && touched.courseSubCategory
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="courseSubCategory"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <hr className="my-20" />
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Course Dificulty Level</label>
                            <div className="col-lg-9">
                                <Field
                                    name="courseDificultyLevel"
                                    as="select"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.courseDificultyLevel && touched.courseDificultyLevel
                                            ? " is-invalid"
                                            : "")
                                    }
                                >

                                    <option selected>Select a Level</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Basic">Basic</option>
                                    <option value="Advanced">Advanced</option>
                                </Field>
                                <ErrorMessage
                                    name="courseDificultyLevel"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Course Features</label>
                            <div className="col-lg-9">
                                <Field
                                    name="courseFeatures"
                                    type="text"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.courseFeatures && touched.courseFeatures
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="courseFeatures"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Course Tags</label>
                            <div className="col-lg-9">
                                <Field
                                    name="courseTags"
                                    type="text"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.courseTags && touched.courseTags
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="courseTags"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <hr className="my-20" />
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Learner's Accessibility</label>
                            <div className="col-lg-9">
                                <Field
                                    name="courseAccessibility"
                                    as="select"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.courseAccessibility && touched.courseAccessibility
                                            ? " is-invalid"
                                            : "")
                                    }
                                >
                                    <option selected>Select an Access Type</option>
                                    <option value="Public">
                                        Public
                                    </option>
                                    <option value="Private">
                                        Private
                                    </option>
                                    <option value="Premium">
                                        Premium
                                    </option>
                                </Field>
                                <ErrorMessage
                                    name="courseAccessibility"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>                        
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Lesson Video</label>
                            <div className="col-lg-9">
                                <Field
                                    name="lessonVideo"
                                    type="file"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.lessonVideo && touched.lessonVideo
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="lessonVideo"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Video Thumbnail</label>
                            <div className="col-lg-9">
                                <Field
                                    name="lessonVideothumbnail"
                                    type="file"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.lessonVideothumbnail && touched.lessonVideothumbnail
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="lessonVideothumbnail"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Lesson Name</label>
                            <div className="col-lg-9">
                                <Field
                                    name="lessonName"
                                    type="text"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.lessonName && touched.lessonName
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="lessonName"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row mb-20">
                            <label className="form-label col-lg-3">Lesson Description</label>
                            <div className="col-lg-9">
                                <Field
                                    name="lessonDesc"
                                    type="text"
                                    className={
                                        "form-control col-lg-9" +
                                        (errors.lessonDesc && touched.lessonDesc
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="lessonDesc"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>

                        <div className="row mt-16">
                            <div className="col-lg-3"></div>

                            <div className="col-lg-9">
                                <Button color="primary" className="me-10">Submit</Button>{' '}
                                <Button color="danger">Cancel</Button>{' '}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default UploadCourse;
