import styles from "./ResetButton.module.css";

const ResetButton = (props) => {
  return (
    <button
      type={props.type}
      className={styles.buttonAlt}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ResetButton;
