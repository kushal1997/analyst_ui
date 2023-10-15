import { Fragment } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { AllRoutes } from './routes/AllRoutes';
import { Test } from './hero_subComponents/Test';

function App() {
  return (
    <Fragment>
  <div className="flex flex-row">
  <Sidebar/>
  <AllRoutes/>
  </div>
    </Fragment>
  // <Test/>
  );
}

export default App;
