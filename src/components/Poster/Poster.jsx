import {Clock, Flag, MenuApp, Person, Star, Wallet } from 'react-bootstrap-icons'
import '../../pages/DetailCourse/DetailCourse.css'
import course from '../../assets/course.svg'

const Poster = () => {
    return(
        <>
            <div className='poster'>
                <img className="card-img-top" 
                    style={{ width: "13rem", margin:"10%"}} 
                    src={course} alt="image" 
                />
                <div style={{marginLeft:"10%"}}>
                    <p style={{fontWeight:"bold", fontSize:"16px"}}>UI/UX Design (Batch 12)</p>
                    <p><Wallet/> Rp150.000</p>
                    <p><Star/> 4.5 / 5.0 Rating</p>
                    <p><Person/> 257 Users Participated</p>
                    <p><Clock/> 8 Weeks</p>
                    <p><MenuApp/> Design, Non-coding</p>
                    <p><Flag/> Beginner</p>
                    <a href="#" className="btn mx-2" style={{ borderColor:"#44039B", fontWeight:"bold", color:"#44039B", width:"80%"}}>
                        Buy Now
                    </a>
                </div>
            </div>
        </>
    )
}

export default Poster