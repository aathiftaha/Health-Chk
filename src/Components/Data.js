// import photo from '../assets/Google-reviews.jpg';
import doctor from '../assets/doctor.jpg';
import doctor0 from '../assets/doctor0.jpg';
import doctor1 from '../assets/doctor1.jpg';
import doctor4 from '../assets/doctor4.jpg';
import doctor5 from '../assets/doctor5.jpg';
import doctor6 from '../assets/doctor6.jpg';
import doctor8 from '../assets/doctor8.jpg';
import doctor9 from '../assets/doctor9.jpg';

export const responsive = {
    // Responsiveness
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  // Data in JSON format
  export const doctorData = [
    {
      id: 1,
      imageurl: doctor0,
      name: "Dr Kaviya Agarwal (PT)",
      department: "MPTh (Neuro Sciences)",
      description: "11 years of experience",
    },
    {
      id: 2,
      imageurl: doctor6,
      name: "Dr Anitha Suresh (PT)",
      department: "MPTh (Neuro-physiotherapy & Psychosomatic disorders)",
      description: "14 years of experience",
    },
    {
      id: 3,
      imageurl: doctor8,
      name: "Dr Aaliya Zumain (PT)",
      department: "M.Sc (Advanced Sports Therapy & Rehabilitation Science)",
      description: "8 years of experience",
    },
    {
      id: 4,
      imageurl:
        doctor9,
      name: "Dr Priya Karthika(PT)",
      department: "M.Sc (Neuro Rehabitilation)",
      description: "16 years of experience",
    },
    {
      id: 5,
      imageurl:
        doctor,
      name: "Dr Shalini Bage (PT)",
      department: "MPTh (Musculoskeletal)",
      description: "12 years of experience",
    },
    {
      id: 6,
      imageurl:
        doctor1,
      name: "Dr Preethi Singh (PT)",
      department: "MPTh (Musculoskeletal Sciences)",
      description: "11 years of experience",
    },
    {
      id: 7,
      imageurl:
        doctor4,
      name: "Dr Ankita Ramesh (PT)",
      department: "M.Sc (Neuro Rehabitilation)",
      description: "10 years of experience",
    },
    {
      id: 8,
      imageurl:
        doctor5,
      name: "Dr Hania Aamir (PT)",
      department: "MPTh (Neuro-physiotherapy & Psychosomatic disorders)",
      description: "19 years of experience",
    },
  ];
