import React from "react";
import SidebarOrga from "../../../components/common/dashboardComponent/Organization/sidebar.orga";
import DashboardLayout from "@/components/common/layouts/DashboardLayout";

const DashboardOrga: React.FC = () => {
  return (
    <DashboardLayout
      sidebar={<SidebarOrga title={"Dashboard"} />}
      useOutlet
      center
      maxWidthClassName="max-w-6xl"
      paddingClassName="px-6 py-8 w-full px-4 sm:px-6 lg:px-8"
    />
  );
};

export default DashboardOrga;
