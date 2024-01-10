"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./carousel.module.css";

const image = [
  { image: "https://picsum.photos/id/1/1280/500" },
  { image: "https://picsum.photos/id/27/1280/500" },
  { image: "https://picsum.photos/id/58/1280/500" },
  { image: "https://picsum.photos/id/85/1280/500" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % image.length);
    }, 3000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [currentIndex]);

  const handlePrev = () => {
    clearInterval(intervalId);
    setCurrentIndex((prev) => {
      return prev === 0 ? image.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    clearInterval(intervalId);
    setCurrentIndex((prev) => {
      return prev === image.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel_slide}>
        {image.map((image, i) => {
          let isActive = i === currentIndex;
          return (
            <div
              key={i}
              className={` ${styles.carousel_list}  ${
                isActive ? `${styles.active}` : ""
              }`}
            >
              <Image
                src={image.image}
                fill
                sizes="100vw"
                alt="Slider image"
                className={styles.img}
              />
            </div>
          );
        })}
      </div>

      {/* Button prev and next */}
      <div className={styles.btnContainer}>
        <div>
          <button onClick={handlePrev} className={styles.btn}>{`<`}</button>
          <button onClick={handleNext} className={styles.btn}>
            {`>`}{" "}
          </button>
        </div>
      </div>

      {/* dots */}
      <ul className={styles.dotBtn}>
        {image.map((_, i) => {
          return (
            <li
              key={i}
              className={`${styles.dotBtn_item} ${
                i === currentIndex ? `${styles.active}` : ""
              }`}
              onClick={() => setCurrentIndex(i)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
