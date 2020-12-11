import React from "react";
import Navbar from '../components/Navbar';

const Basic = props => {

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        {props.children}
      </div>
    </>
  );

};

export default Basic;
