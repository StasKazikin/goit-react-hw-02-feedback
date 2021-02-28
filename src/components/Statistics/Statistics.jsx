import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2 className={s.statistics}>Statistics</h2>
    {total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback: {positivePercentage ? positivePercentage : 0}%
        </li>
      </ul>
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
