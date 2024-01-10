import Image from "next/image";
import styles from "./videoSlider.module.css";

function VideoCard({ video }) {
  return (
    <div className={styles.slider}>
      {video.map((v, i) => {
        return (
          <div key={i} className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src={v.picture?.large}
                alt={v.email}
                fill
                sizes="280px"
                className={styles.img}
              />
            </div>
            <div className={styles.details}>
              <h3>{`${v.name.first} ${v.name.last}`}</h3>
              <p>{v?.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideoCard;
