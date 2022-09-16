import React from "react";

export default function Garage(props) {
  const cars = ["swift", "verna", "thar"];
  return (
    <>
      {cars.length > 2 &&
        cars.map((car) => (
          <div>
            <h2>
              You have {cars.length} cars in your garage and my name is {car}
            </h2>
          </div>
        ))}
    </>
  );
}
