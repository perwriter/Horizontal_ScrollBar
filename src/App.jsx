import React from "react";
import { data } from "./MockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./index.css";

function App() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <img
        className="cover-image"
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80"
        alt=""
      />
      <div className="slider-container">
        <MdChevronLeft className="chevron-icon" onClick={slideLeft} size={40} />
        <div id="slider" className="slider-container">
          {data.map((item, index) => (
            <img
              key={index}
              className="slider-image"
              src={item.img}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <MdChevronRight
          className="chevron-icon"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}

export default App;
