"use client";
import Image from "next/image";
import { useState } from "react";
import BelieveSlide from "./BelieveSlide";
import styles from "./believe.module.css";

function Believe() {
  const [currentIndex, setCurrentIndex] = useState(7);
  const [intervalId, setIntervalId] = useState(null);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCurrentIndex((currentIndex + 1) % allVideo.length);
  //   }, 3000);
  //   setIntervalId(id);

  //   return () => clearInterval(id);
  // }, [currentIndex]);

  const handlePrev = () => {
    clearInterval(intervalId);
    setCurrentIndex((prev) => {
      return prev === 0 ? allVideo.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    clearInterval(intervalId);
    setCurrentIndex((prev) => {
      return prev === allVideo.length - 1 ? 0 : prev + 1;
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.descContainer}>
          <h2>কেন Shikho-তে আস্থা রাখবে?</h2>
          <p>
            সেরা মেন্টর ও সর্বাধুনিক প্রযুক্তির সাথে সারাদেশের ১০ লক্ষ+
            শিক্ষার্থীর মানসম্মত পড়ালেখা ও পরীক্ষা প্রস্তুতির নির্ভরযোগ্য
            প্রতিষ্ঠান Shikho!
          </p>
        </div>
        <div className={styles.sideContainer}>
          <div>
            <Image src={"./believe/1.svg"} alt="#" width={60} height={60} />
            <span>সেরা কন্টেন্ট</span>
          </div>
          <div>
            <Image src={"./believe/2.svg"} alt="#" width={60} height={60} />
            <span>সহজ স্টাডি ম্যাটেরিয়াল</span>
          </div>
          <div>
            <Image src={"./believe/3.svg"} alt="#" width={60} height={60} />
            <span>স্বল্প খরচে অনেক কিছু</span>
          </div>
          <div>
            <Image src={"./believe/4.svg"} alt="#" width={60} height={60} />
            <span>সাবলীল উপস্থাপনা</span>
          </div>
        </div>
      </div>
      <div className={styles.slideContainer}>
        <BelieveSlide />
        {/* Button prev and next */}
        <div className={styles.btnContainer}>
          <div className="flex justify-between">
            <button onClick={handlePrev} className={styles.btn}>{`<`}</button>
            <button onClick={handleNext} className={styles.btn}>
              {`>`}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Believe;
