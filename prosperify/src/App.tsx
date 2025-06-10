import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import { IStaticMethods } from 'preline/preline';
import 'preline/preline';
import 'preline/dist/preline';

import Dashboard from './Pages/dashboard/user/dashboard.user';
import Settings from './Pages/dashboard/user/settings/settings.user';
import DashboardAssistant from './Pages/dashboard/assistant/dashboard/dashboard.assistant';
import Sources from './Pages/dashboard/assistant/sources/sources.assistant';
import Export from './Pages/dashboard/assistant/export/export.assistant';
import SettingsAssistant from './Pages/dashboard/assistant/settings/settings.assistant';
import Playground from './Pages/playground';
import DashboardUser from './Pages/dashboard/user/dashboard.user';
import DashboardOrga from './Pages/dashboard/organization/dashboard.orga';


import TableUsers from './components/common/dashboardComponent/Organization/tableUser.orga';
import Invite from './Pages/dashboard/organization/invite.orga';
import TableLogs from './Pages/dashboard/organization/tableLogs.orga';
import OrganizationInput from './Pages/dashboard/organization/organizationInput.orga';
import SettingsUser from './Pages/dashboard/user/settings/settings.user';
import CreateAssistantOrga from './Pages/dashboard/organization/createAssistant.orga';
import GridAssistantOrganization from './components/common/dashboardComponent/Organization/gridAssitant.orga';
import TableApiKeys from './Pages/dashboard/organization/tableApiKeys';
import RoleManagementTable from './Pages/dashboard/organization/roleManagementTable.orga';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const App: React.FC = () => {
  window.HSStaticMethods.autoInit();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* User Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings-user" element={<SettingsUser />} />
        <Route path="/settings" element={<Settings />} />

        {/* Assistant */}
        <Route path="/assistant/:id/" element={<DashboardAssistant />} />
        <Route path="/assistant/:id/settings" element={<SettingsAssistant />} />
        <Route path="/assistant/:id/export" element={<Export />} />
        <Route path="/assistant/:id/sources" element={<Sources />} />
        <Route path="/assistant/:id/playground" element={<Playground />} />

        {/* Dashboard User */}
        <Route path="/dashboard-user" element={<DashboardUser />} />

        {/* Dashboard Orga layout + nested routes */}
        <Route path="/dashboard-orga" element={<DashboardOrga />}>
          <Route index element={<GridAssistantOrganization />} />
          <Route path="create-assistant" element={<CreateAssistantOrga />} />
          <Route path="role" element={<RoleManagementTable />} />
          <Route path="user" element={<TableUsers />} />
          <Route path="invite" element={<Invite />} />
          <Route path="logs" element={<TableLogs />} />
          <Route path="organization" element={<OrganizationInput />} />
          <Route path="apikeys" element={<TableApiKeys /> } />
          <Route path="statistics" element={<div>Statistiques</div>} />
          <Route path="members" element={<div>Gestion des Membres</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
