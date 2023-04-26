import NavLogin from "../../components/Navbar/NavLogin"
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"
import "../LandingPage/LandingPage.css"
import "../Login/Login.css"

const Dashboard = () => {

    return(
        <>
            <NavLogin/>
            <div className="advertise" style={{top:"14%", height: "30%", marginBottom: "15%"}}>
                <h1 style={{fontWeight:"bold", fontSize:"39px", margin:"4% 0% 0% 15%"}}>Welcome Back, Talitha Fawwaz!</h1>
                <p style={{margin:"auto 15%"}}>Never stop learning, because life never stops teaching</p>
            </div>
            
            <div className="my-course" >
                <div className="row">
                    <h2 style={{fontWeight:"bold", fontSize:"16px", marginBottom:"3%"}}>My Course</h2>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                </div>
            </div>
            <div className="footer-login">
                <div className="copyright" ><Footer/></div>
            </div>
        </>
    )
}

export default Dashboard