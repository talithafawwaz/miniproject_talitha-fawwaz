import NavLogin from "../../components/Navbar/NavLogin"
import Footer from "../../components/Footer/Footer"
import profile from '../../assets/profile.svg';

const Setting = () => {
    return(
        <>
            <NavLogin/>
            <div className="setting" style={{margin:"10% 0% 0% 15%"}}>
                <h4 style={{fontWeight:"bold"}}>Setting</h4>
                <hr style={{width:"85%"}}/>
                <h6 style={{fontWeight:"bold"}}>Edit Profile</h6>
                <div className="row mx-0">
                    <div className="col-md-3 mt-3"><img src={profile} alt="Profile" style={{width:"50%"}}/></div>
                    <div className="col-md-3">
                        <button className="btn" 
                            style={{borderColor:"#44039B", color:"#44039B", margin:"45% 0% 0% -55%", fontSize:"12px", fontWeight:"bold"}}>
                            Edit Profile Picture
                        </button>
                    </div>
                </div>
                <div className="row mt-5 mx-0">
                    <div className="col-md-5 ">
                        <label htmlFor="fullname">Full Name</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="text"
                        />
                        <label htmlFor="dateborn">Date of Borns</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="date"
                        />
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="number"
                        />
                        <label htmlFor="gender">Gender</label>
                        <select
                            className="form-select w-50"
                            id="gender"
                            name="gender"
                        >
                            <option hidden="" />
                            <option value="Women">Women</option>
                            <option value="Men">Men</option>
                        </select>
                    </div>
                    <div className="col-md-5 mx-3">
                        <label htmlFor="address">Address</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="text"
                        />
                        <label htmlFor="lasteducation">Last Education</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="text"
                        />
                        <label htmlFor="institutionname">Last Educational Institution Name</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="text"
                        />
                        <button className="btn btn-warning mt-4" style={{fontWeight:"bold", color: "#64542A", marginLeft:"85%"}}>Save</button>
                    </div>
                </div>
            </div>
            <div className="footer-login" style={{marginTop:"7em"}}>
                <div className="copyright" ><Footer/></div>
            </div>
        </>
    )
}

export default Setting