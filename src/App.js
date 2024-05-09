import './App.css';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { Routes, Route, Navigate, Link} from 'react-router-dom';
import ContentsPage from './pages/ContentsPage';
import MyAppPage from './pages/MyAppPage';
import StoryAppPage from './pages/StoryAppPage';
import Header from './componenets/Header';
import { useSelector } from 'react-redux';
import ModalPortal from './componenets/ModalPortal';
import { useEffect } from 'react';

function App() {
  const authenticate = useSelector(state => state.userData.authenticate); 

  useEffect(() => {
    console.log("test", authenticate)
  }, [] )

  return (
    <div  className='app-container'>
      {/* {
        authenticate && 
        <div className='nav-container'>
          <Header />
        </div>
      } */}
      <div className='nav-container'>
        <Header />
      </div>
      
      <div className='main-container'>
        <Routes>
          {/* {
            authenticate ?
              <Route path='/' element={<MainPage />} />
            :
              <Route path='/login' element={<Navigate to='/login' />} />
          } */}
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contents' element={<ContentsPage />} />
          <Route path='/myApp' element={<MyAppPage />} />
          <Route path='/storyApp' element={<StoryAppPage />} />          
        </Routes>
        <ModalPortal />
      </div>
    </div>
  );
}

export default App;