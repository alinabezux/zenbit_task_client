import React, {useEffect, useState} from 'react';
import {usersService} from "../services/users.service";
import {useLocation} from "react-router-dom";

const Header = () => {
    const [userId, setUserId] = useState(null);
    const location = useLocation();

    const hideButtons = userId || location.pathname.includes('/logIn') || location.pathname.includes('/signUp');

    const handleLogOut = () => {
        usersService.logOut();
        setUserId(null)
        window.location.reload()
    };

    useEffect(() => {
        const user = usersService.getUser();
        if (user) {
            setUserId(user);
        }
    }, [location]);

    return (
        <header className="App-header">
            {!hideButtons ?
                <>
                    <a className="App-link" href='/logIn'>
                        <button className="btn btn-login">Log In</button>
                    </a>
                    <a className="App-link" href='/signUp'>
                        <button className="btn btn-signup">Sign Up</button>
                    </a>
                </> : null}
            {
                userId ? <button className="btn btn-signup" onClick={handleLogOut}>Sign Out</button> : null
            }
        </header>
    );
};

export {Header};