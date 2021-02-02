import React from "react";

import { KahootDrawer, KahootSider } from "components";

interface NavigationProps {
  mobile: boolean;
  collapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
  setMobile: (isMobile: boolean) => void;
}

const KahootNavigation = ({
  mobile,
  collapsed,
  setCollapsed,
  setMobile,
}: NavigationProps) => {
  return (
    <nav className="navbar">
      <KahootDrawer
        mobile={mobile}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <KahootSider
        collapsed={collapsed}
        mobile={mobile}
        setMobile={setMobile}
        setCollapsed={setCollapsed}
      />
    </nav>
  );
};

export default KahootNavigation;
