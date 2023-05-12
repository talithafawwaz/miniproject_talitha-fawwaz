import NavLogin from "../../components/Navbar/NavLogin"
import Footer from "../../components/Footer/Footer"
import "../DetailCourse/DetailCourse.css"
import { useLocation, useNavigate } from "react-router-dom"
import { GetPayment } from "../../components/Form/Form"
import { gql, useMutation } from "@apollo/client"

const MyCourse = () => {
    const navigate = useNavigate()
    const course = useLocation()
    console.log(course);

    const DeletePaymentList = gql`
        mutation MyMutation ($id:String!) {
            delete_Payment_by_pk(id:$id) {
            id
            }
        }
    `

    const [DeletePayment] = useMutation(DeletePaymentList, {
        refetchQueries: [GetPayment]
    })

    const handleDelete = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            DeletePayment({variables: {id: id}})
            navigate("/dashboard");
        }
    }

    return(
        <>
            <NavLogin/>
            <div className="container" key={course.state.data.id}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="poster" style={{zIndex:"2", height:"70%"}}>
                            <div className='poster-og'>
                                <img className="card-img-top" 
                                    style={{ width: "13rem", margin:"10%"}} 
                                    src={course.state.data.image} alt="image" 
                                />
                                <div style={{marginLeft:"10%", fontSize:"10px"}}>
                                    <p style={{marginBottom:"-1%", fontWeight:"bold", color:"#44039B"}}>Mentor:</p>
                                    <p>{course.state.data.mentor}</p>
                                    <p style={{marginBottom:"-1%", fontWeight:"bold", color:"#44039B"}}>Duration Course:</p>
                                    <p >{course.state.data.duration}</p>
                                    <p style={{marginBottom:"-1%", fontWeight:"bold", color:"#44039B"}}>Level:</p>
                                    <p>{course.state.data.level}</p>
                                </div>
                            </div>
                            <button onClick={() => handleDelete(course.state.data.id)} className="btn mx-4 my-2" style={{ borderColor:"#9B0303", fontWeight:"bold", color:"#9B0303", width:"80%"}}>
                                Delete Course
                            </button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="advertise" style={{top:"14%", height: "60%", marginBottom: "15%"}}>
                            <div className="first" style={{margin:"8em 0 0 32em"}}>
                                <p>Course</p>
                                <h1 style={{fontWeight:"bold", fontSize:"39px"}}>{course.state.data.name}</h1>
                                <p>With <span style={{color:"#44039B"}}>{course.state.data.mentor}</span></p>
                                </div>
                        </div>
                        <div className="information" style={{marginTop:"65%"}}>
                            <h6>Information</h6>
                            <hr style={{width:"17%", fontWeight:"bold"}}/>
                            <h4 style={{fontWeight:"bold"}}>About this course</h4>
                            <p style={{width:"95%"}}>{course.state.data.about}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-login" style={{marginTop:"15em"}}>
                <div className="copyright" ><Footer/></div>
            </div>
        </>
    )
}

export default MyCourse