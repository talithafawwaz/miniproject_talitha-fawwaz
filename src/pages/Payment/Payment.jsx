import NavLogin from "../../components/Navbar/NavLogin"
import Poster from "../../components/Poster/Poster"
import Footer from "../../components/Footer/Footer"
import Form from "../../components/Form/Form"
import "../DetailCourse/DetailCourse.css"

const Payment = () => {
    return(
        <>
            <NavLogin/>
            <div className="advertise" style={{top:"14%", height: "100%", marginBottom: "15%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="formulir">
                                <Form/>
                                <a href="/confirmation" className="btn mx-4" style={{ backgroundColor:"#44039B", fontWeight:"bold", color:"white", width:"93%"}}>
                                    Buy Now
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3" style={{marginTop:"-5%"}}>
                            <div className="poster" style={{height:"77%"}}>
                                <Poster/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="footer-login" style={{marginTop:"7em"}}>
                <div className="copyright" ><Footer/></div>
            </div>
        </>
    )
}

export default Payment