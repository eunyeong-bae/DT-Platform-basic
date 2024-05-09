import './App.css';
import { Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './componenets/Header';
import Login from './pages/Login';
import PrivatePage from './pages/PrivatePage';
import ModalPortal from './componenets/ModalPortal';

function App() {
  const authenticate = useSelector(state => state.userData.authenticate); 

  // useEffect(() => {
  //   console.log("test", authenticate)
  // }, [authenticate] )

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
          <Route path='/' element={<PrivatePage page='Home' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contents' element={<PrivatePage page='Contents' />} />
          <Route path='/myApp' element={<PrivatePage page='MyApp' />} />
          <Route path='/storyApp' element={<PrivatePage page='StoryApp' />} />
        </Routes>
        <ModalPortal />
      </div>
    </div>
  );
}

export default App;