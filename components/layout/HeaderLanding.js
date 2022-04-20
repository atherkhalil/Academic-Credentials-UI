import Link from "next/link";
function HeaderLanding() {
    return (
        <>
            <div className="header landing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar">
                                    <Link href="/">
                                    <a>
                                        <img src="./images/logo.png" alt="" />
                                    </a>
                                    </Link>
                                <div className="header-right">
                                    <div
                                        className="dark-light-toggle"
                                        onClick="themeToggle()"
                                    >
                                        <span className="dark">
                                            <i className="icofont-moon"></i>
                                        </span>
                                        <span className="light">
                                            <i className="icofont-sun-alt"></i>
                                        </span>
                                    </div>
                                    <a href="#" className="btn btn-primary">
                                        Buy
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeaderLanding;
