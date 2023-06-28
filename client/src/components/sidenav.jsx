import React from "../assets/react.svg";
import SideLinks from "./sideNavLinks";
import { HiHome , HiCollection, HiSearch, HiBookmark, HiOutlineShoppingCart} from "react-icons/hi";

function Sidenav() {
  return (
    <div className="side-nav bg-dark-primary">
      <div className={`nav-items bg-dark-overlay`}>
        <div className="w-[2.5cm] h-[2.5cm] md:flex hidden  mt-1 mb-1">
          <img src={React} alt="logo" className={`h-full w-full`} />
        </div>
        <div className="w-full h-[3px] md:flex hidden bg-white mb-5"></div>
        <SideLinks icon={<HiHome />} text={'Home'} to={'.'} />
        <SideLinks icon={<HiCollection />} text={'Feeds'} to={'feeds'}  />
        <SideLinks icon={<HiSearch />} text={'Search'} to={'search'}  />
        <SideLinks icon={<HiBookmark />} text={'Saves'} to={'saved'}  />
        <SideLinks icon={<HiOutlineShoppingCart />} text={'Outfits'} to={'outfits'}  />
      </div>
    </div>
  );
}

export default Sidenav;
