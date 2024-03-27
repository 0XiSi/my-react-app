import styles from "./Button.module.css";

function Button() {
  let count = 0;

  const handleClick = (e) => (e.target.textContent = count++);

  return (
    <button onDoubleClick={(e) => handleClick(e)} className={styles.button}>
      Click me 😎
    </button>
  );
}

export default Button;
