import { useState } from 'react';
import Course from '../components/Course';
import CircleChart from '../components/CircleChart';
import LineChart from '../components/LineChart';
import illustrationjosh from '../icon/illustration-josh.svg';
export default function Dashboard() {
  const [key, setKey] = useState('dashboard');

  return (
    <>
    <div id="dashboard">
      <h1 className="section__title">My Dashboard</h1>

      <div className="dashboard__center">
        
        <section className="section section__profile">
          <div className="">
            <Welcome name="Josh" />
          <p>It's good to see you again.</p>
          </div>
          <img src={illustrationjosh} alt="Illustration Josh" />
        </section>

        <Course />
        <CircleChart />
        
      </div>

      <div className="dashboard__right">
        <section className="section section__stats">
          <h2 className="section__title">
            Your Statistics
          </h2>
          <LineChart />
        </section>

        <section className="section section__learn-more card mt--50">
          <h2 className="section__title">Learn even more!</h2>
          <p>Unlock premium features only for $9.99 per month.</p>
          <a href="#" className="button button-solid mt--20" role='button'>Go Premium</a>
        </section>
      </div>
    </div>
    </>
  );
}


function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}

function Example(props) {
  return <h2>Ini adalah {props.name}</h2>
}