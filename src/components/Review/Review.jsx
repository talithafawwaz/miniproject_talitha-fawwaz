import React from "react"
import juan from '../../assets/juan.svg'
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
                            <h5 style={{fontSize:"24px"}}>“Love ReactJs because of AhaiLearn, thank you AhaiLearn!”</h5>
                            <p style={{fontSize:"16px", margin:"2em 0 3em 0"}}>"The curriculum was directly targeted toward applied techniques with high profile projects 
                                – real datasets with industry partners. 
                                It helped me achieve my career transition goal."
                            </p>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={juan} className="w-100 rounded-circle" alt="image" />
                                </div>
                                <div className="col-md-6">
                                    <h5>Juan</h5>
                                    <p>Sleman, Yogyakarta</p>
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
                            <h5 style={{fontSize:"24px"}}>“Love ReactJs because of AhaiLearn, thank you AhaiLearn!”</h5>
                            <p style={{fontSize:"16px", margin:"2em 0 3em 0"}}>"The curriculum was directly targeted toward applied techniques with high profile projects 
                                – real datasets with industry partners. 
                                It helped me achieve my career transition goal."
                            </p>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={juan} className="w-100 rounded-circle" alt="image" />
                                </div>
                                <div className="col-md-6">
                                    <h5>Juan</h5>
                                    <p>Sleman, Yogyakarta</p>
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
                            <h4>“Love ReactJs because of AhaiLearn, thank you AhaiLearn!”</h4>
                            <p style={{fontSize:"16px", margin:"2em 0 3em 0"}}>"The curriculum was directly targeted toward applied techniques with high profile projects 
                                – real datasets with industry partners. 
                                It helped me achieve my career transition goal."
                            </p>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={juan} className="w-100 rounded-circle" alt="image" />
                                </div>
                                <div className="col-md-6">
                                    <h5>Juan</h5>
                                    <p>Sleman, Yogyakarta</p>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <StarFill/>
                                        </div>                                       
                                        <div className="col-md-1">
                                            <StarFill/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4>“Love ReactJs because of AhaiLearn, thank you AhaiLearn!”</h4>
                            <p style={{fontSize:"16px", margin:"2em 0 3em 0"}}>"The curriculum was directly targeted toward applied techniques with high profile projects 
                                – real datasets with industry partners. 
                                It helped me achieve my career transition goal."
                            </p>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={juan} className="w-100 rounded-circle" alt="image" />
                                </div>
                                <div className="col-md-6">
                                    <h5>Juan</h5>
                                    <p>Sleman, Yogyakarta</p>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <StarFill/>
                                        </div>                                       
                                        <div className="col-md-1">
                                            <StarFill/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill/>
                                        </div>
                                        <div className="col-md-1">
                                            <StarFill/>
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