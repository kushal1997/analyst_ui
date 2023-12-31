import { Fragment } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <Fragment>
  <div className="flex flex-row sm:flex-col mm:flex-col">
  <Sidebar/>
  <AllRoutes/>
  </div>
    </Fragment>
  );
}

export default App;
