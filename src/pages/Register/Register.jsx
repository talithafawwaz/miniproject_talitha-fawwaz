import { gql, useMutation, useQuery } from "@apollo/client";
import Footer from "../../components/Footer/Footer"
import { GetUser } from "../Login/Login";
import "../LandingPage/LandingPage.css"
import { useState } from "react";
import uuid from "react-uuid";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [register, setRegister] = useState({
    id:"",
    fullname: "",
    email: "",
    password: ""
});

console.log(Register)

const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    setRegister(prev => ({
        ...prev,
        [name]: value
    }));
}

const InsertRegister = gql`
mutation MyQuery ($object: User_insert_input!) {
    insert_User_one(object: $object){
        id
        fullname
        email
        password
    }
}
`

const [insertRegister] = useMutation(InsertRegister, {
  refetchQueries: [GetUser]
});
  

const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    const registerData = {
        id:id,
        fullname: register.fullname,
        email: register.email,
        password: register.password
    };
    insertRegister({ variables: { object: registerData } });

    navigate("/login");
};

    return(
        <>
        <div className="content">
        <div className="login col-md-3 p-5">
          <h2 className="mb-3" style={{fontWeight: "600", textAlign:"center", fontSize:"25px"}}>Create New Account</h2>
          <hr />
          <div className="form-outline mb-4">
            <label htmlFor="fullname" className="mb-1">Full Name </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter Your Full Name"
              className="form-control"
              value={register.fullname}
              onChange={handleInput}
            />
          </div>
          <div className="form-outline mb-4">
            <label htmlFor="email" className="mb-1">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="form-control"
              value={register.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-outline mb-4">
            <label htmlFor="password" className="mb-1">Password </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              className="form-control"
              value={register.password}
              onChange={handleInput}
            />
          </div>
          <Link role="button" onClick={handleSubmit} className="btn my-3" style={{backgroundColor:"#44039B",color:"white"}}>Sign Up</Link>
          <p style={{fontSize:"12px", textAlign:"center"}}>Already have account ? Sign In <Link to="/login" style={{fontSize:"12px", textDecoration:"none"}}>here</Link></p>
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

export default Register