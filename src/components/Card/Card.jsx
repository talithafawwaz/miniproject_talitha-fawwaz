import React from "react"
import course from '../../assets/course.svg'

const Card = () => {

    return (
        <div className="card-deck mt-10 p-0">
            <div className="card" style={{ width: "13rem" }}>
                <img className="card-img-top" 
                    style={{ width: "13rem"}} 
                    src={course} alt="image" 
                />
                <div className="card-body">
                    <p className="card-title" style={{fontSize:"13px", fontWeight:"500"}}>UI/UX Design (Batch 12)</p>
                    <a href="#" className="btn" style={{ borderColor: "#44039B" ,fontSize:"10px", marginLeft:"50%"}}>
                        See detail
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card