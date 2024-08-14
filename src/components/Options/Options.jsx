import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, onResetFeedback, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button className={styles.button} onClick={() => onLeaveFeedback('good')}>Good</button>
      <button className={styles.button} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button className={styles.button} onClick={() => onLeaveFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button className={styles.resetButton} onClick={onResetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
