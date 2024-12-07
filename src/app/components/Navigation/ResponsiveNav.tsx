"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const displayNavHandler = () => setDisplayNav(!displayNav);
  return (
    <div>
      <Nav displayNavHandler={displayNavHandler} />
      <MobileNav
        displayNav={displayNav}
        displayNavHandler={displayNavHandler}
      />
    </div>
  );
};

export default ResponsiveNav;
