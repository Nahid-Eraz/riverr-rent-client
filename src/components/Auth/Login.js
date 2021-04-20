import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email: email}
                console.log(signedInUser);
                setLoggedInUser(signedInUser);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }



    const handleLogin = () => {
        alert('In Development')
    }
    return (
        <div className="text-center bg-main" >
            <form className="mt-5">
                <h1>Login</h1>
                <input className="input-item" type="text" placeholder="Your Name" />
                <br />
                <br />
                <input className="input-item" type="text" name="email" placeholder="Your Email" />
                <br />
                <br />
                <input className="input-item" type="password" name="password" id="" placeholder="Your Password" />
                <br />
                <br />
                <input type="checkbox" name="newUser" id="" />
                <label htmlFor="newUser"> Remember me</label>
                <br />
                <br />
                <button className="bg-warning text-dark"style={{ width: '39%' }} onClick={() => handleLogin()}>Login</button>
                <br />
                <br />
                <p>Don't have an account? <span className="text-warning"> Create an account</span></p>
            </form>
            <br />
            <p><small>OR</small></p>
            <br />
            <div>
                <button className="btn-main text-dark" style={{width: '39%' }} onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Log in with Google</button>
            </div>
            <br/>
            <br/>
            <Link className="text-warning" to="/">Back to Home</Link>
        </div>
    );
};

export default Login;