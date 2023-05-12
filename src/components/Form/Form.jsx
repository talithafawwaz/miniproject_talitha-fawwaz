import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import uuid from "react-uuid";
import { Link, useNavigate } from "react-router-dom";

export const GetPayment = gql`
        query PaymentList {
            Payment {
                email
                id_course
                firstname
                id
                lastname
                name
                platformfee
                subtotal
                totalamount
                mentor
                duration
                level
                image
                about
                paymethod
            }
        }
    `

const Form = (data) => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    };

    const [payment, setPayment] = useState({
        id: "",
        id_course: data.data.id_course,
        name: data.data.name,
        firstname: data.data.firstname,
        lastname: data.data.lastname,
        email: data.data.email,
        subtotal: data.data.subtotal,
        platformfee: data.data.platformfee,
        totalamount: data.data.totalamount,
        mentor: data.data.mentor,
        duration: data.data.duration,
        level: data.data.level,
        image: data.data.image,
        about: data.data.about,
        paymethod: ""
    });

    console.log(payment)

    console.log(data);
    const total = data.data.totalamount + 10000;

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setPayment(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const InsertPayment = gql`
    mutation MyQuery ($object: Payment_insert_input!) {
        insert_Payment_one(object: $object){
            id
            id_course
            name
            firstname
            lastname
            email
            subtotal
            image
            mentor
            duration
            level
            about
            platformfee
            totalamount
            paymethod
        }
    }
    `

    const [insertPayment] = useMutation(InsertPayment, {
      refetchQueries: [GetPayment]
    });
      

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        console.log(payment);
        const paymentData = {
            id: id,
            id_course: payment.id_course,
            name: payment.name,
            firstname: payment.firstname,
            lastname: payment.lastname,
            email: payment.email,
            subtotal: payment.subtotal,
            platformfee: payment.platformfee,
            totalamount: payment.totalamount,
            mentor: payment.mentor,
            duration: payment.duration,
            level: payment.level,
            image: payment.image,
            about: payment.about,
            paymethod: payment.paymethod
        };
        insertPayment({ variables: { object: paymentData } })
    };

    return (
        <form className="form-og my-4 mx-3" >
            <label htmlFor="firstname">First Name</label>
            <input
                className="form-control mt-1 mb-3"
                placeholder="Enter Your First Name"
                type="text"
                id="firstname"
                value={payment.firstname}
                name="firstname"
                onChange={handleInput}
            />
            <label htmlFor="lastname">Last Name</label>
            <input
                placeholder="Enter Your Last Name"
                className="form-control mt-1 mb-3"
                type="text"
                id="lastname"
                value={payment.lastname}
                name="lastname"
                onChange={handleInput}
            />
            <label htmlFor="email">Email</label>
            <input
                placeholder="Enter Your Email"
                className="form-control mt-1 mb-3"
                type="email"
                id="email"
                value={payment.email}
                name="email"
                onChange={handleInput}
            />
            <div className="row">
                <div className="col-md-10">
                    <p>Subtotal</p>
                </div>
                <div className="col-md-2">
                    <p>Rp {payment.subtotal}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <p>Platform Fee</p>
                </div>
                <div className="col-md-2">
                    <p>Rp 10000</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <p>Total Amount</p>
                </div>
                <div className="col-md-2">
                    <p>Rp{total}</p>
                </div>
            </div>
            <div className="payment-method" style={{ margin: " -2% 0% 1% 3%" }}>
            <label htmlFor="payment-method">Payment Method</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymethod"
                id="paymethod1"
                defaultValue="spay"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="paymethod1">
                SHOPEE PAY
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymethod"
                id="paymethod2"
                defaultValue="dana"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="paymethod2">
                DANA
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymethod"
                id="paymethod3"
                defaultValue="ovo"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="paymethod3">
                OVO
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymethod"
                id="paymethod4"
                defaultValue="bni"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="paymethod4">
                BNI
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymethod"
                id="paymethod5"
                defaultValue="bca"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="paymethod5">
                BCA
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymethod"
                id="paymethod2"
                defaultValue="bri"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="paymethod6">
                BRI
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymethod"
                id="paymethod7"
                defaultValue="mandiri"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="paymethod7">
                MANDIRI
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Link
                onClick={handleGoBack}
                className="btn mx-4 my-3"
                style={{
                  borderColor: "#44039B",
                  fontWeight: "bold",
                  color: "#44039B",
                  width: "93%",
                }}
              >
                Cancel
              </Link>
            </div>
            <div className="col-md-8">
              <Link
                className="btn mx-4 my-3"
                data-bs-toggle="modal"
                data-bs-target="#successpayment"
                style={{
                  backgroundColor: "#44039B",
                  fontWeight: "bold",
                  color: "white",
                  width: "89%",
                }}
                onClick={handleSubmit}
              >
                Confirm
              </Link>
            </div>
          </div>
        </form>
    )
}

export default Form