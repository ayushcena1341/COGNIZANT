import React, { useState } from 'react';
import './App.css';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "40px" }}>
      <div style={{ borderRight: "3px solid green", paddingRight: "30px" }}>
        <CourseDetails show={showCourses} />
      </div>
      <div style={{ borderRight: "3px solid green", paddingRight: "30px" }}>
        <BookDetails show={showBooks} />
      </div>
      <div>
        <BlogDetails show={showBlogs} />
      </div>
    </div>
  );
}

export default App;
