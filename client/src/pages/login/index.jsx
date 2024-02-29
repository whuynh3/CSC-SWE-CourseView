
import './login.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
    return (
        <div className="slide-container">
          <div className={`slide-form ${isLogin ? 'login' : 'register'}`}>
            {/* Login Form */}
            {isLogin && (
              <>
                <h2>Login</h2>
                {/* Your login form fields */}
                <button onClick={toggleForm}>Switch to Register</button>
              </>
            )}
          </div>
          <div className={`slide-form ${!isLogin ? 'login' : 'register'}`}>
            {/* Register Form */}
            {!isLogin && (
              <>
                <h2>Register</h2>
                {/* Your register form fields */}
                <button onClick={toggleForm}>Switch to Login</button>
              </>
            )}
          </div>
        </div>
    );
}