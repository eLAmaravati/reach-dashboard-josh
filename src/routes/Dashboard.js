import { useState } from 'react';
import ChartCircle from '../components/ChartCircle';
import illustrationjosh from '../icon/illustration-josh.svg';
import { ReactComponent as IllustrationBook} from '../icon/illustration-book.svg';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import CourseComponent from '../components/CourseComponent';
import ChartLine from '../components/ChartLine';
import CourseSlider from '../components/CourseSlider';
export default function Dashboard() {
  const [key, setKey] = useState('dashboard');

  return (
    <>
    <div id="dashboard" className="dashboard pt--40">
      <div className="">
                  <section className="section section__profile">
          <div className="">
            <Welcome name="Bagaspati" />
          <p>It's good to see you again.</p>
          </div>
          <img src={illustrationjosh} alt="Illustration Josh" />
        </section>

        <section className="section section__course mt--50">
            <h2 className="section__title">My Courses</h2>

          <div className="section__content">
            <CourseComponent />
           
          </div>
        </section>
      </div>


      <div className="">
        <section className="section section__stats">
          <h2 className="section__title">
            Your Learning Progress
          </h2>
          <ChartLine />
          <ChartCircle/>
        </section>

        <section className="section section__learn-more mt--50 card-custom">
          <div>
            <h2 className="section__title">Learn Even More!</h2>
            <p>Unlock premium features only for $9.99 per month.</p>
            <a href="#" className="btn btn-dark" role='button'>Go Premium</a>
          </div>
          <IllustrationBook />
        </section>


       

      </div>
    </div>

    </>
  );
}


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Example(props) {
  return <h2>Ini adalah {props.name}</h2>
}