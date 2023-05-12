import React, { useState } from "react"
import { gql, useQuery } from "@apollo/client";
import NavLogin from "../../components/Navbar/NavLogin"
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"
import "../LandingPage/LandingPage.css"
import "../Login/Login.css"


const SearchCourseList = gql `
    query CourseList ($name: String) {
        Course (where: {name: { _ilike: $name } }) {
            id
            name
            mentor
            image
            price
            rating
            participant
            duration
            category
            level
            about
            requirement
        }
    }
`

const Catalog = () => {

    const [search, setSearch] = useState("");
    const { data } = useQuery(SearchCourseList, {
		variables: {
			name: `%${search}%`,
		},
	});

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

    return(
        <>
            <NavLogin/>
            <div className="advertise" style={{top:"14%", height: "40%", marginBottom: "15%"}}>
                <h1 style={{textAlign:"center", marginTop:"5%"}}><span style={{fontWeight:"bold", fontSize:"39px", color:"#44039B"}}>AhaiLearn </span>Courses Catalog</h1>
                <div class="btn-group w-50 my-4" role="group" aria-label="Basic example" style={{marginLeft:"25%"}}>
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search courses with keyboard"
                    aria-label="Search"
                    onChange={handleSearch}
                />
                </div>
            </div>
            <div className="my-course mt-5 mx-3">                
                    <div className='row row-cols-2 row-cols-lg-4 g-5 mx-auto'>
                        {
                            data?.Course.map((card) => (
                                <Card key={card.id} card={card} />
                            ))
                        }
                    </div>
            </div>
            <div className="footer-login" style={{marginTop:"60em"}}>
                <div className="copyright" ><Footer/></div>
            </div>
        </>
    )
}

export default Catalog