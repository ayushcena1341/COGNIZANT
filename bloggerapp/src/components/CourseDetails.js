import React from 'react';

const CourseDetails = ({ show }) => {
  return show ? (
    <div>
      <h2>Course Details</h2>
      <p><b>Angular</b><br />4/5/2021</p>
      <p><b>React</b><br />6/3/2021</p>
    </div>
  ) : null;
};

export default CourseDetails;
