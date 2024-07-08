import { useNavigate } from "react-router-dom";
import "./index.scss";

import { GoogleAuthProvider } from "firebase/auth/cordova";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  const handleLoginGoogle = () => {
    signInWithPopup (auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(credential);
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <iframe
        className="login__video"
        src="https://player.vimeo.com/video/695343114?h=1a71dea0f0?controls=0&sidedock=0&title=0&autoplay=1&muted=1&loop1"
        width="640"
        height="360"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      
      <div className="wrapper">
        <div className="login__logo">
          <img
            src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg"
            alt=""
            width={200}
          />
        </div>
        <div className="login__form">
          <h3>Login into your account</h3>
          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <button className="login__form__btn button">Login</button>

          <button
            className="login__form__btnGoogle button"
            onClick={handleLoginGoogle}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              alt=""
              width={30}
            />
            <span>Login with google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
