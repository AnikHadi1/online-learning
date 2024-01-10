import Link from "next/link";
import styles from "./home.module.css";

function NotFound() {
  return (
    <div className={styles.not_found_container}>
      <h1>Not Found</h1>
      <p>Sorry, You want to see this page was not found!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFound;
