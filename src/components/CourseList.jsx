import React, { useState } from 'react';
import logoReact from '../icon/logo-react.svg';
import logoWordpress from '../icon/logo-wordpress.svg';
import logoDocker from '../icon/logo-docker.svg';
import logoPython from '../icon/logo-python.svg';
import logoNextJs from '../icon/logo-next-js.svg'
import { Button } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';

const CourseList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const courses = [
    {
      id: 1,
      logo: logoReact,
      title: 'Tutorial React untuk Pemula',
      author: 'Web Programming UNPAS',
      date: '2023-12-06',
      duration: '6h 30m',
      rating: 9.7,
      popularity: 100
    },
	{
		  id: 2,
      logo: logoDocker,
      title: 'Tutorial Docker Dockerfile',
      author: 'Programmer Zaman Now',
      date: '2023-10-28',
      duration: '4h 30m',
      rating: 8.2,
      popularity: 80
	},
	{
		  id: 3,
      logo: logoWordpress,
      title: 'Membuat Theme WordPress',
      author: 'Langit Amaravati',
      date: '2023-11-02',
      duration: '4h 30m',
      rating: 8.9,
      popularity: 90
	},
	{
		  id: 4,
      logo: logoPython,
      title: 'Belajar Python OOP',
      author: 'Kelas Terbuka',
      date: '2023-08-11',
      duration: '5h 00m',
      rating: 9.3,
      popularity: 92
	},
	{
		  id: 5,
      logo: logoNextJs,
      title: 'Tutorial Next.js',
      author: 'Prawito Hudoro',
      date: '2023-06-10',
      duration: '4h 00m',
      rating: 9.0,
      popularity: 87
	},
  ];

  const sortedCourses = courses.sort((a, b) => {
    switch (activeTab) {
      case 'newest':
        return new Date(b.date) - new Date(a.date);
      case 'topRated':
        return b.rating - a.rating;
      case 'mostPopular':
        return b.popularity - a.popularity;
      default:
        return courses;
    }
  });

  return (
    <div>
      {/* <div className="tabs">
        <button onClick={() => setActiveTab('all')}>All Courses</button>
        <button onClick={() => setActiveTab('newest')}>The Newest</button>
        <button onClick={() => setActiveTab('topRated')}>Top Rated</button>
        <button onClick={() => setActiveTab('mostPopular')}>Most Popular</button>
      </div> */}

      <div className="tab-content">
        {sortedCourses.map((course) => (
          
             <Stack direction="horizontal" gap={3} className='course-item'>
            <div className="course-item__logo col-1">
              <img src={course.logo} alt={course.title} height={50} width={50} />
            </div>

            <div className="course-item__title col-4">
              <p className='fw-bold'>{course.title}</p>
              <p className='fs--12'>by {course.author}</p>
            </div>

            <div className="course-item__duration col-2">
              <i className="fi fi-sr-clock pe-2"></i>
              <span className="fs--12">{course.duration}</span>
            </div>

            <div className="course-item__rating col">
              <i className="fi fi-sr-circle-star pe-2"></i>
              <span className="fs--12">{course.rating}</span>
            </div>

            <div className="course-item__button">
              <a href="/course-react/" className="btn btn-dark fs--12">View Course</a>
            </div>
            </Stack>

        ))}
      </div>
    </div>
  );
};

export default CourseList;
