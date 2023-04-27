import React from 'react'
import NavLogin from "../../components/Navbar/NavLogin"
import Form from "../../components/Form/Form"
import Footer from "../../components/Footer/Footer"
import "../DetailCourse/DetailCourse.css"

const Confirmation = () => {
    
    return(
        <>
            <NavLogin/>
            <div className="advertise" style={{top:"14%", height: "135%", marginBottom: "15%"}}>
            <div className="formulir" style={{width:"50%", height: "46em", margin:" 5% 0% 0% 25%",}}>
                <Form/>
                <div className="payment-method" style={{margin:" -2% 0% 1% 3%"}}>
                    <label htmlFor="payment-method">Payment Method</label>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="pm"
                        id="pm1"
                        defaultValue="spay"
                        />
                        <label className="form-check-label" htmlFor="pm1">SHOPEE PAY</label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="pm"
                        id="pm2"
                        defaultValue="dana"
                        />
                        <label className="form-check-label" htmlFor="pm2">DANA</label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="pm"
                        id="pm3"
                        defaultValue="ovo"
                        />
                        <label className="form-check-label" htmlFor="pm3">OVO</label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="pm"
                        id="pm4"
                        defaultValue="bni"
                        />
                        <label className="form-check-label" htmlFor="pm4">BNI</label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="pm"
                        id="pm5"
                        defaultValue="bca"
                        />
                        <label className="form-check-label" htmlFor="pm5">BCA</label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="pm"
                        id="pm2"
                        defaultValue="bri"
                        />
                        <label className="form-check-label" htmlFor="pm6">BRI</label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="pm"
                        id="pm7"
                        defaultValue="mandiri"
                        />
                        <label className="form-check-label" htmlFor="pm7">MANDIRI</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <a href="/payment" className="btn mx-4 my-3" style={{ borderColor:"#44039B", fontWeight:"bold", color:"#44039B", width:"93%"}}>
                            Cancel
                        </a>
                    </div>
                    <div className="col-md-8">
                        <button className="btn mx-4 my-3" style={{ backgroundColor:"#44039B", fontWeight:"bold", color:"white", width:"89%"}}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div className="footer-login" style={{marginTop:"20em"}}>
                <div className="copyright" ><Footer/></div>
            </div>
        </>
    )
}

export default Confirmation