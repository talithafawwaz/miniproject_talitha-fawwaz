import NavLogin from "../../components/Navbar/NavLogin"
import Footer from "../../components/Footer/Footer"
import "../LandingPage/LandingPage.css"
import "../Login/Login.css"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GetPayment } from "../../components/Form/Form"

const Dashboard = () => {
    const { data } = useQuery(GetPayment)
    console.log(data);

    return(
        <>
            <NavLogin/>
            <div className="advertise" style={{top:"14%", height: "30%", marginBottom: "15%"}}>
                <h1 style={{fontWeight:"bold", fontSize:"39px", margin:"4% 0% 0% 15%"}}>Welcome To AhaiLearn!</h1>
                <p style={{margin:"auto 15%"}}>Never stop learning, because life never stops teaching</p>
            </div>
            
            <div className="my-course" >
                    <h2 style={{fontWeight:"bold", fontSize:"16px", marginBottom:"3%"}}>My Course</h2>
                    <div className='row row-cols-2 row-cols-lg-4 g-5 mx-auto'>
                        {
                            data?.Payment.map((card) => (
                                <div className="card-deck mt-10 p-0">
                                    <div className="card" style={{ width: "13.2rem" }}>
                                        <img className="card-img-top" 
                                            style={{ width: "13rem"}} 
                                            src={card.image} alt="image" 
                                        />
                                        <div className="card-body">
                                            <p className="card-title" style={{fontSize:"13px", fontWeight:"500"}}>{card.name}</p>
                                            <Link 
                                            to={"/mycourse"}
                                            state={{data: card}}
                                            className="btn" 
                                            style={{ borderColor: "#44039B" ,fontSize:"10px", marginLeft:"50%"}}>
                                                See detail
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </div>
            <div className="footer-login" style={{marginTop:"30%"}}>
                <div className="copyright" ><Footer/></div>
            </div>
        </>
    )
}

export default Dashboard