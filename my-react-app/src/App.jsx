import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const HomeTest = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/subachievement">Add Sub Achievements</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/milestones">Add Milestones</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default HomeTest;