import styles from "./styles.module.css";
const { buttonStyle } = styles;
function Button({ buttonText }) {
  return <button className={buttonStyle}>{buttonText}</button>;
}

export default Button;
