import React from "react";

import Dashboard from './components/Dashboard/Dashboard';

import dashboardData from './data/data.json';
import styles from './App.module.sass';

const App = () => { 
  return (
    <div className={styles['app-container']}> 
      <Dashboard dashboardData={dashboardData}/>
    </div>
  );
}

export default App;
