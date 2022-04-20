import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import Link from "next/link";
import { Progress } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AnalyticChart from '../chart/AnalyticChart';

function CoursesGrid() {

    const [ReviewModal, setModal] = useState(false);
    const [AnalyticModal, setAnalyticModal] = useState(false);

    const ReviewToggle = () => setModal(!ReviewModal);
    const AnalyticToggle = () => setAnalyticModal(!AnalyticModal);

    const courseItem = [
        {
            imgId: 23,
            sales: 150,
            title: "Python Bootcamp from Zero to Hero",
            desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
            author: "Jose Portilla",
            comments: 35,
            likes: 82,
        },
        {
            imgId: 19,
            sales: 150,
            title: "Amazon Web Services Certification",
            desc: "Videos, labs & practice exams - AWS Certified (Solutions Architect, Developer, SysOps Administrator, Cloud Practitioner)",
            author: "Brandon Taylor",
            comments: 35,
            likes: 82,
        },
        {
            imgId: 21,
            sales: 150,
            title: "Data Science Exercises Included.",
            desc: "Learn Data Science step by step through real Analytics examples. Data Mining, Modeling, Tableau Visualization and more!",
            author: "Kirill Eremenko, Ligency Team",
            comments: 35,
            likes: 82,
        },
        {
            imgId: 10,
            sales: 150,
            title: "The Web Developer Bootcamp 2021",
            desc: "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
            author: "Colt Steele",
            comments: 35,
            likes: 82,
        },
        // {
        //     imgId: 16,
        //     sales: 150,
        //     title: "Modern Javascript from The Begining.",
        //     desc: "Learn and build projects with pure JavaScript (No frameworks or libraries)",
        //     author: "Brad Traversy",
        //     comments: 35,
        //     likes: 82,
        // },
        // {
        //     imgId: 18,
        //     sales: 150,
        //     title: "The Advanced Web Developer Bootcamp",
        //     desc: "Learn React 16, Redux, D3, ES2015, Testing, CSS Flexbox, Animations, SVG, AJAX, and more!",
        //     author: "Colt Steele, Elie Schoppik, Tim Garcia, Matt Lane",
        //     comments: 35 ,
        //     likes: 82,
        // },
    ];

    return (
        <>
            {courseItem.map((item, id) => (
                <>
                    <div className="col-lg-6" key={id}>
                        <div className="card">
                            <img
                                src={`/images/courses/${item.imgId}.jpg`}
                                className="img-fluid card-img-top"
                                alt=""
                            />
                            <div className="card-body courses-details">
                                <h5>{item.title}</h5>
                                <div className="courses-details-info d-flex justify-content-left">
                                    <div className="courses-details-info-box">
                                        <i className="ri-shopping-cart-2-line"></i>
                                        <span>{item.sales} Sales</span>
                                    </div>
                                    <div className="courses-details-info-box">
                                        <i className="ri-message-2-line"></i>
                                        <span>{item.comments} Comments</span>
                                    </div>
                                    <div className="courses-details-info-box">
                                        <i className="ri-heart-2-line"></i>
                                        <span>{item.likes} likes</span>
                                    </div>
                                </div>
                                <p>{item.desc}</p>
                                <div className="courses-action">
                                    <Link href="upload"><a className="btn btn-primary text-white" >Edit</a></Link>
                                    <Button onClick={AnalyticToggle} className="btn btn-light text-dark">Analytics</Button>
                                    <Button onClick={ReviewToggle} className="btn btn-light text-dark">Reviews</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
            <div>
                <Modal className="modal-lg" isOpen={ReviewModal} toggle={ReviewToggle} >
                    <ModalHeader toggle={ReviewToggle}>Reviews on this course</ModalHeader>
                    <ModalBody>
                        <div className="course-review d-flex align-items-start flex-wrap flex-sm-nowrap">
                            <div class="course-review-total text-center me-20">
                                <h1>4.75</h1>
                                <div className="text-warning">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-half-fill"></i>
                                </div>
                                <p>Total reviews - 39</p>
                            </div>
                            <div className="d-block flex-grow-1 align-items-start mt-6">
                                <Progress className="mb-20" style={{ "height": "9px" }} color="warning" value="65" />
                                <Progress className="mb-20" style={{ "height": "9px" }} color="warning" value="10" />
                                <Progress className="mb-20" style={{ "height": "9px" }} color="warning" value="12" />
                                <Progress className="mb-20" style={{ "height": "9px" }} color="warning" value="2" />
                                <Progress className="mb-20" style={{ "height": "9px" }} color="warning" value="6" />
                            </div>
                            <div className="align-items-start mx-8">
                                <p className="mb-6"> <i class="ri-star-s-fill text-warning"></i><i class="ri-star-s-fill text-warning"></i><i class="ri-star-s-fill text-warning"></i><i class="ri-star-s-fill text-warning"></i><i class="ri-star-s-fill text-warning"></i></p>
                                <p className="mb-6"> <i class="ri-star-s-fill text-warning"></i><i class="ri-star-s-fill text-warning"></i><i class="ri-star-s-fill text-warning"></i><i class="ri-star-s-fill text-warning"></i></p>
                                <p className="mb-6"> <i class="ri-star-s-fill text-warning"></i><i class="ri-star-s-fill text-warning"></i><i class="ri-star-s-fill text-warning"></i></p>
                                <p className="mb-6"> <i class="ri-star-s-fill text-warning"></i><i class="ri-star-s-fill text-warning"></i></p>
                                <p className="mb-6"> <i class="ri-star-s-fill text-warning"></i></p>

                            </div>
                        </div>
                        <hr />
                        <div className="search mb-20">
                            <form action="#">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Here..."
                                    />
                                    <span className="input-group-text px-3">
                                        <i className="ri-search-line"></i>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <PerfectScrollbar className="course-comments" style={{ height: "40vh" }}>
                            <div className="course-comments-content">
                                <div className="d-flex justify-content-right align-items-start">
                                    <img className="rounded-circle me-20" width="50" src="/images/avatar/11.jpg" alt="" />
                                    <div>
                                        <h5>Helen Strong <span className="fs-8">3 days ago</span></h5>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint voluptatum nostrum nemo inventore magni iusto error sunt numquam? Quis eveniet, nobis rerum inventore ratione minus ut aliquid optio officiis.</p>
                                    </div>
                                </div>
                                <div className="text-end me-20">
                                    <Button className="" color="primary" onClick={ReviewToggle}>Publish</Button>{' '}
                                    <Button className="" color="danger" onClick={ReviewToggle}>Ignore</Button>
                                </div>
                            </div>
                            <div className="course-comments-content">
                                <div className="d-flex justify-content-right align-items-start">
                                    <img className="rounded-circle me-20" width="50" src="/images/avatar/10.jpg" alt="" />
                                    <div>
                                        <h5>Helen Strong <span className="fs-8">3 days ago</span></h5>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint voluptatum nostrum nemo inventore magni iusto error sunt numquam? Quis eveniet, nobis rerum inventore ratione minus ut aliquid optio officiis.</p>
                                    </div>
                                </div>
                                <div className="text-end me-20">
                                    <Button className="" color="primary" onClick={ReviewToggle}>Publish</Button>{' '}
                                    <Button className="" color="danger" onClick={ReviewToggle}>Ignore</Button>
                                </div>
                            </div>
                            <div className="course-comments-content last-child">
                                <div className="d-flex justify-content-right align-items-start">
                                    <img className="rounded-circle me-20" width="50" src="/images/avatar/9.jpg" alt="" />
                                    <div>
                                        <h5>Helen Strong <span className="fs-8">3 days ago</span></h5>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill text-warning"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint voluptatum nostrum nemo inventore magni iusto error sunt numquam? Quis eveniet, nobis rerum inventore ratione minus ut aliquid optio officiis.</p>
                                    </div>
                                </div>
                                <div className="text-end me-20">
                                    <Button className="" color="primary" onClick={ReviewToggle}>Publish</Button>{' '}
                                    <Button className="" color="danger" onClick={ReviewToggle}>Ignore</Button>
                                </div>
                            </div>
                            
                        </PerfectScrollbar>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="primary" onClick={ReviewToggle}>Publish</Button>{' '}
                        <Button color="secondary" onClick={ReviewToggle}>Cancel</Button>
                    </ModalFooter> */}
                </Modal>
                <Modal className="modal-xl" isOpen={AnalyticModal} toggle={AnalyticToggle} >
                    <ModalHeader toggle={AnalyticToggle}>Course Analytics</ModalHeader>
                    <ModalBody>
                        <div className="d-flex align-items-center justify-content-between mb-40">
                            <div className="border-end px-20 py-8">
                                <h5 className="text-muted">User</h5>
                                <h1>2015</h1>
                                <p className="text-success"><i class="ri-arrow-right-up-line rounded-circle bg-success-lighten me-5 px-3 py-3"></i>+28.05% <span className="text-muted">vs last week</span></p>
                            </div>
                            <div className="border-end px-20 py-8">
                                <h5 className="text-muted">Session</h5>
                                <h1>1328</h1>
                                <p className="text-success"><i class="ri-arrow-right-up-line rounded-circle bg-success-lighten me-5 px-3 py-3"></i>+31.39% <span className="text-muted">vs last week</span></p>
                            </div>
                            <div className="border-end px-20 py-8">
                                <h5 className="text-muted">Session Duration (avg)</h5>
                                <h1>1180</h1>
                                <p className="text-danger"><i class="ri-arrow-right-down-line rounded-circle bg-danger-lighten me-5 px-3 py-3"></i>-07.19% <span className="text-muted">vs last week</span></p>
                            </div>
                            <div className="px-20 py-8">
                                <h5 className="text-muted">Bounce Rate</h5>
                                <h1>986</h1>
                                <p className="text-danger"><i class="ri-arrow-right-down-line rounded-circle bg-danger-lighten me-5 px-3 py-3"></i>-13.05% <span className="text-muted">vs last week</span></p>
                            </div>
                        </div>
                        <div>
                            <AnalyticChart />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={AnalyticToggle}>Publish</Button>{' '}
                        <Button color="secondary" onClick={AnalyticToggle}>Cancel</Button> */}
                    </ModalFooter>
                </Modal>
            </div>
        </>
    );
}
export default CoursesGrid;
