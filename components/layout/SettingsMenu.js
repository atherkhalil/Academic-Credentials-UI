import Link from "next/link";
import { useRouter } from "next/router";

function SettingsMenu({ profileNavigation, currentViewStep, _handleStepChange }) {
  const router = useRouter();
  return (
    <>
      <ul className="settings-menu">
        {profileNavigation?.map((nav, index) => (
          <li
            className={`
              ${nav.key === currentViewStep ? "active" : ""}
              cursor-pointer
              `
            }
            onClick={() => _handleStepChange(nav.key)}
          >
              <a>
                <i className="ri-arrow-right-s-line"></i> {nav.title}
              </a>
          </li>
        ))}
      </ul>
    </>
  );
}
export default SettingsMenu;
