const Form = () => {
    return(
        <>
            <div className="form-og my-4 mx-3">
                <label htmlFor="firstname">First Name</label>
                <input
                    className="form-control mt-1 mb-3"
                    placeholder="Enter Your First Name"
                    type="text"
                />
                <label htmlFor="firstname">Last Name</label>
                <input
                    placeholder="Enter Your Last Name"
                    className="form-control mt-1 mb-3"
                    type="text"
                />
                <label htmlFor="firstname">Email</label>
                <input
                    placeholder="Enter Your Email"
                    className="form-control mt-1 mb-3"
                    type="email"
                />
                <div className="row">
                    <div className="col-md-10">
                        <p>Subtotal</p>
                    </div>
                    <div className="col-md-2">
                        <p>Rp 150.000</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <p>Platform Fee</p>
                    </div>
                    <div className="col-md-2">
                        <p>Rp 10.000</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-10">
                        <p>Total Amount</p>
                    </div>
                    <div className="col-md-2">
                        <p>Rp 160.000</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form