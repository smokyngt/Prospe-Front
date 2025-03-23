import React from "react";
import { Outlet } from "react-router-dom";
import SidebarOrga from "../../../components/common/dashboardComponent/Organization/sidebar.orga";

const DashboardOrga: React.FC = () => {
  return (
    <>
      <SidebarOrga title={"Dashboard"}  />
      <div className="flex flex-col flex-1 pl-64 max-w-full overflow-hidden">
        <div className="flex-1 px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOrga;
