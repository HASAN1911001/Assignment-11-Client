import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div>
            <Link to='/' className="btn btn-ghost normal-case text-xl">CookeD</Link>
                <p>CookeD Industries Ltd.<br/>Providing food Service since 2010</p>
            </div> 
            <div>
                <span className="footer-title">Services</span> 
                <a href="/" className="link link-hover">Branding</a> 
                <a href="/" className="link link-hover">Design</a> 
                <a href="/" className="link link-hover">Marketing</a> 
                <a href="/" className="link link-hover">Advertisement</a>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <a href="/" className="link link-hover">About us</a> 
                <a href="/" className="link link-hover">Contact</a> 
                <a href="/" className="link link-hover">Jobs</a> 
                <a href="/" className="link link-hover">Press kit</a>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <a href="/" className="link link-hover">Terms of use</a> 
                <a href="/" className="link link-hover">Privacy policy</a> 
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;