import React, { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = (e) => {
    const currentBtnValue = e.currentTarget.value;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [currentBtnValue]: prevFeedback[currentBtnValue] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const valuesArr = Object.values(feedback);
    return valuesArr.reduce((acc, val) => acc + val);
  };

  const countZero = () => {
    return countTotalFeedback() === 0;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((feedback.good / countTotalFeedback()) * 100);
  };

  const btnNames = Object.keys(feedback);

  return (
    <div className="App">
      <section>
        <FeedbackOptions options={btnNames} onLeaveFeedback={onLeaveFeedback} />
        {countZero() ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            stat={feedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </section>
    </div>
  );
};

export default App;
