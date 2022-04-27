import Link from "next/link";
import { useRouter } from "next/router";
import { getDecodedTokenFromLocalStorage } from "../../shared/helper.js";
import { mainNavLink } from "../../shared/constants.js";
 
function Sidebar({ userContext }) {
  const router = useRouter();
  let decodedToken = getDecodedTokenFromLocalStorage();

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
                      && "active"
                  }
                  key={id}
                >
                  <Link href={`/${item.path}`}>
                    <a className="d-flex flex-row justify-content-start align-items-center">
                      <span>
                        <i className={item.icon}></i>
                      </span>
                      <span  style={{ marginLeft: "10px" }}>
                        {item.name}
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
