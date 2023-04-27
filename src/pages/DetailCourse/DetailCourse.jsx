import NavLogin from "../../components/Navbar/NavLogin"
import Footer from "../../components/Footer/Footer"
import Poster from "../../components/Poster/Poster"
import "./DetailCourse.css"

const DetailCourse = () => {
    return(
        <>
            <NavLogin/>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="advertise" style={{top:"14%", height: "60%", marginBottom: "15%"}}>
                        <p style={{margin:"8% 0% 0% 13%"}}>Course</p>
                        <div className="container" style={{marginLeft:"14%"}}>
                            <h1 style={{fontWeight:"bold", fontSize:"39px"}}>UI/UX Design</h1>
                            <p >With <span style={{color:"#44039B"}}>Andrey Ferriyan</span></p>
                            <a href="/payment" className="btn" style={{ borderColor:"#44039B", fontWeight:"bold", color:"#44039B", }}>
                                Buy Now
                            </a>
                        </div>
                        </div>
                        <div className="information" style={{marginTop:"65%"}}>
                            <h6>Information</h6>
                            <hr style={{width:"17%", fontWeight:"bold"}}/>
                            <h4 style={{fontWeight:"bold"}}>About this course</h4>
                            <p style={{width:"95%"}}>This UI/UX design course takes a design-centric approach to user interface and user experience design, 
                                offering practical and skill-based instruction from a visual communication design perspective and applying it to create effective and engaging screen-based experiences. 
                                In 4 weeks, you will summarize and demonstrate all stages of the UI/UX development process using Adobe XD and Figma applications, 
                                from user research to determining the strategy, scope and information architecture of the project, to developing wireframes, mockups and other design deliverables.</p>
                            <h4 style={{fontWeight:"bold"}}>Topic</h4>
                            <ul>
                                <li>Visual design</li>
                                <li>User Interface Design</li>
                                <li>User Experience Design</li>
                                <li>Design Process</li>
                                <li>Adobe XD</li>
                                <li>Marvel</li>
                                <li>Mockup</li>
                                <li>Prototyping</li>
                                <li>Design Deliverables</li>
                            </ul>
                            <h4 style={{fontWeight:"bold"}}>Requirement</h4>
                            <p>There are no special prerequisites to take this class. 
                            In this class the material is prepared from the basics.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="poster">
                            <Poster/>
                            <a href="/payment" className="btn mx-4" style={{ borderColor:"#44039B", fontWeight:"bold", color:"#44039B", width:"80%"}}>
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-login" style={{marginTop:"40em"}}>
                <div className="copyright" ><Footer/></div>
            </div>
        </>
    )
}

export default DetailCourse