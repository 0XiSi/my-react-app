import styles from "./UserGreeding.module.css";
import PropTypes from "prop-types";

function UserGreeding(props) {
  const welcomeMessage = (
    <h2 className={styles.welcomeMessage}>Welcome {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className={styles.loginPrompt}>Please log in to continue</h2>
  );
  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}
UserGreeding.proptypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};
UserGreeding.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
};
export default UserGreeding;
