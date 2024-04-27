import React, {useCallback} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {usersService} from "../services/users.service";
import {LOGIN, SIGNUP_USER} from "../redux";
import {useLocation, useNavigate} from "react-router-dom";

const LogInPage = () => {
    const {handleSubmit, register} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const LogIn = location.pathname.includes('/logIn');


    const submit = useCallback(async (data) => {
            try {
                if (LogIn) {
                    const user = await usersService.logIn(data);
                    dispatch({type: LOGIN, payload: user.data})
                    navigate('/')
                } else {
                    await usersService.signUp(data).then(() => dispatch({type: SIGNUP_USER}));
                    navigate('/logIn')
                }
            } catch (e) {
                console.log("error: ", e)
            }
        }, [dispatch, navigate, LogIn]
    )


    return (
        <div className="loginpage">
            <div className="loginpage-img-container">
                <img
                    className="loginpage-img"
                    src="https://s3-alpha-sig.figma.com/img/a47d/b256/b2f7ebf3957623e4989fbd343e95450f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0kbX4JdNjehkED7xnkvNZcwm~sQ5Uvw~-uKRPYFueBD3uCAZHhdik147m1fOn0KLdf7QI8LWrSuB2T7t4Ez8mZYowd2hOh8wuKuL4uC58qVVybiBTbaYHYqgVHsn0GxLdJD6DkaXcx0ySZ6g62VttMUqqh-pbB9CIXzC6UYhQjI6N0hxkG9ZjergxriJHFLaR-rhBQsv-nRIrAsxjUguT31oNdxA6u~y~hFMzfCwihfOV6vEFJRjrmA2uGpBZHRr~DCqqXKc9DuzXH-Sm8~J41lAX3-dRDuFubTsU4JCiD2CzX0AGPf40XZcG8hWfe8Ouv4Fmvmis4WdJKvahUFBA__"
                    alt="background login"
                />
            </div>
            <div className="loginpage-form-container">
                <form onSubmit={handleSubmit(submit)} className="loginpage-form">
                    {
                        LogIn ? <h1 className="loginpage-form-title">Login</h1> :
                            <h1 className="loginpage-form-title">Sign Up</h1>
                    }
                    <div className="loginpage-input-container">
                        <h3 className="loginpage-input-title">Email</h3>
                        <input className="loginpage-input" type="text"
                               placeholder="Email" {...register('email', {required: true})}/>
                    </div>
                    <div className="loginpage-input-container">
                        <h3 className="loginpage-input-title">Password</h3>
                        <input className="loginpage-input" type="password"
                               placeholder="Password" {...register('password', {required: true})} />
                    </div>

                    {
                        LogIn ?
                            <p className="loginpage-link">
                                <a href="">Forgot password?</a>
                            </p> : null
                    }
                    {
                        LogIn ?
                            <button className="loginpage-submit" type="submit">Sign In</button> :
                            <button className="loginpage-submit" type="submit">Sign Up</button>
                    }
                    {
                        LogIn ?
                            <p className="loginpage-signup">Don't have account? <a href="/signUp">Sign Up</a></p> :
                            <p className="loginpage-signup">Have account? <a href="/logIn">Log In</a></p>
                    }
                </form>
            </div>
        </div>

    );
};

export {
    LogInPage
};