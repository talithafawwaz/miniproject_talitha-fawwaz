import Footer from "../../components/Footer/Footer"
import "../LandingPage/LandingPage.css"


const Register = () => {
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
            />
          </div>
          <a role="button" href="/login" className="btn my-3" style={{backgroundColor:"#44039B",color:"white"}}>Sign Up</a>
          <p style={{fontSize:"12px", textAlign:"center"}}>Already have account ? Sign In <a href="/login" style={{fontSize:"12px", textDecoration:"none"}}>here</a></p>
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