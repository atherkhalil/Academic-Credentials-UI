import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import PageHead from "./PageHead";
import PageTitle from "./PageTitle";
import Sidebar from "./sidebar";
import jwt_decode from "jwt-decode";

const Layout = ({
    headTitle,
    children,
    pageTitle,
    pageTitleSub,
    pageClass,
    parent,
    child,
}) => {
    const [height, setHeight] = useState();
    // const userContext = useSelector(state => state.Global.userContext);
    const token = localStorage.getItem("certmate_token");
    var decodedToken = jwt_decode(token);

    useEffect(() => {
        setHeight(window.screen.height);
    }, []);


    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="main-wrapper" className={pageClass}>
                <Header />
                <Sidebar userContext={decodedToken.currentLogin} />

                <div className="content-body" style={{ minHeight: height - 122 }}>
                    <div className="container">
                        {pageTitle && (
                            <PageTitle
                                pageTitle={pageTitle}
                                pageTitleSub={pageTitleSub}
                                parent={parent}
                                child={child}
                            />
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
