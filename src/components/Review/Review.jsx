import React from "react"
import jesse from '../../assets/jesse.jpg'
import jessica from '../../assets/jessica.jpeg'
import kai from '../../assets/kai.jpg'
import kei from '../../assets/kei.jpg'
import { StarFill } from 'react-bootstrap-icons';

const Review = () => {

    return (
        <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
        >
           
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 style={{fontSize:"24px"}}>“Great curriculum course”</h5>
                            <p style={{fontSize:"16px", margin:"2em 0 3em 0"}}>"The curriculum was directly targeted toward applied techniques with high profile projects 
                                – real datasets with industry partners. 
                                It helped me achieve my career transition goal."
                            </p>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={jessica} className="w-100 rounded-circle" alt="image" />
                                </div>
                                <div className="col-md-6">
                                    <h5>Jessica</h5>
                                    <p>Surabaya</p>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>                                       
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h5 style={{fontSize:"24px"}}>“Excellent teaching”</h5>
                            <p style={{fontSize:"16px", margin:"2em 0 3em 0"}}>"Quick, fun and well explained. If you are interested in an introduction to HTML and CSS or just want to face the challenge of putting a personal portfolio online, 
                            dont miss it!"
                            </p>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={kei} className="w-100 rounded-circle" alt="image" />
                                </div>
                                <div className="col-md-6">
                                    <h5>Kei</h5>
                                    <p>Yogyakarta</p>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>                                       
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                <div className="row">
                        <div className="col-md-6">
                            <h4>“Great experience and very rewarding”</h4>
                            <p style={{fontSize:"16px", margin:"2em 0 3em 0"}}>""It was really helpfull for me to know to how to design a web page. Thank u Ahailearn""
                            </p>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={jesse} className="w-100 rounded-circle" alt="image" />
                                </div>
                                <div className="col-md-6">
                                    <h5>Jesse</h5>
                                    <p>Jakarta</p>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>                                       
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4>“There is so much to see and do all over world”</h4>
                            <p style={{fontSize:"16px", margin:"2em 0 3em 0"}}>"Thank you Ahailearn for helping me to open my mind that There is so much to see and do around the world"
                            </p>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={kai} className="w-100 rounded-circle" alt="image" />
                                </div>
                                <div className="col-md-6">
                                    <h5>Kai</h5>
                                    <p>Bandung</p>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>                                       
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill fill="#FFB800"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review