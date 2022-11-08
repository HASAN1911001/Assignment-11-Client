import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto'>
            <div className="card bg-base-100 shadow-xl mx-20 my-10">
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <p>
                        The five critical differences between SQL vs NoSQL are: <br />

                        1. SQL databases are relational, NoSQL databases are non-relational. <br />
                        2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                        3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                        4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                        5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. <br />
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl mx-20 my-10">
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p >
                        JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information
                        or authorization/authentication requests between a client and a server. Each JWT contains encoded
                        JSON objects. JWTs are signed using a cryptographic algorithm by the token's issuer to ensure that
                        No one could alter the claims after the token is issued and later can be used by the receiving
                        party to verify the token.<br />
                    </p>
                        JWT or JSON Web Tokens are mainly used for authentication, authorization, and information exchange.<br/>
                    <p>
                        Authentication: In the case of authentication, a JWT is returned when the user successfully logs in using 
                        their credentials. User can save it locally either in the local storage, session storage, or cookies.<br/>
                    </p>
                        Authorization: Once the user successfully logs in, there may be a need to access data from the server. In 
                        such cases, the user can use JWT to retrieve the data. JWT should be sent by the user, typically in the 
                        Authorization header using the Bearer schema.<br/>
                    <p>
                        Authorization: Information Exchange: JWTs are widely used to exchange a set of information between parties. 
                        Since they are signed, you can be sure of the sender that he is genuine. Also, the signature part of the token 
                        allows you to make sure that the token has not been tampered with.<br/>
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl mx-20 my-10">
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <p>
                        JavaScript is a high-level, lightweight (easy syntax) and object-oriented programming language 
                        that is used by almost every web developer to create web pages, web applications, mobile applications 
                        and is also used in game development. Node.js is a JavaScript runtime environment built on google's v8 
                        engine which is used to run JavaScript outside the browser and to put it simply it is just an extension 
                        of a JavaScript library with many modules hence making JavaScript even more powerful.
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl mx-20 my-10">
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with 
                        the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop 
                        that receives requests and processes them. EventLoop is the listener for the EventQueue. 
                    </p>
                    <p>
                        If NodeJS can process the request without I/O blocking then the event loop would itself process 
                        the request and sends the response back to the client by itself. But, it is possible to process 
                        multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;


// - Difference between SQL and NoSQL
// -
// -
// - 