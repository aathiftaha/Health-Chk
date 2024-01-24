import React, { useState } from "react";
import { FaPhone, FaUser } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../Styles/Main.css";

const MainSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
  });

  const [phone, setPhone] = useState('');

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div class="hero-image">
      
      <form onSubmit={handleSubmit}>

      
      {/* <h2>Schedule an Appointment and enjoy a complimentary service worth &#8377;1000!</h2> */}
      <h2 className="form-heading">Book your Appointments for <span>&#8377; 1000</span> Completely FREE &#129395;</h2>
      <p style={{color:"grey"}}>Access a vast network of more than 90 skilled physiotherapists ready to address over 280 various conditions.</p> 

        {currentStep === 1 && (
          <>
            {/* <label>Name:</label> */}
            <FaUser style={{color: "green"}}></FaUser>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter Your Name"
            />

            <div>
            <FaPhone style={{color: "green"}}></FaPhone>
              <PhoneInput
                className="phone-inp"
                defaultCountry="ind"
                required
                value={phone}
                onChange={(phone) => setPhone(phone)}
                
              />
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />

          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            </div>

            <div>
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <label>Chief Complaints:</label>
            <textarea
              name="chiefComplaints"
              value={formData.chiefComplaints}
              onChange={handleInputChange}
              required
            />
          </>
        )}

        <div>
          {currentStep > 1 && (
            <button type="button" onClick={handlePreviousStep}>
              Previous
            </button>
          )}

          {currentStep < 3 ? (
            <button type="button" onClick={handleNextStep}>
              Start Your Recovery
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MainSection;
