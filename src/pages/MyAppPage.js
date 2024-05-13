import React from 'react'
import Menu from '../componenets/Menu'

const MyAppPage = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', width:'100%', height:'100%', background:'#deebf7', padding:'10px 0' }}>
        <Menu />

        <div style={{width:'100%', height:'calc(100% - 70px)', display:'flex',  justifyContent:'space-around'}}>
            <div  style={{width:'200px', border:'1px solid', background:'#fff2cc'}}>
              <div style={{padding:'20px 10px'}}>
                  <p>
                      서비스  레이어 
                      <button style={{marginLeft:'5px', borderRadius:'50%', width:'20px', height:'20px', border:'1px solid'}}>+</button>
                  </p>
                  <p style={{width:'100%'}}>-------------------------</p>
              </div>
              <div style={{padding:'0 10px'}}>
                  <div style={{padding:'10px', textAlign:'left'}}>
                      <input type="checkbox" id="scales" name="scales" checked />
                      <label htmlFor="scales" style={{marginLeft:'8px'}}>레이어1</label>
                  </div>
                  <div style={{padding:'10px', textAlign:'left'}}>
                      <input type="checkbox" id="horns" name="horns"  />
                      <label htmlFor="horns" style={{marginLeft:'8px'}}>레이어2</label>
                  </div>
                  <div style={{padding:'10px', textAlign:'left'}}>
                      <input type="checkbox" id="test" name="test"  />
                      <label htmlFor="test" style={{marginLeft:'8px'}}>레이어3</label>
                  </div>
              </div>
          </div>

          <div style={{border:'1px solid', width:'calc(100% - 240px)', background:'#fff2cc'}}>
              myApp
          </div>
        </div>
    </div>

  )
}

export default MyAppPage