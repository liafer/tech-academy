import './App.css';
import techVideo from './assets/techvideo.mp4'
import metaverse from './assets/metaverse.mp4'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import { BsCheck2Square } from 'react-icons/bs';
import { AiFillDownCircle } from 'react-icons/ai'
import { Link } from 'react-scroll';

function App() {
  return (
    <div className='container_home'>
      <Navbar />
      <div className='hero'>
        <video src={techVideo} autoPlay loop muted />
        <h1>The Tech Academy</h1>
        <p>Start your journey today!</p>
        <div className='hero_btns'>
          <button className='start'>
            <Link
              to="cards"
              smooth={true}
              duration={500}>Start Course
            </Link></button>
          <button className='about'>
            <Link
              to="about_us"
              smooth={true}
              duration={500}>About Us
            </Link>
          </button>
        </div>
      </div>
      <div className='courses'>
        <Link
          to="about_us"
          smooth={true}
          duration={500}>
          <AiFillDownCircle size={30} />
        </Link>
      </div>
      <div className='about_us'>
        <div className='about_info'>
          <h1>About Us</h1>
          <h2>We are a Tech Academy!</h2>
          <p>We are a Tech Community. We offer free courses and events. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <span><strong>Wanna Join Us?</strong></span>
          <button className='subscribe_btn'>Subscribe Now</button>
        </div>
        <video src={techVideo} autoPlay loop muted width={500} height={500} />
      </div>
      <div className='home_squares'>
        <h1>Why choose us?</h1>
        <div className='squares'>
          <div className='square_block1'>
            <p><BsCheck2Square size={40} /> Professional Certificate</p>
            <p><BsCheck2Square size={40} /> Free Tech Events</p>
          </div>
          <div className='square_block2'>
            <p><BsCheck2Square size={40} /> High Quality Instructors</p>
            <p><BsCheck2Square size={40} /> Online Learning</p>
          </div>
        </div>
      </div>
      <div className='highlights'>
        <video src={metaverse} autoPlay loop muted width={450} height={500} />
        <div className='highlights_info'>
          <h1 className='event'>Event of the Week</h1>
          <h2>The World of Metaverse</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className='register_btn'>Register Now</button>
        </div>
      </div>
      <div className='cards'>
        <h1>Courses</h1>
        <div className='cards_style'>
          <Cards />
        </div>
      </div>
      <div className='join_us'>
        <p>Join Our Community!</p>
        <button className='subscribe_btn'>Subscribe Now</button>
      </div>
      <footer>
        <ul>
          <li>
            <button>
              <Link
                to="container_home"
                smooth={true}
                duration={500}>Home
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                to="cards"
                smooth={true}
                duration={500}>Courses
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                to="about_us"
                smooth={true}
                duration={500}>About
              </Link>
            </button>
          </li>
        </ul>
      </footer>
    </div>

  );
}

export default App;
