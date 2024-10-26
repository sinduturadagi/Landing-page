import React from "react";
import ProfilePic from "../Assets/group-image.webp";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        The customer is thrilled with the service, 
        appreciating how easy the process has been. 
        The meals are not only flavorful but also healthy, 
        making for a delightful experience!
        </p>
      </div>
      <div className="testimonial-section-bottom">
      <img src={ProfilePic} alt="John Doe" style={{ width: '150px', height: '150px' }} />

        <p>
        The customer feels very satisfied with the follow-up, 
        finding the process efficient and user-friendly. 
        Although there are a few minor hurdles, they are quite manageable.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;