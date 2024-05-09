import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../assets/google_login.png'
import KakaoLogin from '../assets/kakao_login.png'
import NaverLogin from '../assets/naver_login.png'

const LoginStyle = {
    border: {
        border:'1px solid', 
        width:'100px', 
        height:'1px', 
        background:'black',
    },
    form: {
        background:'#fff', //5b9bd5 
        boxShadow : '2px 2px 15px 7px #2e749e',
        borderRadius:'15px', 
        width:'300px', 
        height: '400px', 
        margin: '0px auto', 
        padding:'20px', 
        boxSizing:'border-box', 
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'space-around',
    },
    input: {
        height:'20px', 
        marginTop:'3px',
        padding:'5px'
    },
    label: {
        textAlign:'left', 
        // color:'#5b9bd5', 
        fontSize:'14px',
    }
};

const SNSLogin = [
    {
        site: 'Google',
        img : GoogleLogin
    },
    {
        site: 'Kakao',
        img : KakaoLogin
    },
    {
        site: 'Naver',
        img : NaverLogin
    }
]

const Login = () => {
    const [userId, setUserId] = useState(null);
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        dispatch({
            type:"LOGIN_SUCCESS",
            payload: {
                id: userId,
                pw: password
            }
        });

        navigate('/')
    }

    // useEffect(() => {
    //     console.log("access")
    // }, [])

  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <h1 style={{marginBottom:'50px', color:'white', padding:'10px 0'}}>DT플랫폼 입장을 환영합니다.</h1>
        
        <form style={LoginStyle.form} onSubmit={(event) => loginUser(event)}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <label htmlFor='userId' style={LoginStyle.label}>사용자 ID</label>
                <input type='text' id='userId' placeholder='User ID' value={userId} style={LoginStyle.input} onChange={(e)=>setUserId(e.target.value)}/>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <label htmlFor='password' style={LoginStyle.label}>비밀번호</label>
                <input type='password' id='password' placeholder='Password' value={password} style={LoginStyle.input} onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div style={{display:'flex', alignItems:'center', height:'30px', justifyContent:'space-between'}}>
                <div style={LoginStyle.border}></div>
                <p style={{ fontSize:'14px'}}>또는</p>
                <div style={LoginStyle.border}></div>
            </div>

            <div style={{display:'flex', flexDirection:'column'}}>
                { SNSLogin.map((login) => {
                    return (
                        <input type='image' src={login.img} alt={`Login with ${login.site}`} style={{padding:'5px 0', width:'100%', height:'40px', imageRendering:'high-quality'}} />        
                    )
                })}
            </div>
        </form>
    </div>
  )
}

export default Login;
