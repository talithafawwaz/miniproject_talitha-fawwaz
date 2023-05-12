import NavLogin from "../../components/Navbar/NavLogin"
import Footer from "../../components/Footer/Footer"
import { useLocation } from "react-router-dom"
import { GetUser } from "../Login/Login"
import { gql, useMutation, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"

const EditUser = gql`
    mutation MyMutation($id: String!, $_set: User_set_input!) {
        update_User_by_pk(pk_columns: {id: $id}, _set: $_set) {
        id
        }
    }  
`

const Setting = () => {
    const dataUser = sessionStorage.getItem("user")
    const user = JSON.parse(dataUser)
    console.log(user);

    const {data, loading, error} = useQuery(GetUser, {email: dataUser.email, password: dataUser.password})

    const [editUser] = useMutation(EditUser, {
        refetchQueries: [GetUser]
    })
    
    const [tempData, setTempData] = useState({})

    const handleUpdate = (data) => {
        setTempData(data)
    }

    useEffect(() => {
        console.log(data);
        setTempData(user)
        // if(!loading && error !== undefined){
        //     setTempData(data?.User)
        // }

    }, [data])

    const handleChange = (id) => {
        const {fullname, email, password, birthdate, phone, gender, lastedu, lasteduname, address} = tempData;
        editUser({
          variables:{
              id: id, 
              _set: {
                 fullname: fullname, 
                 email: email, 
                 password: password, 
                 birthdate: birthdate,
                 phone: phone, 
                 gender: gender, 
                 lastedu: lastedu, 
                 lasteduname: lasteduname, 
                 address: address
              }
          }
        })
    }    

    return(
        <>
            <NavLogin/>
            <div className="setting" style={{margin:"10% 0% 0% 15%"}}>
                <h4 style={{fontWeight:"bold"}}>Setting</h4>
                <hr style={{width:"85%"}}/>
                {
                loading ? <p>Sabar y, loading</p> :
                <div className="row mt-5 mx-0">
                    <div className="col-md-5 ">
                        <label htmlFor="fullname">Full Name</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="text"
                            value={tempData?.fullname}
                        />
                        <label htmlFor="dateborn">Date of Borns</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="date"
                            value={tempData?.birthdate}
                        />
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="number"
                            value={tempData?.phone}
                        />
                        <label htmlFor="gender">Gender</label>
                        <select
                            className="form-select w-50"
                            id="gender"
                            name="gender"
                            value={tempData?.gender}
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
                            value={tempData?.address}
                        />
                        <label htmlFor="lasteducation">Last Education</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="text"
                            value={tempData?.lastedu}
                        />
                        <label htmlFor="institutionname">Last Educational Institution Name</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="text"
                            value={tempData?.lasteduname}
                        />
                        <button onClick={handleChange} className="btn btn-warning mt-4" style={{fontWeight:"bold", color: "#64542A", marginLeft:"85%"}}>Save</button>
                    </div>
                </div>
            }
            </div>
            <div className="footer-login" style={{marginTop:"7em"}}>
                <div className="copyright" ><Footer/></div>
            </div>
        </>
            
    )
}

export default Setting