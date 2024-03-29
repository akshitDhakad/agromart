import React from "react";

function Sidebar({ sideBarCss,sideBarCssContent, title, Content }) {
  return (
    <div className={`p-2 ${sideBarCss} h-full`}>
      <div className={`${sideBarCssContent}`}>
        <h1 className="text-center font-themeFont font-bold underline">
          {title}
        </h1>
        <div className="h-100 w-full shadow-lg">{Content}</div>
      </div>
    </div>
  );
}

export default Sidebar;
