import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { Routes, Route} from 'react-router-dom';
import ContentsPage from './pages/ContentsPage';
import MyAppPage from './pages/MyAppPage';
import StoryAppPage from './pages/StoryAppPage';
import Header from './componenets/Header';

function App() {
  /**
   * 전역관리 필요
   * 
   * 1. currentpage 값에 따른 Header 우 버튼 메뉴 예외 처리
   * 
   */
  const [isAuthorized, setIsAuthorized ] = useState(true);

  return (
    <div  className='app-container'>
      <div className='nav-container'>
        <Header rMenu='사용자 관리' />
      </div>
      
      <div className='main-container'>
        <Routes>
          {/* { !isAuthorized 
            ? <Route path='/login' element={<Login />} /> : <Route path='/' element={<MainPage />} /> } */}
          {/* {!isAuthorized ? <Login /> : <MainPage /> } */}
          <Route path='/' element={<MainPage />} />
          <Route path='/contents' element={<ContentsPage />} />
          <Route path='/myApp' element={<MyAppPage />} />
          <Route path='/storyApp' element={<StoryAppPage />} />
        </Routes>
      </div>
    </div>


  );
}

export default App;
