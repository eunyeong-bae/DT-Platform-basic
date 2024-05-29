import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../assets/google_login.png'
import KakaoLogin from '../assets/kakao_login.png'
import NaverLogin from '../assets/naver_login.png'
import './style/style.css';

const SNSLogin = [
    {
        site: 'Google',
        img: GoogleLogin
    },
    {
        site: 'Kakao',
        img: KakaoLogin
    },
    {
        site: 'Naver',
        img: NaverLogin
    }
]

const loginData = [
    {
        id: 'userId',
        type: 'text',
        placeholder: 'User ID',
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Password',
    }
]

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickLogin = () => {
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
                id: userId,
                pw: password
            }
        });

        navigate('/');
    }

    const handleSNSLogin = () => {
        alert("곧 서비스가 오픈됩니다.");
    };

    const handleInputData = (targetVal, type) => {
        if (type === 'userId') {
            setUserId(targetVal);
        } else {
            setPassword(targetVal)
        }
    }
    //backgroundImage: 'url(' + require('../assets/company_bg.png')+')' 
    return (
        <div className='login-container'>
            <h1 className='login-title'>DT플랫폼 입장을 환영합니다.</h1>

            <form className='form-wrap'>
                {
                    loginData.map((login) => {
                        return (
                            <div key={login.id} style={{ display: 'flex', flexDirection: 'column', width: '95%' }}>
                                <label htmlFor={login.id} className='form-label'>{login.type === 'text' ? '사용자 ID' : '비밀번호'}</label>
                                <input
                                    type={login.type}
                                    id={login.id}
                                    value={login.type === 'text' ? userId : password}
                                    placeholder={login.placeholder}
                                    className='form-input'
                                    onChange={(e) => handleInputData(e.target.value, login.id)}
                                />
                            </div>
                        )
                    })
                }
                <button className='form-button' onClick={onClickLogin}>Sign in</button>

                <div style={{ display: 'flex', alignItems: 'center', height: '30px', justifyContent: 'space-between', width: '95%' }}>
                    <div className='border-style'></div>
                    <p style={{ fontSize: '14px' }}>또는</p>
                    <div className='border-style'></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {SNSLogin.map((login) => {
                        return (
                            <input
                                key={login.site}
                                type='image'
                                src={login.img} alt={`Login with ${login.site}`}
                                style={{ padding: '5px 0', width: '100%', height: '40px', imageRendering: 'high-quality' }}
                                onClick={handleSNSLogin}
                            />
                        )
                    })}
                </div>
            </form>
        </div>
    )
}

export default Login;
