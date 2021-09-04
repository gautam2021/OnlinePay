 // eslint-disable-next-line
import React, { useState } from 'react'

const ContactUs = () => {
    const [userData, setuserData] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        emailID: "",
        address: "",
        message: ""
    })
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        // alert({value}+" "+{name})
        setuserData({
            ...userData, [name]: value
        })
    }
    const submitData = async (event) => {
        event.preventDefault();
        const {
            firstName,
            lastName,
            mobileNumber,
            emailID,
            address,
            message
        } = userData // destructring 
        if (firstName && lastName && mobileNumber && emailID && address && message){
            const res = fetch("https://reactmajorproject-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        mobileNumber,
                        emailID,
                        address,
                        message,
                    })
                }
            );
        if (res) {
            setuserData({
                firstName: "",
                lastName: "",
                mobileNumber: "",
                emailID: "",
                address: "",
                message: ""
            })
        } else {
            alert("please fill the data");
        }
    }else{
        alert("Please fill all the data");
    }

    }
    return (
        <>
            <section className="contact-us-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-12 col-lg-5 contact-us-leftside">
                                    <h1 className="main-heading fw-bold">
                                        Connect With our <br /> Sales Team
                                    </h1>
                                    <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, doloribus.</p>
                                    <figure>
                                        <img src="../images/bg-header1.jpg" alt="" className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="col-12 col-lg-7 contact-rightside">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" placeholder="First Name" className="form-control" name="firstName" value={userData.firstName} onChange={postUserData} />
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <input type="text" placeholder="Last Name" className="form-control" name="lastName" value={userData.lastName} onChange={postUserData} />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" placeholder="Mobile Number" className="form-control" name="mobileNumber" value={userData.mobileNumber} onChange={postUserData} />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" placeholder="Email ID" className="form-control" name="emailID" value={userData.emailID} onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input type="text" placeholder="Your Address" className="form-control" name="address" value={userData.address} onChange={postUserData} />
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-12 w-100 ">
                                                <input type="text" placeholder="Your Message" className="form-control" name="message" value={userData.message} onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" />
                                            <label class="form-check-label" for="flexCheckChecked" className="main-hero-para">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quod?
                                            </label>
                                        </div>
                                        <button type="submit" className="btn-style-border btn-style w-100" onClick={submitData}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
