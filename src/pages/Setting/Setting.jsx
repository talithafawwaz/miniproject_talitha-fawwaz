import NavLogin from "../../components/Navbar/NavLogin"
import Footer from "../../components/Footer/Footer"
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

    const {data, loading} = useQuery(GetUser, {email: dataUser.email, password: dataUser.password})

    const [editUser] = useMutation(EditUser, {
        refetchQueries: [GetUser]
    })
    
    const [tempData, setTempData] = useState({})

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setTempData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    

    useEffect(() => {
        console.log(data);
        setTempData(user)

    }, [data])

    const handleSave = () => {
        const {fullname, email, password, birthdate, phone, gender, lastedu, lasteduname, address} = tempData;
        console.log("tempData", tempData);
        editUser({
        variables:{
            id: user.id, 
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
        const parsing = JSON.parse(tempData);
        sessionStorage.setItem("user",JSON.stringify(parsing))   
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
                            name="fullname"
                            value={tempData?.fullname}
                            onChange={handleEdit}
                        />
                        <label htmlFor="dateborn">Date of Borns</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="date"
                            name="birthdate"
                            value={tempData?.birthdate}
                            onChange={handleEdit}
                        />
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="number"
                            name="phone"
                            value={tempData?.phone}
                            onChange={handleEdit}
                        />
                        <label htmlFor="gender">Gender</label>
                        <select
                            className="form-select w-50"
                            id="gender"
                            name="gender"
                            value={tempData?.gender}
                            onChange={handleEdit}
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
                            name="address"
                            value={tempData?.address}
                            onChange={handleEdit}
                        />
                        <label htmlFor="lasteducation">Last Education</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="text"
                            name="lastedu"
                            value={tempData?.lastedu}
                            onChange={handleEdit}
                        />
                        <label htmlFor="institutionname">Last Educational Institution Name</label>
                        <input
                            className="form-control mt-1 mb-3"
                            type="text"
                            name="lasteduname"
                            value={tempData?.lasteduname}
                            onChange={handleEdit}
                        />
                        <button onClick={handleSave} className="btn btn-warning mt-4" style={{fontWeight:"bold", color: "#64542A", marginLeft:"85%"}}>Save</button>
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