import React, { useState } from "react";
import "./App.css";

export const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const displayAllInfo = () => {
    setReadMore(!readMore);
  };

  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button type="button" className="info-btn" onClick={displayAllInfo}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      </div>
      <button
        type="button"
        className="btn btn-block delete-btn"
        onClick={() => removeTour(id)}
      >
        not interested
      </button>
    </article>
  );
};
