import NavLogin from "../../components/Navbar/NavLogin"
import Footer from "../../components/Footer/Footer"
import "../DetailCourse/DetailCourse.css"
import course from '../../assets/course.svg'

const MyCourse = () => {
    return(
        <>
            <NavLogin/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="poster" style={{zIndex:"2", height:"50%"}}>
                            <div className='poster-og'>
                                <img className="card-img-top" 
                                    style={{ width: "13rem", margin:"10%"}} 
                                    src={course} alt="image" 
                                />
                                <div style={{marginLeft:"10%", fontSize:"10px"}}>
                                    <p style={{marginBottom:"-1%", fontWeight:"bold", color:"#44039B"}}>Start Date:</p>
                                    <p >30 November 2022</p>
                                    <p style={{marginBottom:"-1%", fontWeight:"bold", color:"#44039B"}}>End Date:</p>
                                    <p >25 January 2022</p>
                                    <p style={{marginBottom:"-1%", fontWeight:"bold", color:"#44039B"}}>Telegram Group Link:</p>
                                    <a style={{textDecoration:"none"}}>t.me/UIUX</a>
                                </div>
                            </div>
                            <a href="/payment" className="btn mx-4 my-4" style={{ borderColor:"#9B0303", fontWeight:"bold", color:"#9B0303", width:"80%"}}>
                                Delete Course
                            </a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="advertise" style={{top:"14%", height: "60%", marginBottom: "15%"}}>
                            <div className="first" style={{margin:"8em 0 0 32em"}}>
                                <p>Course</p>
                                <h1 style={{fontWeight:"bold", fontSize:"39px"}}>UI/UX Design</h1>
                                <p>With <span style={{color:"#44039B"}}>Andrey Ferriyan</span></p>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-login" style={{marginTop:"15em"}}>
                <div className="copyright" ><Footer/></div>
            </div>
        </>
    )
}

export default MyCourse