import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../Context/Authprovider/Authprovider';

const Header = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100 h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">CookeD</Link>
            </div>
            <div className="navbar-end">
                <Link to='/' className="m-4">Home</Link>
                <Link to='/services' className="m-4">Services</Link>
                <Link to='/blogs' className="m-4">Blogs</Link>
                {
                    user?.email?
                    <>
                    <Link to='/reviews' className="m-4">My Reviews</Link>
                    <Link to='/' className="m-4">My Services</Link>
                    <Link to='/' className="m-4">Log Out</Link>
                    </>
                    :
                    <Link to='/login' className="m-4">Log In</Link>
                }
            </div>
        </div>
    );
};

export default Header;