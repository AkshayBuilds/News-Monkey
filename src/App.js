import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 6;
  const apikey = process.env.REACT_APP_NEW_API;

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)} // Reset after load
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="us" badge="success" category="general" />} />
          <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="ge" badge="success" pageSize={pageSize} country="us" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" badge="warning" pageSize={pageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" badge="primary" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" badge="danger" pageSize={pageSize} country="us" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" badge="primary" pageSize={pageSize} country="us" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" badge="danger" pageSize={pageSize} country="us" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" badge="success" pageSize={pageSize} country="us" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
