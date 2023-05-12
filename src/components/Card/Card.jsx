import React from "react"
import { Link } from "react-router-dom"

const Card = ({card}) => {

    return (
        <div className="card-deck mt-10 p-0">
            <div className="card" style={{ width: "13.1rem" }}>
                <img className="card-img-top" 
                    style={{ width: "13rem"}} 
                    src={card.image} alt="image" 
                />
                <div className="card-body">
                    <p className="card-title" style={{fontSize:"13px", fontWeight:"500"}}>{card.name}</p>
                    <Link 
                    to={"/detailcourse"}
                    state={{data: card}}
                    className="btn" 
                    style={{ borderColor: "#44039B" ,fontSize:"10px", marginLeft:"50%"}}>
                        See detail
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card