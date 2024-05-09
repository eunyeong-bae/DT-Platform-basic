import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../assets/google_login.png'
import KakaoLogin from '../assets/kakao_login.png'
import NaverLogin from '../assets/naver_login.png'

const LoginStyle = {
    border: {
        border: '1px solid',
        width: '100px',
        height: '1px',
        background: 'black',
    },
    form: {
        background: '#fff', //5b9bd5 
        boxShadow: '2px 2px 15px 7px #2e749e',
        borderRadius: '15px',
        width: '350px',
        height: '450px',
        margin: '0px auto',
        padding: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        height: '20px',
        marginTop: '3px',
        padding: '5px'
    },
    label: {
        textAlign: 'left',
        // color:'#5b9bd5', 
        fontSize: '14px',
    },
    signBtn: {
        width: '90%',
        height: '40px',
        color: '#fff',
        fontSize: '15px',
        letterSpacing: '1px',
        border: 'none',
        borderRadius: '5px',
        background: '#5b9bd5',
    }
};

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

    // useEffect(() => {
    //     console.log("access")
    // }, [])

    const handleInputData = (targetVal, type) => {
        if (type === 'userId') {
            setUserId(targetVal);
        } else {
            setPassword(targetVal)
        }
    }
    //backgroundImage: 'url(' + require('../assets/company_bg.png')+')' 
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h1 style={{ marginBottom: '50px', color: 'white', padding: '10px 0' }}>DT플랫폼 입장을 환영합니다.</h1>

            <form style={LoginStyle.form}>
                {
                    loginData.map((login) => {
                        return (
                            <div key={login.id} style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                                <label htmlFor={login.id} style={LoginStyle.label}>{login.type === 'text' ? '사용자 ID' : '비밀번호'}</label>
                                <input
                                    type={login.type}
                                    id={login.id}
                                    value={login.type === 'text' ? userId : password}
                                    placeholder={login.placeholder}
                                    style={LoginStyle.input}
                                    onChange={(e) => handleInputData(e.target.value, login.id)}
                                />
                            </div>
                        )
                    })
                }
                <button style={LoginStyle.signBtn} onClick={onClickLogin}>Sign in</button>

                <div style={{ display: 'flex', alignItems: 'center', height: '30px', justifyContent: 'space-between', width: '90%' }}>
                    <div style={LoginStyle.border}></div>
                    <p style={{ fontSize: '14px' }}>또는</p>
                    <div style={LoginStyle.border}></div>
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
