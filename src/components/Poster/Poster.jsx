import {Clock, Flag, MenuApp, Person, Star, Wallet } from 'react-bootstrap-icons'
import '../../pages/DetailCourse/DetailCourse.css'

const Poster = ({card}) => {
    console.log(card);

    return(
        <>
            <div className='poster-og' key={card.state.data.state.data.id}>
                <img className="card-img-top" 
                    style={{ width: "13rem", margin:"10%"}} 
                    src={card.state.data.state.data.image} alt="image" 
                />
                <div style={{marginLeft:"10%"}}>
                    <p style={{fontWeight:"bold", fontSize:"16px"}}>{card.state.data.state.data.name}</p>
                    <p><Wallet/> Rp{card.state.data.state.data.price}</p>
                    <p><Star/> {card.state.data.state.data.rating} / 5.0 Rating</p>
                    <p><Person/> {card.state.data.state.data.participant} Users Participated</p>
                    <p><Clock/> {card.state.data.state.data.duration}</p>
                    <p><MenuApp/> {card.state.data.state.data.category}</p>
                    <p><Flag/> {card.state.data.state.data.level}</p>
                </div>
            </div>
        </>
    )
}

export default Poster