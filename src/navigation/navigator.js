import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
} from "react-router-dom";
import { selectHistory } from '../slices/repositorySlice';
import InitialPage from '../pages/initial'
import NotFoundPage from '../pages/notfound'
import Profile from "../pages/profile";
import { createBrowserHistory } from 'history';

export default function Navigation() {

  const history = createBrowserHistory();

  const historyPage = useSelector(selectHistory);
    
  useEffect(() => {
    history.push(historyPage);
  }, [historyPage]);

  return (
    <Routes>
      
      
      <Route path="*" element={<Profile />}/>
      <Route exact path="/notfound" element={<NotFoundPage />}/>
      <Route exact path="/" element={<InitialPage />}/>
    </Routes>
  );
};