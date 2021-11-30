import React, {useState} from 'react'
import "./css/Login.css"
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert("Please enter your name");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user
            .updateProfile({
                displayName: name,
                photoURL: photo,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: photo
                    })
                );
            });
        }).catch((error) => alert(error.message));
    };

    const loginToApp = (e) => {
        e.preventDefault();
    };

    return (
        <div className="Login">
            <img src="https://cdn.pixabay.com/photo/2017/08/22/11/55/linked-in-2668692_1280.png" alt=""/>
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name Surname"/>
                <input value={photo} onChange={e => setPhoto(e.target.value)} type="text" placeholder="Photo Url"/>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>
                Not a member?{"   "}
                <span className="LoginRegister" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login
