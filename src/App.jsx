import { Route, Routes } from 'react-router-dom';

// local imports
import LayoutHandler from './components/LayoutHandler/LayoutHandler.component';
import Dashboard from './pages/Dashboard/Dashboard.page';
import UserManagement from './pages/UserManagement/UserManagement.component';
import Report from './pages/Report/Report.component';
import Settings from './pages/Settings/Settings.component';

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutHandler />}>
          <Route
            index
            path={'/'}
            element={<Dashboard />}
          />
          <Route
            path={'/user-management'}
            element={<UserManagement />}
          />
          <Route
            path={'/reports'}
            element={<Report />}
          />
          <Route
            path={'/settings'}
            element={<Settings />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
