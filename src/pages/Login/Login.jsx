import { Google } from "react-bootstrap-icons"
import Footer from "../../components/Footer/Footer"
import "../Login/Login.css"
import "../LandingPage/LandingPage.css"

const Login = () => {
  return(
    <>
      <div className="content">
        <div className="login col-md-3 p-5">
          <h2 style={{fontWeight: "600"}}>Welcome back!</h2>
          <p>Please enter your details</p>
          <button className="btn btn-outline-secondary my-4">
            <div className="row">
              <div className="col-md-3" style={{textAlign:"right"}}><Google/></div>
              <div className="col-md-9" style={{textAlign:"left"}}>Sign In with Google</div>
            </div>
          </button>
          <div className="row mb-4">
            <div className="col-md-5">
              <hr />
            </div>
            <div className="col-md-2" style={{textAlign:"center"}}>
              or
            </div>
            <div className="col-md-5">
              <hr />
            </div>
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <a role="button" href="/dashboard" className="btn my-3" style={{backgroundColor:"#44039B",color:"white"}}>Sign In</a>
          {/* <button className="btn my-3" style={{backgroundColor:"#44039B",color:"white"}}>Sign In</button> */}
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