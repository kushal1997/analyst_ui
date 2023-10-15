import { Fragment } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';

function App() {
  return (
    <Fragment>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <div className="flex flex-row">
  <Sidebar/>
  <Main/>
  </div>
    </Fragment>
  );
}

export default App;
