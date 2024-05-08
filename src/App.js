import './App.css';
import { useEffect } from 'react';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { Routes, Route} from 'react-router-dom';
import ContentsPage from './pages/ContentsPage';
import MyAppPage from './pages/MyAppPage';
import StoryAppPage from './pages/StoryAppPage';
import Header from './componenets/Header';
import { useSelector } from 'react-redux';
import ModalPortal from './componenets/ModalPortal';

function App() {
  /**
   * 전역관리 필요
   * 
   * 1. currentpage 값에 따른 Header 우 버튼 메뉴 예외 처리
   * 
   */
  // const [isAuthorized, setIsAuthorized ] = useState(true);
  const authenticate = useSelector(state => state.userData.authenticate); 

  return (
    <div  className='app-container'>
      {
        authenticate && 
        <div className='nav-container'>
          <Header />
        </div>
      }
      
      <div className='main-container'>
        <Routes>
          {
            authenticate ?
              <Route path='/' element={<MainPage />} />
            :
              <Route path='/login' element={<Login />} />
          }

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