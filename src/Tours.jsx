import React from "react";
import { Tour } from "./Tour";

export const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <section>
        <div className="title">
          <h2>Our tours</h2>
          <div className="title-underline"></div>
        </div>
        <div className="tours">
          {" "}
          {tours.map((tour) => {
            return <Tour {...tour} key={tour.id} removeTour={removeTour} />;
          })}
        </div>
      </section>
    </>
  );
};
