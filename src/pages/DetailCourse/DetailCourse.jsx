import NavLogin from "../../components/Navbar/NavLogin"
import Footer from "../../components/Footer/Footer"
import {Clock, Flag, MenuApp, Person, Star, Wallet } from 'react-bootstrap-icons'
import "./DetailCourse.css"
import { Link, useLocation } from "react-router-dom"

const DetailCourse = () => {
    const card = useLocation()
    console.log(card);
    
    return(
        <>
            <NavLogin/>
            <div className="container" key={card.state.data.id}>
                <div className="row">
                    <div className="col-md-9">
                        <div className="advertise" style={{top:"14%", height: "60%", marginBottom: "15%"}}>
                        <p style={{margin:"8% 0% 0% 13%"}}>Course</p>
                        <div className="container" style={{marginLeft:"14%"}}>
                            <h1 style={{fontWeight:"bold", fontSize:"39px"}}>{card.state.data.name}</h1>
                            <p >With <span style={{color:"#44039B"}}>{card.state.data.mentor}</span></p>
                            <Link to="/payment" state={{data: card}} className="btn" style={{ borderColor:"#44039B", fontWeight:"bold", color:"#44039B", }}>
                                Buy Now
                            </Link>
                        </div>
                        </div>
                        <div className="information" style={{marginTop:"65%"}}>
                            <h6>Information</h6>
                            <hr style={{width:"17%", fontWeight:"bold"}}/>
                            <h4 style={{fontWeight:"bold"}}>About this course</h4>
                            <p style={{width:"95%"}}>{card.state.data.about}</p>
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
                            <p>{card.state.data.requirement}</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="poster">
                            <div className='poster-og' key={card.state.data.id}>
                                <img className="card-img-top" 
                                    style={{ width: "13rem", margin:"10%"}} 
                                    src={card.state.data.image} alt="image" 
                                />
                                <div style={{marginLeft:"10%"}}>
                                    <p style={{fontWeight:"bold", fontSize:"16px"}}>{card.state.data.name}</p>
                                    <p><Wallet/> Rp{card.state.data.price}</p>
                                    <p><Star/> {card.state.data.rating} / 5.0 Rating</p>
                                    <p><Person/> {card.state.data.participant} Users Participated</p>
                                    <p><Clock/> {card.state.data.duration}</p>
                                    <p><MenuApp/> {card.state.data.category}</p>
                                    <p><Flag/> {card.state.data.level}</p>
                                </div>
                            </div>
                            <Link to="/payment" state={{data: card}} className="btn mx-4" style={{ borderColor:"#44039B", fontWeight:"bold", color:"#44039B", width:"80%"}}>
                                Buy Now
                            </Link>
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