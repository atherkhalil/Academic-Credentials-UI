import Link from "next/link";
import { useRouter } from "next/router";

function SettingsMenu() {
    const router = useRouter();
    return (
        <>
            <ul className="settings-menu">
                <li
                    className={
                        router.pathname == "/settings-profile" ? "active" : ""
                    }
                >
                    <Link href="/settings-profile">
                        <a><i className="ri-arrow-right-s-line"></i> Profile</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-application"
                            ? "active"
                            : ""
                    }
                >
                    <Link href="/settings-application">
                        <a><i className="ri-arrow-right-s-line"></i> Application</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-security" ? "active" : ""
                    }
                >
                    <Link href="/settings-security">
                        <a><i className="ri-arrow-right-s-line"></i> Security</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-activity" ? "active" : ""
                    }
                >
                    <Link href="/settings-activity">
                        <a><i className="ri-arrow-right-s-line"></i> Activity</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-payment-method"
                            ? "active"
                            : ""
                    }
                >
                    <Link href="/settings-payment-method">
                        <a><i className="ri-arrow-right-s-line"></i> Payment Method</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-api" ? "active" : ""
                    }
                >
                    <Link href="/settings-api">
                        <a><i className="ri-arrow-right-s-line"></i> API</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}
export default SettingsMenu;
