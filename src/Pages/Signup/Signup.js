import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../Context/Authprovider/Authprovider';
const Signup = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row my-10 py-10">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center font-bold">Signup Now!</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Signup" />
                        </div>
                    </form>
                    <p className='text-center my-5'> Already have an account? <Link to="/login" className='text-orange-600 font-bold'>Log In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;