import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/home';
import type { IStaticMethods } from 'preline/preline';
import 'preline';

import DashboardAssistant from './Pages/dashboard/assistant/dashboard/dashboard.assistant';
import Sources from './Pages/dashboard/assistant/sources/sources.assistant';
import Export from './Pages/dashboard/assistant/export/export.assistant';
import SettingsAssistant from './Pages/dashboard/assistant/settings/settings.assistant';
import Playground from './Pages/dashboard/assistant/playground';
import DashboardUser from './Pages/dashboard/user/dashboard.user';
import DashboardOrga from './Pages/dashboard/organization/dashboard.orga';


import TableUsers from './components/common/dashboardComponent/Organization/tableUser.orga';
import Invite from './Pages/dashboard/organization/invite.orga';
import TableLogs from './components/common/dashboardComponent/Organization/tableLogs.orga';
import OrganizationInput from './components/common/dashboardComponent/Organization/organizationInput.orga';
import SettingsUser from './Pages/dashboard/user/settings/settings.user';
import CreateAssistantOrga from './components/common/dashboardComponent/Organization/createAssistant.orga';
import GridAssistantOrganization from './components/common/dashboardComponent/Organization/gridAssitant.orga';
import ApiKeys from './Pages/dashboard/organization/apiKeys.orga';
import RoleManagementTable from './components/common/dashboardComponent/Organization/roleManagementTable.orga';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Re-scan the DOM for Preline components after navigation or initial mount
    window.HSStaticMethods?.autoInit?.();
  }, [location.pathname]);

  return (
      <Routes>
        <Route path="/" element={<Home />} />

        {/* User Dashboard (nested) */}
        <Route path="/dashboard-user" element={<DashboardUser />}>
          <Route path="settings-user" element={<SettingsUser />} />
          <Route path="stats" element={<div>Stats</div>} />
        </Route>
        

        {/* Assistant */}
        <Route path="/assistant/:id/" element={<DashboardAssistant />} />
        <Route path="/assistant/:id/settings" element={<SettingsAssistant />} />
        <Route path="/assistant/:id/export" element={<Export />} />
        <Route path="/assistant/:id/sources" element={<Sources />} />
        <Route path="/assistant/:id/playground" element={<Playground />} />

       

        {/* Dashboard Orga layout + nested routes */}
        <Route path="/dashboard-orga" element={<DashboardOrga />}>
          <Route index element={<GridAssistantOrganization />} />
          <Route path="create-assistant" element={<CreateAssistantOrga />} />
          <Route path="role" element={<RoleManagementTable />} />
          <Route path="user" element={<TableUsers />} />
          <Route path="invite" element={<Invite />} />
          <Route path="logs" element={<TableLogs />} />
          <Route path="organization" element={<OrganizationInput />} />
          <Route path="apikeys" element={<ApiKeys /> } />
          <Route path="statistics" element={<div>Statistiques</div>} />
          <Route path="members" element={<div>Gestion des Membres</div>} />
        </Route>
      </Routes>
  );
};


export default App;
