import Image from "next/image";
import { BiSolidQuoteRight } from "react-icons/bi";
import styles from "./believe.module.css";

function SingleSlider() {
  return (
    <div className={styles.slider}>
      <div>
        <span>
          <BiSolidQuoteRight className={styles.qIcon} />
        </span>
        <p>some thing smdbs sdhfsmbv sjdbvsdv </p>
        <h1>Mohammad Irfan Mahmud</h1>
        <h2> 11 class Dhaka Cantonment High School</h2>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/Live_and_Recorded_Class_m1e0eg.webp"
          width={400}
          height={300}
          // fill
          className={styles.img}
          alt="#"
        />
      </div>
    </div>
  );
}

export default SingleSlider;
