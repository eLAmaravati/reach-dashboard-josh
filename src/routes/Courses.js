import { useState } from 'react';
import CourseComponent from '../components/CourseComponent';
export default function Courses() {
  const [key, setKey] = useState('course');

  return (
    <>
    <div id="courses">
      <h1 className="section__title">My Courses</h1>

      <CourseComponent />
    </div>
    </>
  );
}