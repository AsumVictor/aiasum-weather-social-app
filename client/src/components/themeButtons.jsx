import React from "react";

function ThemeButtons({
  borderActive,
  sixty,
  thirty,
  ten,
  border,
  text,
  handleClick,
  showBorder,
}) {
  return (
    <div className="flex flex-col" onClick={handleClick}>
      <div
        className={` ${
          showBorder ? borderActive : border
        } theme h-[1cm] w-[1cm] bg-tranparent shadow-inner rounded-md cursor-pointer flex justify-center relative py-2 border-2 `}
      >
        <div
          className={`${ten} theme h-[0.5cm] w-[0.5cm] rounded-full left-[3.5px] absolute `}
        ></div>
        <div
          className={`${thirty} theme h-[0.5cm] w-[0.5cm] rounded-full right-[3.5px] absolute `}
        ></div>
        <div
          className={`${sixty} theme h-[0.5cm] w-[0.5cm] rounded-full bottom-[3.5px] absolute  `}
        ></div>
      </div>
      <p className={`text-dark-text-primary text-[11px]`}>{text}</p>
    </div>
  );
}

export default ThemeButtons;
