import Link from "next/link";
import { headerDropDown } from "../../shared/constants.js";
import { getDecodedTokenFromLocalStorage } from "../../shared/helper.js";

function DropdownProfile({ _handleLogout }) {
    let decodedToken = getDecodedTokenFromLocalStorage();

    const _getHandler = (type) => {
        if (type === "_handleLogout") {
            return _handleLogout;
        }
    }    

    return (
        <>
            {decodedToken && headerDropDown[decodedToken.currentLogin].map((item, id) => (
                <>
                {
                    item.type == "button" ? 
                        <a
                            className={`dropdown-item ps-20 pe-20 pt-10 pb-10 d-flex align-items-center border-top  ${item.color}`}
                            onClick={_getHandler(item.handler)}
                        >
                            <span className="fs-18 text-primary me-10">
                                <i className={item.icon}></i>
                            </span>
                            {item.text}
                        </a>
                    : 
                    <Link href={`/${item.path}`} key={id}>
                        <a
                            className={`dropdown-item ps-20 pe-20 pt-10 pb-10 d-flex align-items-center border-top  ${item.color}`}
                        >
                            <span className="fs-18 text-primary me-10">
                                <i className={item.icon}></i>
                            </span>
                            {item.text}
                        </a>
                    </Link>
                }
                </>
            ))}
        </>
    );
}
export default DropdownProfile;
