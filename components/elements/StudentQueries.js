import Link from "next/link";
import PerfectScrollbar from "react-perfect-scrollbar";
function StudentQueries() {
    const studentQuery = [
        {
            imgId: 7,
            title: "Machine Learning Bootcamp",
            author: "Brandon Taylor",
        },
        {
            imgId: 8,
            title: "Python Bootcamp from Zero to Hero",
            author: "Stweart Mark",
        },
        {
            imgId: 9,
            title: "Amazon Web Services Certification",
            author: "Jhon Cane",
        },
        {
            imgId: 10,
            title: "The Web Developer Bootcamp 2021",
            author: "Nicky Bonje",
        },
    ];
    return (
        <>
            <div className="students-queries" style={{ height: "305px" }}>
                <PerfectScrollbar>
                    {studentQuery.map((item, id) => (
                        <>
                            <div className="student-query-inner d-flex justify-content-between align-items-start" key={id}>
                                <img
                                    className="me-20 rounded-circle"
                                    src={`/images/avatar/${item.imgId}.jpg`}
                                    alt=""
                                />
                                <div className="student-query-details flex-basis-50 flex-grow-1 me-20">
                                    <h6 className="mb-5">{item.title}</h6>
                                    <p>By {item.author}</p>
                                </div>
                                <div className="d-flex flex-wrap justify-content-end mb-3">
                                    <Link href={"#"}><a className="icon mx-16 my-16 py-8 px-8 rounded-circle bg-primary-lighten"><i className="ri-check-line fs-18 text-primary"></i></a></Link>
                                    <Link href={"#"}><a className="icon mx-16 my-16 py-8 px-8 rounded-circle bg-danger-lighten"><i className="ri-close-line fs-18 text-danger"></i></a></Link>
                                </div>
                            </div>
                        </>
                    ))}
                </PerfectScrollbar>
            </div>
        </>
    );
}
export default StudentQueries;
