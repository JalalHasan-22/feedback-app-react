import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './data/FeedbackData';
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
      <Header />
      <div className='container'>
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
