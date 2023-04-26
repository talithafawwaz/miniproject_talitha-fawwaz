import NavLogin from "../../components/Navbar/NavLogin"
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"
import "../LandingPage/LandingPage.css"
import "../Login/Login.css"
import { CaretRightFill } from "react-bootstrap-icons"

const Catalog = () => {
    return(
        <>
            <NavLogin/>
            <div className="advertise" style={{top:"14%", height: "40%", marginBottom: "15%"}}>
                <h1 style={{textAlign:"center", marginTop:"5%"}}><span style={{fontWeight:"bold", fontSize:"39px", color:"#44039B"}}>AhaiLearn </span>Courses Catalog</h1>
                <div class="btn-group w-50 my-4" role="group" aria-label="Basic example" style={{marginLeft:"25%"}}>
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search courses with keyboard"
                    aria-label="Search"
                />
                <button className="btn text-light" type="submit" style={{backgroundColor:"#44039B"}}>
                    <div className="row">
                        <div className="col-md-6">Search</div>
                        <div className="col-md-6"><CaretRightFill/></div>
                    </div>
                </button>
                </div>
            </div>
            <div className="my-course mt-5">
                <div className="row">
                    <div className="col-lg-3 mb-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3 mb-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                </div>
            </div>
            <div className="footer-login" style={{marginTop:"30em"}}>
                <div className="copyright" ><Footer/></div>
            </div>
        </>
    )
}

export default Catalog