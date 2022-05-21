import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  const average =
    feedback.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / feedback.length;

  if (feedback.length !== 0) {
    return (
      <div className='feedback-stats'>
        <h4>
          {feedback.length} {`${feedback.length === 1 ? 'Review' : 'Reviews'}`}
        </h4>
        <h4>AVG Rating: {average}</h4>
      </div>
    );
  }
}

export default FeedbackStats;
