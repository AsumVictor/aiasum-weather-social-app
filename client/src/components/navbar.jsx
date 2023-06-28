import { useState, useEffect } from "react";
import { HiUser } from "react-icons/hi";
import { HiCog6Tooth, HiGift, HiArrowRightOnRectangle } from "react-icons/hi2";
import { DropLink } from "./sideNavLinks";
import ThemeButtons from "./themeButtons";

function Navbar() {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);
  // turn off profile dropdown
  const offProfileDropdown = () => {
    setProfileDropdown(false);
  };

  const offThemeDropdown = () => {
    setThemeDropdown(false);
  };

  const handleClick = (e) => {
    let isAvatar = e.target.classList.contains("avatar");
    let isTheme = e.target.parentNode.classList.contains("theme");
    if (profileDropdown && !isAvatar) {
      offProfileDropdown();
    }
    if (themeDropdown && (!isTheme)) {
      offThemeDropdown();
    }
  };

  window.addEventListener("click", handleClick);

  return (
    <header className=" bg-dark-primary h-[1.5cm] w-full md:pt-[10px] sticky top-0">
      <nav className=" h-[1.4cm] w-full flex flex-row justify-end items-center gap-8 px-3 md:px-10 relative">
        <p className="-mr-6 text-dark-text-primary font-bold">Theme: </p>
        <ThemeButtons
          backgound={"bg-dark-primary"}
          thirty={"bg-dark-text-active"}
          ten={"bg-dark-overlay"}
          borderActive={"border-dark-text-active"}
          border={"border-dark-text-primary"}
          sixty={"bg-dark-text-primary"}
          handleClick={() => setThemeDropdown((prev) => !prev)}
          showBorder={themeDropdown}
        />

        <div
          className={`h-[1.25cm] w-[1.25cm] rounded-full cursor-pointer ${
            profileDropdown ? "border-[6px]" : "border-[2px]"
          }  border-dark-text-active`}
          onClick={() => setProfileDropdown((prev) => !prev)}
        >
          <img
            src="https://avatars.githubusercontent.com/u/105683075?v=4"
            alt="avatar"
            className="avatar w-full h-full rounded-full"
          />
        </div>
        {profileDropdown && (
          <div className="transition-all mt-[1.5cm] rounded-xl h-[6cm] w-[4.5cm] bg-dark-overlay shadow-[10px] absolute top-0 right-0 mr-3 p-3 flex flex-col gap-4">
            <DropLink text="Profile" icon={<HiUser />} to="profile" />
            <DropLink text="Settings" icon={<HiCog6Tooth />} to="settings" />
            <DropLink text="Gift me" icon={<HiGift />} to="gifts" />
            <button className="absolute bottom-3 bg-dark-text-active rounded-md text-dark-text-primary grid grid-cols-5 py-1 px-1 w-10/12">
              <div className="text-2xl">
                <HiArrowRightOnRectangle />
              </div>
              <p className="font-semibold pl-1 whitespace-nowrap">Logout</p>
            </button>
          </div>
        )}
        {themeDropdown && (
          <div className="transition-all mt-[1.5cm] rounded-xl h-[6cm] w-[5cm] bg-dark-overlay shadow-[10px] absolute top-0 right-0 mr-[4rem] md:mr-[7rem] p-3 flex flex-row flex-wrap gap-4 ">
            <ThemeButtons
              backgound={"bg-dark-primary"}
              thirty={"bg-dark-text-active"}
              ten={"bg-dark-overlay"}
              border={"border-dark-text-active"}
              sixty={"bg-dark-text-primary"}
              text={"Default"}
            />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
