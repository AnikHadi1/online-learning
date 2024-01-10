import VideoSlide from "./VideoSlide";
import getVideo from "./getVideo/getVideo";
import styles from "./videoSlider.module.css";

async function ClassVideoSlider() {
  const allVideoSlides = await getVideo();
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>দারুণ সব অ্যানিমেটেড উদাহরণের ভিডিও লেসনে শেখা হবে আরও সহজ</h1>
        <h4>
          সেরা মেন্টরদের তৈরি চমৎকার সব অ্যানিমেটেড উদাহরণ দিয়ে সাজানো ভিডিও
          লেসন দেখে সহজেই শিখে ক্লাসে-পরীক্ষায় এগিয়ে যাও
        </h4>

        <div className={styles.classBtn}>
          <button className={styles.active}>Class 6</button>
          <button>Class 7</button>
          <button>Class 8</button>
          <button>Class 9</button>
          <button>Class 10</button>
        </div>
        <hr />
      </div>
      <VideoSlide video={allVideoSlides.results} />
    </div>
  );
}

export default ClassVideoSlider;
