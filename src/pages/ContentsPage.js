import React, { useEffect } from 'react'
import SideMenuBar from '../componenets/SideMenuBar'
import { getAssetLists } from '../redux/action/assetsAction';
import axios from 'axios';
import { getAssets } from '../api/assets';
import { useDispatch, useSelector } from 'react-redux';

const ContentsPage = () => {
  const dispatch = useDispatch();

  const assets = useSelector(state => state.assets);

  useEffect(() => {
    axiosTest();
    // dispatch(getAssetLists());
  }, []);


  useEffect(() => {
    console.log("confirm", assets)
  }, [assets])

  const axiosTest = async() => {
    const res = await getAssets();
    
    // const res = await getAssetLists();
    // console.log("test", res)
    if(res) {
      dispatch({type:"GET_ASSETS_SUCCESS", payload:{assets: res.items}})
    }
  }

  return (
    <div style={{width:'100%', height:'100%', background:'#deebf7', display:'flex', justifyContent:'space-between', padding:'10px 5px'}}>
      <SideMenuBar />
      
      <div style={{border:'1px solid', width:'calc(100% - 240px)'}}>
          content
      </div>
    </div>
  )
}

export default ContentsPage