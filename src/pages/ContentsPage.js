import React, { useEffect } from 'react'
import SideBarMenu from '../componenets/SideBarMenu'
import { getAssetLists } from '../redux/action/assetsAction';
import { getAssets } from '../api/assets';
import { useDispatch, useSelector } from 'react-redux';
import MyServiceAddPage from './myServiceListPages/MyServiceAddPage';
import MyServiceSelectPage from './myServiceListPages/MyServiceSelectPage';

const ContentsPage = () => {
  const subBarMenuInfo = useSelector(state => state.subBarMenuInfo);
  
  const dispatch = useDispatch();

  useEffect(() => {
    axiosTest();
    // dispatch(getAssetLists());
  }, []);

  const axiosTest = async() => {
    const res = await getAssets();
    
    // const res = await getAssetLists();
    console.log("test", res)
    if(res) {
      dispatch({type:"GET_ASSETS_SUCCESS", payload:{myAssetDatas: res.items}})
    }
  }

  return (
    <div style={{width:'100%', height:'100%', display:'flex', justifyContent:'space-between', padding:'10px 5px',}}> 
      <SideBarMenu />
      
      <div style={{borderLeft:'1px solid #fff', width:'calc(100% - 240px)', height:'calc(100% - 70px)', padding:'20px'}}>
        {
          subBarMenuInfo?.selectedSubMenu === '내 서비스 목록 추가' ? 
            <MyServiceAddPage />
          : 
            <MyServiceSelectPage />
        }
      </div>
    </div>
  )
}

export default ContentsPage