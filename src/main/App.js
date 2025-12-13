// App.js
import React from "react";
import { UserManagementProvider } from '../UserManagementContext';
import AppContent from './AppContent';

function App() {
  return (
    <UserManagementProvider>
      <AppContent />
    </UserManagementProvider>
  );
}

export default App;