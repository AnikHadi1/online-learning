"use client";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import styles from "./videoSlider.module.css";

function VideoSlide({ video }) {
  const allVideo = [...video];
  const [currentIndex, setCurrentIndex] = useState(7);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % allVideo.length);
    }, 3000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [currentIndex]);

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

  let currentVideo = allVideo.slice(currentIndex - 4, currentIndex);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderSubContainer}>
        <VideoCard video={currentVideo} />

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

export default VideoSlide;
