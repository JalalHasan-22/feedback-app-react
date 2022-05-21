import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { FaTimes, FaEdit } from 'react-icons/fa';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='#E12901' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='Green' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
