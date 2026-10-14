import axios from "axios";
import { useEffect, useState } from "react";
import { signupUser, loginUser, getProfile } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function AuthPage() {
  const { setUser } = useAuth();

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("User is not logged in");
    return;
  }

  getProfile()
    .then((response) => {
      console.log("Middleware passed:", response.data);
    })
    .catch((error) => {
      console.log(
        "Middleware rejected:",
        error.response?.data?.message
      );
    });
}, []);


  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  };

  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
      const response = await loginUser(loginData)
      if(response.data.success){
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token)
        setUser(response.data.user);

        window.location.hash = "#/"
      }
    }catch(error) {
      console.log("Error Loggin User" + error);
    }
  }
  
  const currentUser = JSON.parse(localStorage.getItem("user"));
  console.log("Current User", currentUser?.name);

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const response = await signupUser(formData);

      console.log(response)

      if(response.data.success){
        window.location.hash = "#/login"
      }
    }catch(error){
      console.log("Error Signup User" + error)
    }
  }

  return (
    <div className="page" data-page="auth">
      <section className="auth-page">
        <div className="auth-shell">
          <div className="auth-story">
            <a className="auth-brand" href="#/">
              Intellio<b>Era</b>
            </a>
            <div className="auth-story-copy">
              <span className="kicker">THE INTELLIGENT WORKSPACE</span>
              <h1>
                Make the work
                <br />
                <span>move itself.</span>
              </h1>
              <p>
                One secure workspace for the agents that keep your people,
                pipeline and progress moving.
              </p>
            </div>
            <div className="auth-signal">
              <i></i>
              <span>YOUR WORKSPACE IS READY</span>
              <b>24/7</b>
            </div>
          </div>
          <div className="auth-card">
            <div className="auth-card-head">
              <span className="auth-eyebrow" id="authEyebrow">
                WELCOME BACK
              </span>
              <h2 id="authTitle">Sign in to your workspace</h2>
              <p id="authSubtitle">
                Continue where your intelligent work left off.
              </p>
            </div>
            <div className="auth-switch">
              <a href="#/login" data-auth-mode="login">
                Sign in
              </a>
              <a href="#/signup" data-auth-mode="signup">
                Create account
              </a>
            </div>
            <form className="auth-form" id="authForm" data-auth-form="login" onSubmit={handleLogin}>
              <label>
                <span>WORK EMAIL</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  name="email"
                  onChange={handleLoginChange}
                  value={loginData.email}
                />
              </label>
              <label>
                <span>PASSWORD</span>
                <div className="auth-password">
                  <input
                    type="password"
                    placeholder="At least 8 characters"
                    required
                    name="password"
                    onChange={handleLoginChange}
                    value={loginData.password}
                  />
                  <button
                    type="button"
                    id="togglePassword"
                    aria-label="Show password"
                  >
                    Show
                  </button>
                </div>
              </label>
              <div className="auth-options">
                <label className="auth-check">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" id="forgotPassword">
                  Forgot password?
                </a>
              </div>
              <button className="auth-submit" type="submit">
                <span id="authSubmitLabel">Enter workspace</span>
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <p className="auth-feedback" id="authFeedback" role="status"></p>
            </form>
            <form
              className="auth-form"
              id="authSignupForm"
              data-auth-form="signup"
              hidden
              onSubmit={handleSubmit}
            >
              <label>
                <span>FULL NAME</span>
                <input
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>WORK EMAIL</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>PASSWORD</span>
                <div className="auth-password">
                  <input
                    type="password"
                    placeholder="At least 6 characters"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    id="toggleSignupPassword"
                    aria-label="Show password"
                  >
                    Show
                  </button>
                </div>
              </label>
              <div className="auth-options">
                <label className="auth-check">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" id="forgotSignupPassword">
                  Forgot password?
                </a>
              </div>
              <button className="auth-submit" type="submit">
                <span id="authSignupSubmitLabel">Create workspace</span>
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <p
                className="auth-feedback"
                id="authSignupFeedback"
                role="status"
              ></p>
            </form>
            <div className="auth-divider">
              <span>OR CONTINUE WITH</span>
            </div>
            <div className="auth-providers">
              <button type="button">
                <b>G</b> Google
              </button>
              <button type="button">
                <b>MS</b> Microsoft
              </button>
            </div>
            <p className="auth-legal">
              By continuing, you agree to our <a href="#/terms">Terms</a> and{" "}
              <a href="#/privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
