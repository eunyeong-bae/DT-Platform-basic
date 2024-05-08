import React, { useState } from 'react'

const LoginStyle = {
    border: {
        border:'1px solid', 
        width:'100px', 
        height:'1px', 
        background:'black',
    },

    input: {
        height:'20px', 
        marginTop:'3px'
    },
    label: {
        textAlign:'left', 
        color:'white', 
        fontSize:'15px',
    }
}

const Login = () => {
    const [userId, setUserId] = useState(null);
    const [password, setPassword] = useState(null);

  return (
    <div style={{background:'#f3ffff', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <h1 style={{margin:'50px 0'}}>DT플랫폼 입장을 환영합니다.</h1>
        
        <form style={{ background:'#5b9bd5', border:'1px solid', borderRadius:'15px', width:'300px', height: '400px', margin: '0px auto', padding:'20px', boxSizing:'border-box', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <label htmlFor='userId' style={LoginStyle.label}>사용자 ID</label>
                <input type='text' id='userId' value={userId} style={LoginStyle.input}/>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <label htmlFor='password' style={LoginStyle.label}>비밀번호</label>
                <input type='password' id='password' value={password} style={LoginStyle.input}/>
            </div>

            <div style={{display:'flex', alignItems:'center', height:'30px', justifyContent:'space-between'}}>
                <div style={LoginStyle.border}></div>
                <p style={{color:'white', fontSize:'14px'}}>또는</p>
                <div style={LoginStyle.border}></div>
            </div>

            <div style={{height:'150px', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                <button style={{height:'30px'}}>로그인 with Google</button>
                <button style={{height:'30px'}}>로그인 with Kakao</button>
                <button style={{height:'30px'}}>로그인 with Naver</button>
            </div>
        </form>
    </div>
  )
}

export default Login;
