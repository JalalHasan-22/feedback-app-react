import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutPageLink from './components/AboutPageLink';
import Card from './components/shared/Card';
// import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        {<AboutPageLink />}
      </Router>
    </FeedbackProvider>
  );
}

export default App;
