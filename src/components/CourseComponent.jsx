import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CourseList from './CourseList';

export default function CourseComponent() {
  return (
    <Tabs
        defaultActiveKey="all-courses"
        id="tab-course-component"
        className="mb-3"
        variant='underline'
        fill
        justify
      >
        <Tab eventKey="all-courses" title="All Courses">
          <CourseList />
        </Tab>
        <Tab eventKey="newest" title="The Newest">
          Tab content for Profile
        </Tab>
        <Tab eventKey="top-rated" title="Top Rated">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="most-popular" title="Most Popular">
          Tab content for Contact
        </Tab>
    </Tabs>
  );
}

