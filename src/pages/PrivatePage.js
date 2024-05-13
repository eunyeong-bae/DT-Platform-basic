import React from 'react'
import MainPage from './MainPage';
import ContentsPage from './ContentsPage';
import MyAppPage from './MyAppPage';
import StoryAppPage from './StoryAppPage';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivatePage = ({page}) => {

  let returnPage = '';
  const authenticate = useSelector(state => state.userData.authenticate); 

  switch(page){
    case "Contents":
      returnPage = <ContentsPage />
      break;
    case "MyApp":
      returnPage = <MyAppPage />
      break;
    case "StoryApp":
      returnPage = <StoryAppPage />
      break;
    default:
      returnPage = <MainPage />
      break;
  }
  return authenticate ? returnPage : <Navigate to="/login" />;
}

export default PrivatePage