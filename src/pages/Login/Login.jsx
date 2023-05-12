import Footer from "../../components/Footer/Footer";
import "../Login/Login.css";
import "../LandingPage/LandingPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";

export const GetUser = gql`
  query loginUser($email: String!, $password: String!) {
    User(where: {email: {_eq: $email}, password: {_eq: $password}}) {
      id
      fullname
      email
      password
      birthdate
      phone
      gender
      lastedu
      lasteduname
      address
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const [loginDashboard, { data: userData }] = useLazyQuery(GetUser);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: data.email,
      password: data.password,
    };
    console.log(data);
    loginDashboard({ variables: { email: loginData.email, password: loginData.password } });
  };

  useEffect(() => {
    if (userData && userData.User && userData.User.length > 0) {
      const { id, fullname, email, password } = userData.User[0];
      setErrorMessage("");
      const user = {
        id,
        fullname,
        email,
        password,
      };
      sessionStorage.setItem("user", JSON.stringify(userData.User[0]));
      navigate("/dashboard");
    } else if (userData && userData.User && userData.User.length === 0) {
      setErrorMessage("Username or password is incorrect");
    }
  }, [userData]);

  return(
    <>
      <div className="content">
        <div className="login col-md-3 p-5">
          <h2 style={{fontWeight: "600"}}>Welcome back!</h2>
          <p>Please enter your details</p>
          <div className="form-outline mb-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control"
              value={data.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control"
              value={data.password}
              onChange={handleInput}
            />
          </div>
          <p>{errorMessage}</p>
          <Link role="button" onClick={handleSubmit} state={{data:data}} className="btn my-3" style={{backgroundColor:"#44039B",color:"white"}}>Sign In</Link>
          <p style={{fontSize:"12px", textAlign:"center"}}>Don’t have account yet? Sign Up <a href="/register" style={{fontSize:"12px", textDecoration:"none"}}>here</a></p>
        </div>
      </div>
      <div className="footer">
        <div className="copyright">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Login