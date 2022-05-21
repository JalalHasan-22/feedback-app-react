import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

function FeedbackList({ feedback, deleteFeedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedbacks have been added yet.</p>;
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                deleteFeedback={deleteFeedback}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
