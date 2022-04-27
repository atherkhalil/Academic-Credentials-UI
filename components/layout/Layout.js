import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../redux/actions/user.action.js";
import { clearLocalStorage } from "../../shared/helper.js";
import Header from "./Header";
import PageHead from "./PageHead";
import PageTitle from "./PageTitle";
import Sidebar from "./sidebar";
import { useRouter } from "next/router";
import { Animated } from "react-animated-css";

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
  const dispatch = useDispatch();
  const router = useRouter();
  // const userContext = useSelector(state => state.Global.userContext);

  useEffect(() => {
    setHeight(window.screen.height);
  }, []);

  const _handleLogout = () => {
    dispatch(LogoutUser());
    clearLocalStorage();
    router.push("/");
  };

  return (
    <>
      <PageHead headTitle={headTitle} />
      <div id="main-wrapper" className={pageClass}>
        <Header _handleLogout={_handleLogout} />
        <Sidebar />

        <Animated
          animationIn="bounceInRight"
          animationOut="bounceOutDown"
          animationInDuration={1000}
          animationOutDuration={1000}
          className="animated-custom"
        >
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
        </Animated>
      </div>
    </>
  );
};

export default Layout;
