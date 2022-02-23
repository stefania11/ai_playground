import React from 'react';
import { NavBar } from './Navigation';
import { Welcome } from './Welcome';
import { ActivityFilter } from './ActivityFilter';
import { ActivityList } from './ActivityList'
import { ActivityPageCoral, ActivityPageDesign, ActivityPageScavenger, ActivityPageAsk } from './ActivityPage'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        {/* <div>
        <NavBar />
        </div> */}
        <Routes>
          <Route exact path="/" element={
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
          } />

          <Route path="/Activity" element={
            <div>
              <ActivityFilter />
              <ActivityList />
            </div>
          } />

          <Route path="/Activity/Coral" element={
            <div>
              <ActivityPageCoral />
            </div>
          } />

          <Route path="/Activity/ScavengerHunt" element={
            <div>
              <ActivityPageScavenger />
            </div>
          } />

          <Route path="/Activity/DesignAnalyzeAI" element={
            <div>
              <ActivityPageDesign />
            </div>
          } />

          <Route path="/Activity/AskAI" element={
            <div>
              <ActivityPageAsk />
            </div>
          } />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
