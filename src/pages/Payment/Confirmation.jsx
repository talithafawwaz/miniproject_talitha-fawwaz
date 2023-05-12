import React, { useContext, useState } from "react";
import NavLogin from "../../components/Navbar/NavLogin";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import "../DetailCourse/DetailCourse.css";
import check from "../.././assets/check-circle-fill.svg";
import CourseContext from "../../context/CourseContext";
import { Link } from "react-router-dom";

const Confirmation = () => {
    const { course, setCourse } = useContext(CourseContext);

    return (
      <>
        <NavLogin />
        <div
          className="advertise"
          style={{ top: "14%", height: "135%", marginBottom: "15%" }}
        >
          <div
            className="formulir"
            style={{ width: "50%", height: "46em", margin: " 5% 0% 0% 25%" }}
          >

              <Form data={course} />
          </div>
        </div>
        <div className="footer-login" style={{ marginTop: "20em" }}>
          <div className="copyright">
            <Footer />
          </div>
        </div>

        <div
          className="modal fade"
          id="successpayment"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div
            style={{ width: "20%" }}
            className="modal-dialog modal-dialog-centered"
          >
            <div className="modal-content">
              <div className="modal-body">
                <p style={{ margin: "10% 0% 0% 35%", fontWeight: "bold" }}>
                  Payment <br /> Success!
                </p>
                <div style={{ margin: "35%" }}>
                  <img style={{ width: "5em" }} src={check} alt="gambar" />
                </div>
                <br />
                <Link
                  to="/dashboard"
                  className="btn btn-warning w-100"
                  style={{ fontWeight: "bold", color: "#64542A" }}
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Confirmation;
