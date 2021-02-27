import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.buttonSection}>
      {options.map(option => (
        <button
          className={s.button}
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
