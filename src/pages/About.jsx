import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function About() {
  return (
    <Card>
      <h1>About this project</h1>
      <p>This is a simple react.js app to leave a feedback</p>
      <br />
      <Link to='/' className='about-link'>
        {<FaHome size={30} color='#fff' />}
      </Link>
    </Card>
  );
}

export default About;
