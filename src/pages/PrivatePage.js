import React from 'react'
import MainPage from './MainPage';
import ContentsPage from './ContentsPage';
import MyAppPage from './MyAppPage';
import StoryAppPage from './StoryAppPage';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivatePage = ({page}) => {

  let currentPage = '';
  const authenticate = useSelector(state => state.userData.authenticate); 

  switch(page){
    case "Contents":
        currentPage = <ContentsPage />
      break;
    case "MyApp":
        currentPage = <MyAppPage />
      break;
    case "StoryApp":
        currentPage = <StoryAppPage />
      break;
    default:
        currentPage = <MainPage />
      break;
  }
  return authenticate ? currentPage : <Navigate to="/login" />;
}

export default PrivatePage