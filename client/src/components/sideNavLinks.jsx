import { NavLink, Link } from "react-router-dom";

function SideLinks({ icon, text, to }) {
  const normalLinkStyle = `w-[1.6cm] h-full md:px-2 flex flex-col items-center justify-center md:grid md:gap-2 md:grid-cols-3 md:w-[3.8cm] md:mt-3 md:h-[1cm] cursor-pointer text-dark-text-primary md:hover:text-dark-text-active`;
  const activeLinkStyle = `w-[1.6cm] h-full md:px-2 flex flex-col items-center justify-center md:grid md:gap-2 md:grid-cols-3 md:w-[3.8cm] md:mt-1 md:h-[1cm] cursor-pointer text-dark-text-primary md:text-dark-text-active bg-dark-text-active md:bg-transparent md:rounded-none rounded-2xl -mt-4 `;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${activeLinkStyle}` : `${normalLinkStyle}`
      }
    >
      <div className="text-2xl md:col-span-1 md:text-2xl md:flex md:items-end ">
        {icon}
      </div>
      <p
        className="md:col-span-2 flex text-[12px]
          md:font-semibold md:text-[18px] items-end
          "
      >
        {text}
      </p>
    </NavLink>
  );
}
export function DropLink({ icon, text, to }) {
  return (
    <Link to={to}>
      <button className="hover:bg-dark-text-active rounded-md text-dark-text-primary grid grid-cols-5 py-1 px-1">
        <div className="text-2xl">
         {icon}
        </div>
        <p className="font-semibold pl-1 whitespace-nowrap">{text}</p>
      </button>
    </Link>
  );
}

export default SideLinks;
