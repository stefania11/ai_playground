import React from 'react';
import { NavBar } from './Navigation';
import { Welcome } from './Welcome';
import { ActivityFilter } from './ActivityFilter';
import { ActivityList } from './ActivityList'
import { ActivityPage } from './ActivityPage'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <div>
        <NavBar />
        </div> */}
        <Routes>
          <Route exact path="/" element = {
            <section className="homepage">
              <NavBar />
              <Welcome />
              <div className="explorTab">
                <p>{"Explore Activities"}</p>
                <Link to='/Activity'>
                  <button className="btn border-dark bg-transparent rounded-circle" >
                    <KeyboardArrowDownIcon style={{ fontSize: 40 }} />
                  </button>
                </Link>
              </div>
            </section>
          }/>
            
          <Route path="/Activity" element = {
            <div>
              <ActivityFilter />
              <ActivityList />
            </div>
          }/>

          <Route path="/Activity/ObjectDetection" element={
            <div>
              <ActivityPage />
            </div>
          } />
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
