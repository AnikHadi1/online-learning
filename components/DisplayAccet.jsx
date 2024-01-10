import styles from "./component.module.css";
export default function DisplayAccet() {
  return (
    <div className={styles.display_assert}>
      <div className={styles.assert1}>
        <h2>{`${"25 lak"}+`}</h2>
        <p>Students</p>
      </div>
      <div className={styles.assert2}>
        <h2>{`${"50 person"}+`}</h2>
        <p>Skill mentors</p>
      </div>
      <div className={styles.assert3}>
        <h2>{`${"10 lak"}+`}</h2>
        <p>App Download</p>
      </div>
      <div className={styles.assert4}>
        <h2>{`${"1.8 lak"}+`}</h2>
        <p>Learning Material</p>
      </div>
    </div>
  );
}
