import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import "./Login.css";
import { Button } from "react-bootstrap";

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        image: '',
        error: '',
        success: false
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app();
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                console.log(signInUser);
                setLoggedInUser(signInUser);
                history.replace(from);

            }).catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });
    }
    const handleFacebookSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                console.log(signInUser);
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });
    }

    // const handleGoogleSignOut = () => {
    //     console.log("clicked")

    // }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = /\S+@\S+\.\S+/.test(e.target.value.length > 6);
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })

                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.apppassword)
                .then(res => {

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo = false;
                    setUser(newUserInfo);
                });
        }

        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-4">
                        <div className="login text-center">
                            <h1>Login</h1>
                            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                            <label htmlFor="newUser">New User sign Up</label>
                            <form onSubmit={handleSubmit}>
                                {newUser && <input type="text" className="field" name="name" onBlur={handleBlur} placeholder="Full Name" required />}
                                <br />
                                <input type="text" className="field" name="email" onBlur={handleBlur} placeholder="Email" required />
                                <br />
                                <input type="password" className="field" name="password" onBlur={handleBlur} placeholder="Password" required />
                                <br />
                                <br />
                                <input type="submit" className="btnn" value="Submit" />
                            </form>
                            <p style={{ color: 'red' }}>{user.error}</p>
                            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} Successfully</p>}
                            <br />
                            <hr />
                            <Button variant="warning" className="submit-btn" onClick={handleFacebookSignIn}>Continue With Facebook</Button>
                            <Button variant="warning" className="submit-btn" onClick={handleGoogleSignIn}>Continue With Google</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;