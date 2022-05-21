import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './data/FeedbackData';
import About from './pages/About';
import AboutPageLink from './components/AboutPageLink';
import Card from './components/shared/Card';
import Post from './components/Post';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm(`Are you sure you want to delete this feedback ?`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Router>
        <Header />
        <nav>
          <Card>
            <NavLink to='/' className='nav-link' activeclassname='active'>
              Home
            </NavLink>
            <NavLink to='/about' className='nav-link' activeclassname='active'>
              About
            </NavLink>
          </Card>
        </nav>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm addFeedback={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    deleteFeedback={deleteFeedback}
                  />
                </>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        {<AboutPageLink />}
      </Router>
    </>
  );
}

export default App;
