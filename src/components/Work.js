import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Flexible Delivery Options",
      text: "Set up a delivery schedule that fits your lifestyle, whether it’s a one-time order or a regular subscription.",
    },
    {
      image: ChooseMeals,
      title: "Quick and Reliable Deliveries",
      text: "Get your meals delivered in record time with our reliable and efficient service, ensuring your food is always fresh ",
    },
    {
      image: DeliveryMeals,
      title: "Discover Our Story",
      text: "Learn more about our commitment to quality, our sourcing practices, and how we ensure each meal meets our high standards.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How it works</h1>
        <p className="primary-text">
        Browse our diverse menu and choose from a variety of delicious, 
        freshly-prepared meals tailored to your taste..
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;