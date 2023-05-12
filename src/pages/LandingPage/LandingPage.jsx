import Navbar from "../../components/Navbar/Navbar"
import gambar from '../.././assets/gambar.svg'
import meta from '../.././assets/meta.svg'
import google from '../.././assets/google.svg'
import ibm from '../.././assets/ibm.svg'
import duke from '../.././assets/duke.svg'
import icl from '../.././assets/icl.svg'
import Card from "../../components/Card/Card"
import Review from "../../components/Review/Review"
import Footer from "../../components/Footer/Footer"
import "../LandingPage/LandingPage.css"
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom"

export const GetCourse = gql`
    query CourseList {
        Course(limit:4){
            id
            name
            mentor
            image
            price
            rating
            participant
            duration
            category
            level
        }
    }
`

const LandingPage = () => {
    const { data } = useQuery(GetCourse)

    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="banner">
                        <div className="row">
                            <div className="col-lg-6" style={{margin: "10% -7% 0% 7%"}}>
                                <h1 style={{fontWeight:"bold", color: "#44039B", fontSize:"39px"}}>Grow Your Skills online course with Us!</h1>
                                <p>We strive to educate and collaborate with like-minded businesses 
                                    to make a difference environmentally and socially. Together we can make an impact</p>
                                <Link to="/login" className="btn btn-warning" style={{fontWeight:"bold", color: "#64542A"}}>Join Now</Link>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    className="image"
                                    src={gambar}
                                    alt="gambar"
                                />
                            </div>
                        </div>  
                    </div>
                    <div className="collaborator">
                        <div className="row mt-3 mx-3">
                            <div className="col-lg-2 mt-3">
                                <img                                  
                                    src={meta}
                                    alt="gambar"
                                />
                            </div>
                            <div className="col-lg-2 mt-3">
                                <img                                   
                                    src={google}
                                    alt="gambar"
                                />
                            </div>
                            <div className="col-lg-2 mt-1">
                                <img                                        
                                    src={ibm}
                                    alt="gambar"
                                />
                            </div>
                            <div className="col-lg-3 mt-2">
                                <img                                    
                                    src={duke}
                                    alt="gambar"
                                />
                            </div>
                            <div className="col-lg-3 mt-2">
                                <img
                                    src={icl}
                                    alt="gambar"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="popular-course">
                        <div className="row">
                            <h2 style={{fontWeight:"bold", fontSize:"39px"}}>Popular Course</h2>
                            <div className='row row-cols-2 row-cols-lg-4 g-5 mx-auto'>
                                {
                                    data?.Course.map((card) => (
                                        <Card key={card.id} card={card} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="review">
                        <div className="row">
                            <div className="col-md-10">
                                <h2 style={{fontWeight:"bold", fontSize:"39px", marginTop:"2%" ,marginBottom:"5%"}}>What they say</h2>                          
                            </div>
                            <div className="col-md-1">
                                <ArrowLeft
                                    className="bi bi-arrow-left-icon"
                                    type="button"
                                    aria-hidden="true" 
                                    data-bs-target="#carouselExampleInterval"
                                    data-bs-slide="prev"
                                    style={{marginTop:"30%"}}
                                />
                            </div>
                            <div className="col-md-1">
                                <ArrowRight
                                    className="bi bi-arrow-right-icon"
                                    type="button"
                                    aria-hidden="true" 
                                    data-bs-target="#carouselExampleInterval"
                                    data-bs-slide="next"
                                    style={{marginTop:"30%"}}
                                />
                            </div>
                                <Review/>
                        </div>
                    </div>
                    <div className="advertise" style={{textAlign:"center"}}>
                        <h1 style={{fontWeight:"bold", color: "#44039B", fontSize:"39px", marginTop:"5%"}}>So, what are you waiting for?</h1>
                        <p style={{margin:"3% 0 3% 0"}}>Learn more focused with learning path and code review!</p>
                        <Link to="/register" className="btn btn-warning" style={{fontWeight:"bold", color: "#64542A"}}>Create account</Link>
                    </div>
                    <div className="footer" style={{marginTop:"20em"}}>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage