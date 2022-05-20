import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log(text);
  };

  return (
    <Card reverse={false}>
      <form>
        <h3>How would you rate our service ?</h3>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={true}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
