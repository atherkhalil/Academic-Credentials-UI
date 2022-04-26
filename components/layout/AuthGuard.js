import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { userService } from "services";
import jwt_decode from "jwt-decode";

function AuthGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    const token = localStorage.getItem("certmate_token");

    // redirect to login page if accessing a private page and not logged in
    var decodedToken = jwt_decode(token);

    if (!token) {
        if (window.location.pathname.includes('dashboard')) {
            setAuthorized(false);
            router.push({
              pathname: "/",
              query: { returnUrl: router.asPath },
            });
        }
    } else {
        setAuthorized(true);
    }
  }

  return authorized && children;
}

export { AuthGuard };
