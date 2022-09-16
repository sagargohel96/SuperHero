import React from "react";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>you have entered this {name}</p>
    </>
  );
}
