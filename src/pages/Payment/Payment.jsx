import React, { useContext, useState } from "react"
import NavLogin from "../../components/Navbar/NavLogin"
import Poster from "../../components/Poster/Poster"
import Footer from "../../components/Footer/Footer"
import "../DetailCourse/DetailCourse.css"
import { Link, useLocation, useNavigate } from "react-router-dom"
import uuid from "react-uuid";
import CourseContext from "../../context/CourseContext"

const Payment = () => {
    const card = useLocation()
    const navigation = useNavigate()
    const {course, setCourse} = useContext(CourseContext)

    const [payment, setPayment] = useState({
        id: course.id,
        id_course: course.id_course,
        name: course.name,
        firstname: course.firstname,
        lastname: course.lastname,
        email: course.email,
        image: course.image,
        subtotal: course.subtotal,
        platformfee: course.platformfee,
        totalamount: course.totalamount,
        mentor: course.mentor,
        duration: course.duration,
        level: course.level,
        about: course.about
    })

    const total = card?.state?.data?.state?.data?.price ? card?.state?.data?.state?.data?.price + 10000 : 0;

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setPayment((prev) => ({
            ...prev,
            [name] : value
        }))   
    }

    const handleSubmit = e => {
        e.preventDefault();

        const id=uuid()
        console.log(id);
        
        setPayment((prev) => ({
            ...prev,
            id : id
        }))   

        console.log(payment);

        setCourse({
            id: id,
            id_course:card?.state?.data?.state?.data?.id,
            name: card?.state?.data?.state?.data?.name,
            firstname: payment.firstname,
            lastname: payment.lastname,
            email: payment.email,
            paymethod: payment.paymethod,
            subtotal: card?.state?.data?.state?.data?.price,
            image: card?.state?.data?.state?.data?.image,
            mentor: card?.state?.data?.state?.data?.mentor,
            duration: card?.state?.data?.state?.data?.duration,
            level: card?.state?.data?.state?.data?.level,
            about: card?.state?.data?.state?.data?.about,
            platformfee: 10000,
            totalamount: total
        })

        navigation ("/confirmation", {state:id})
    }


    return(
        <>
            <NavLogin/>
            <div className="advertise" style={{top:"14%", height: "100%", marginBottom: "15%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="formulir">
                                <form className="form-og my-4 mx-3" name="data" key={card?.state?.data?.state?.data?.id}>
                                    <label htmlFor="firstname">First Name</label>
                                    <input
                                        className="form-control mt-1 mb-3"
                                        placeholder="Enter Your First Name"
                                        type="text"
                                        id="firstname"
                                        value={payment.firstname}
                                        name="firstname"
                                        onChange= {handleInput}
                                    />
                                    <label htmlFor="lastname">Last Name</label>
                                    <input
                                        placeholder="Enter Your Last Name"
                                        className="form-control mt-1 mb-3"
                                        type="text"
                                        id="lastname"
                                        value={payment.lastname}
                                        name="lastname"
                                        onChange= {handleInput}
                                    />
                                    <label htmlFor="email">Email</label>
                                    <input
                                        placeholder="Enter Your Email"
                                        className="form-control mt-1 mb-3"
                                        type="email"
                                        id="email"
                                        value={payment.email}
                                        name="email"
                                        onChange= {handleInput}
                                    />
                                    <div className="row">
                                        <div className="col-md-10">
                                            <p>Subtotal</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p>Rp {card?.state?.data?.state?.data?.price}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <p>Platform Fee</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p>Rp 10000</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-10">
                                            <p>Total Amount</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p>Rp{total}</p>
                                        </div>
                                    </div>
                                </form>
                                <button onClick={handleSubmit} className="btn mx-4" style={{ backgroundColor:"#44039B", fontWeight:"bold", color:"white", width:"93%"}}>
                                    <Link to="/confirmation" state={payment} style={{ color: "white", textDecoration:"none" }}>Buy Now</Link>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-3" style={{marginTop:"-8%"}}>
                            <div className="poster" style={{height:"77%"}}>
                                <Poster card={card}/>
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