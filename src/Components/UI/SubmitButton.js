import styles from "./SubmitButton.module.css";

const SubmitButton = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default SubmitButton;
