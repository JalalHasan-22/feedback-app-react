import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Card>
      <h1>About this project</h1>
      <p>This is a simple react.js app to leave a feedback</p>
      <Link to='/'>Back to home page</Link>
    </Card>
  );
}

export default About;
