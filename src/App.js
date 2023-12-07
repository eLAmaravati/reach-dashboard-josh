import logo from './logo.svg';
import './App.scss';
import { TogaIcon, PeopleOutline, LogoIcon } from "./components/Icon";
import illustrationjosh from './icon/illustration-josh.svg';
import LineChart from './components/ChartLine';
import Course from './components/CourseComponent';
import CircleChart from './components/ChartCircle';

function App() {
  return (
    <>
    <div className="dashboard">
      <div className="sidenav">
        <div className="sidenav__logo">
          <h1 className="site__logo"><a href="">F.</a></h1>
        </div>
        <nav className="sidenav__menu">
          <a href="" className='menu__link'><TogaIcon /></a>
          <a href="" className='menu__link'><PeopleOutline /></a>
          <a href="" className='menu__link'><TogaIcon /></a>
          <a href="" className='menu__link'><TogaIcon /></a>
        </nav>
        <div className="sidenav__drawer">
          <button type="button">button</button>
        </div>
      </div>

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

export default App;
