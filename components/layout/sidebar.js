import Link from "next/link";
import { useRouter } from "next/router";
import { getDecodedTokenFromLocalStorage } from "../../shared/helper.js";
 
function Sidebar({ userContext }) {
  const router = useRouter();
  let decodedToken = getDecodedTokenFromLocalStorage();

  const mainNavLink = {
    MOE: [
      {
        icon: "ri-grid-fill",
        name: "Dashboard",
        path: "moe/dashboard",
      },
      {
        icon: "ri-user-fill",
        name: "Profile",
        path: "moe/settings/profile",
      },
      {
        icon: "ri-empathize-fill",
        name: "Accredited Institutes",
        path: "moe/accredited-institutes",
      },
      {
        icon: "ri-hand-coin-fill",
        name: "Credentials",
        path: "moe/credentials",
      },
      {
        icon: "ri-upload-cloud-2-fill",
        name: "Equivalency",
        path: "moe/equivalency",
      },
    ],
    ISSUER: [
      {
        icon: "ri-grid-fill",
        name: "Dashboard",
        path: "issuer/dashboard",
      },
      {
        icon: "ri-user-fill",
        name: "Profile",
        path: "issuer/profile",
      },
      {
        icon: "ri-empathize-fill",
        name: "Accredited Institutes",
        path: "issuer/accredited-institutes",
      },
      {
        icon: "ri-hand-coin-fill",
        name: "Courses",
        path: "issuer/courses",
      },
      {
        icon: "ri-upload-cloud-2-fill",
        name: "Equivalency",
        path: "issuer/equivalency",
      },
    ],
  };

  return (
    <>
      <div className="sidebar">
        <div className="brand-logo text-center">
          <Link href="/">
            <a className="mini-logo">
              <img
                src="/images/University_of_Sharjah_Logo.png"
                alt=""
                width="100%"
              />
            </a>
          </Link>
        </div>
        <div className="menu">
          <ul>
            {decodedToken && mainNavLink[decodedToken.currentLogin].map((item, id) => (
              <>
                <li
                  className={
                    router.pathname == `/${item.path}`
                      ? "active"
                      : `${item.class}`
                  }
                  key={id}
                >
                  <Link href={`/${item.path}`}>
                    <a>
                      <span>
                        <i className={item.icon}></i>
                      </span>
                      <span className="nav-text">{item.name}</span>
                    </a>
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
