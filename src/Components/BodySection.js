import React from 'react';
// import '../Styles/Body.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import google_reviews from "../assets/Google-reviews.jpg";
import Doctors from './Doctors';
import { doctorData, responsive } from "./Data";

const BodySection = () => {
    const doctor = doctorData.map((item) => (
        <Doctors
          name={item.name}
          url={item.imageurl}
          department={item.department}
          description={item.description}
        />
      ));

  return (
    <div className='body-section'>
        <div>
            <img src={google_reviews} width={225} height={140}></img>
        </div>

        <div className='sub-intro'>
            <h1 >Meet our Experts</h1>
            <h2 style={{color: "white", maxWidth: "700px"}}>Explore the advantages of cutting-edge technology paired with expert care for an exceptional experience</h2>
        </div>

        <div className='testimonals'>
        <Carousel showDots={true} responsive={responsive}>
            {doctor}
        </Carousel>
        </div>
        
    </div>
  )
}

export default BodySection;
