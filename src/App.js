import React from "react";
import Garage from "./Garage";
import Form from "./form";
import Prevent from "./prevent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/Garage" element={<Garage />}>
            <Route path="/Prevent" element={<Prevent />} />
            <Route path="/Form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
ok am is not working on this projeft