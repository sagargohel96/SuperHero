import React from 'react'

export default function practice() {
  const age = 20;
  const isGreen = true;
  const users = ["jatin", "jessica", "jaggi", "jassi", "jenti"];
  const planets = [
    { name: "mars", isGasPlanet: false },
    { name: "earth", isGasPlanet: false },
    { name: "jupiter", isGasPlanet: true },
    { name: "venus", isGasPlanet: false },
    { name: "neptune", isGasPlanet: true },
    { name: "uranus", isGasPlanet: true },
  ];

  return (
    <>
      <div>{age >= 18 ? <h1>over age</h1> : <h1>under age</h1>} </div>{" "}
      <div style={{ color: isGreen ? "green" : "red", fontSize: "30px" }}>
        this has red color
      </div>
      {users.map((name) => {
        return <h1>{name}</h1>;
      })}
      {planets.map((pname) => {
        if (pname.isGasPlanet) return <h1>{pname.name}</h1>;
      })}
    </>
}
