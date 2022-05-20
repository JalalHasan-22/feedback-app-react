import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ feedback, deleteFeedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedbacks have been added yet.</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => {
        return (
          <FeedbackItem
            key={item.id}
            item={item}
            deleteFeedback={deleteFeedback}
          />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
