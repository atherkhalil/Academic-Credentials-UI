import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

function AuthGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const token = localStorage.getItem("certmate_token");

  if (!token) {
    router.push({
      pathname: "/"
    });
    return children;
  } else {
    return children;
  }
}

export { AuthGuard };
