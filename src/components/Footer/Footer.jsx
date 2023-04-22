import logo from '../../../public/logo.svg';
import { Apple, GooglePlay, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    return(
        <>
            <footer className="text-center text-lg-start">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-5 mb-5">
                                <img
                                    className=" img img-fluid d-block"
                                    src={logo}
                                    alt="Logo"
                                />
                                <p style={{marginTop:"10%"}}>
                                    We strive to educate and collaborate with like-minded businesses 
                                    to make a difference environmentally and socially. 
                                    Together we can make an impact
                                </p>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <button className='btn btn-primary'>
                                            <Twitter/>
                                        </button>
                                    </div>
                                    <div className='col-md-2'>
                                        <button className='text-light' 
                                        style={{backgroundColor:"#2867B2", border:"none", borderRadius:"5px", width:"42px", height:"38px"}}>
                                            <Linkedin/>
                                        </button>
                                    </div>
                                    <div className='col-md-1'>
                                        <button className='text-light' style={{backgroundColor:"#F00073", border:"none", borderRadius:"5px", width:"42px", height:"38px"}}>
                                            <Instagram/>
                                        </button>       
                                    </div>
                                </div>
                               
                                                      
                            </div>
                            <div className="col-md-2 mb-4">
                                <h6 className="fw-bold mb-4">About</h6>
                                <p><a href="#!" className="text-secondary">About Us</a></p>
                                <p><a href="#!" className="text-secondary">Features</a></p>
                                <p><a href="#!" className="text-secondary">News</a></p>
                                <p><a href="#!" className="text-secondary">Careers</a></p>
                                <p><a href="#!" className="text-secondary">FAQ</a></p>
                            </div>
                            <div className="col-md-3 mb-4">
                                <h6 className="fw-bold mb-4">Support</h6>
                                <p><a href="#!" className="text-secondary">Account</a></p>
                                <p><a href="#!" className="text-secondary">Support Center</a></p>
                                <p><a href="#!" className="text-secondary">Feedback</a></p>
                                <p><a href="#!" className="text-secondary">Contact Us</a></p>
                                <p><a href="#!" className="text-secondary">Accesibility</a></p>
                            </div>
                            <div className="col-md-2">
                                <h6 className="fw-bold">Get our app</h6>
                                <button className='btn btn-outline-secondary my-3'>
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <GooglePlay/>
                                        </div>
                                        <div className='col-md-9' style={{textAlign:"left"}}>
                                            <p style={{fontSize:"8px", marginBottom:"-2px"}}>GET IT ON</p>
                                            <p style={{fontSize:"11px", marginBottom:"-2px", fontWeight:"500"}}>Google Play</p>
                                        </div>                                     
                                    </div>
                                </button>
                                <button className='btn btn-outline-secondary'>
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <Apple/>
                                        </div>
                                        <div className='col-md-9' style={{textAlign:"left"}}>
                                            <p style={{fontSize:"8px", marginBottom:"-2px"}}>Download on the</p>
                                            <p style={{fontSize:"12px", marginBottom:"-2px", fontWeight:"500"}}>App Store</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pb-5 pt-3" style={{borderTop:"1px solid #E6D4D4"}}>
                    © 2022 AhaiLearn. All rights reserved.
                </div>
            </footer>
        </>
    )
}
export default Footer