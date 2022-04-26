import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar() {
    const router = useRouter();
    const mainNavLink = [
        {
            icon: "ri-grid-fill",
            name: "Dashboard",
            path: "dashboard",
        },
        {
            icon: "ri-user-fill",
            name: "Profile",
            path: "profile",
        },
        {
            icon: "ri-empathize-fill",
            name: "Accredited Institutes",
            path: "accredited-institutes",
        },
        {
            icon: "ri-hand-coin-fill",
            name: "Credentials",
            path: "credentials",
        },
        {
            icon: "ri-upload-cloud-2-fill",
            name: "Equivalency",
            path: "equivalency",
        },
    ];

    return (
        <>
            <div className="sidebar">
                <div className="brand-logo text-center">
                    <Link href="/">
                        <a className="mini-logo">
                            <img src="../images/University_of_Sharjah_Logo.png" alt="" width="100%" />
                        </a>
                    </Link>
                </div>
                <div className="menu">
                    <ul>
                        {mainNavLink.map((item, id) => (
                            <>
                                <li className={router.pathname == `/${item.path}` ? "active" : `${item.class}`} key={id}>
                                    <Link href={`/${item.path}`}>
                                        <a>
                                            <span>
                                                <i className={item.icon}></i>
                                            </span>
                                            <span className="nav-text">
                                                {item.name}
                                            </span>
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
