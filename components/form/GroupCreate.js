import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";


const initialValues = {
    groupName: "",
    groupSelect: "",
    groupDesc: "",
    groupAdmin: "",
    groupCourseSelect: "",
    groupMemberInvite: "",
};

const PersonalInfoSchema = Yup.object().shape({
    groupName: Yup.string().required("Group name is required"),
    groupSelect: Yup.string().required("Group type is required"),
    groupDesc: Yup.string().required("Group description required"),
    groupAdmin: Yup.array().required("Minimum one admin is required"),
    groupCourseSelect: Yup.string().required("Please select a course"),
    groupMemberInvite: Yup.string().required(
        "Minimum one invitation is required"
    ),
});

function GroupCreate() {
    const [invite, setInvite] = useState(["Fiaz"]);
    const [admin, setAdmin] = useState(["Fiaz"]);

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
                        <div className="row">
                            <div className="col-xl-12 mb-15">
                                <label className="form-label">Group Name</label>
                                <Field
                                    name="groupName"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.groupName && touched.groupName
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="groupName"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-xl-12 mb-15">
                                <div className="form-group mb-10">
                                    <Field
                                        name="groupSelect"
                                        type="radio"
                                        className={
                                            "form-check-inpu me-10" +
                                            (errors.groupSelect &&
                                            touched.groupSelect
                                                ? " is-invalid"
                                                : "")
                                        }
                                        id="inlineRadio1"
                                        value="Private"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="inlineRadio1"
                                    >
                                        Private Group
                                    </label>
                                </div>
                                <div className="form-group mb-10">
                                    <Field
                                        name="groupSelect"
                                        type="radio"
                                        className={
                                            "form-check-inpu me-10" +
                                            (errors.groupSelect &&
                                            touched.groupSelect
                                                ? " is-invalid"
                                                : "")
                                        }
                                        id="inlineRadio2"
                                        value="Public"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="inlineRadio2"
                                    >
                                        Public Group
                                    </label>
                                    <ErrorMessage
                                        name="groupSelect"
                                        component="div"
                                        className="invalid-feedback"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-12 mb-15">
                                <label className="form-label">
                                    Group Description
                                </label>
                                <Field
                                    name="groupDesc"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.groupDesc && touched.groupDesc
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="groupDesc"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-xl-6 mb-15">
                                <label className="form-label">
                                    Group Admin
                                </label>
                            </div>
                            <div className="col-xl-6 mb-15">
                                <label className="form-label">
                                    Select Course
                                </label>
                                <Field
                                    name="groupCourseSelect"
                                    as="select"
                                    className={
                                        "form-control" +
                                        (errors.groupCourseSelect &&
                                        touched.groupCourseSelect
                                            ? " is-invalid"
                                            : "")
                                    }
                                >
                                    <option selected>Select a Course</option>
                                    <option value="1">Web Design</option>
                                    <option value="2">App UX/UI Design</option>
                                    <option value="3">Web Programming</option>
                                </Field>
                                <ErrorMessage
                                    name="groupCourseSelect"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-xl-12 mb-15">
                                <label className="form-label">
                                    Invite Member
                                </label>
                            </div>
                        </div>

                        <div className="mt-16">
                            <button
                                type="submit"
                                className="btn btn-primary mr-2"
                            >
                                Save
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default GroupCreate;
