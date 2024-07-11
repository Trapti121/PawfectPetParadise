import React from 'react'
import {useProductContext } from "./context/productcontext";
const About = () => {
  const {myName} = useProductContext();
  return (
    <div>
     {myName}
    </div>
  );
};

export default About
