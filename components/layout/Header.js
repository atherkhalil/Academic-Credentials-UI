import Link from "next/link";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import DropdownNotification from "./../elements/DropdownNotification";
import DropdownProfile from "./../elements/DropdownProfile";

function Header({ _handleLogout }) {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="header-content">
                                <div className="header-left">
                                    <div className="brand-logo">
                                        <Link href="/">
                                            <a className="mini-logo">
                                                <img
                                                    src="./images/University_of_Sharjah_Logo.png"
                                                    alt=""
                                                    width="40"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="search">
                                        <form action="#">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search Here..."
                                                />
                                                <span className="input-group-text px-12">
                                                    <i className="ri-search-line"></i>
                                                </span>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>

                                <div className="header-right">
                                    <div
                                        className="dark-light-toggle"
                                        onClick="themeToggle()"
                                    >
                                        <span className="dark">
                                            <i className="ri-moon-line"></i>
                                        </span>
                                        <span className="light">
                                            <i className="ri-sun-line"></i>
                                        </span>
                                    </div>

                                    <UncontrolledDropdown
                                        tag="div"
                                        className="nav-item dropdown notification"
                                    >
                                        <DropdownToggle
                                            tag="div"
                                            data-toggle="dropdown"
                                        >
                                            <div className="notify-bell icon-menu">
                                                <span>
                                                    <i className="ri-notification-2-line"></i>
                                                </span>
                                            </div>
                                        </DropdownToggle>
                                        <DropdownMenu
                                            right
                                            className="dropdown-menu notification-list"
                                        >
                                            <div className="lists">
                                                <DropdownNotification />

                                                <Link
                                                    href="/notification"
                                                    className="d-block"
                                                >
                                                    <a>
                                                        See more
                                                        <i className="ri-arrow-right-s-line"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown
                                        tag="div"
                                        className="dropdown profile_log"
                                    >
                                        <DropdownToggle
                                            tag="div"
                                            data-toggle="dropdown"
                                        >
                                            <div className="user icon-menu active">
                                                <span className="thumb">
                                                    <img
                                                        src="/images/avatar/1.png"
                                                        alt=""
                                                        // width="40"
                                                    />
                                                </span>
                                            </div>
                                        </DropdownToggle>
                                        <DropdownMenu
                                            right
                                            className="dropdown-menu"
                                        >
                                            <div className="user-email">
                                                <div className="user">
                                                    <span className="thumb">
                                                        <img
                                                            src="/images/avatar/1.png"
                                                            alt=""
                                                            // width="40"
                                                        />
                                                    </span>
                                                    <div>
                                                        <h5>Fiaz Abdullah</h5>
                                                        <span>
                                                            codeefly@gmail.com
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <DropdownProfile _handleLogout={_handleLogout} />
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
