import { useState } from 'react';
import Card from './shared/Card';

import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState('');
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    e.preventDefault();

    if (text === '') {
      setbtnDisabled(true);
      setMsg(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMsg('Review must be at least of 10 charachters long');
    } else {
      setbtnDisabled(false);
      setMsg(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };
      addFeedback(newFeedback);
    }
  };

  return (
    <Card reverse={false}>
      <form onSubmit={handleSubmit}>
        <h3>How would you rate our service ?</h3>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {msg && <div className='message'>{msg}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
