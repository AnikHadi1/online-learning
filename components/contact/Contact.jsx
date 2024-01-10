import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { HiOutlineBellAlert } from "react-icons/hi2";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.firstSection}>
          <h1>যেকোনো প্রয়োজনে কল করো এখনই</h1>
          <p>
            শিখোর কোর্স, তোমার পড়াশোনা, প্রোমো কোড অথবা যেকোনো জিজ্ঞাসায় কল
            করো
          </p>
          <h2>সকাল ৯ টা - রাত ১০ টা</h2>
          <button>
            <span></span> 16780
          </button>
          <div className={styles.imgContainer}>
            <Image
              src="https://i.ibb.co/tsWFfzP/fjxcshigbbfy0uc9ofqa.png"
              alt="#"
              width={100}
              height={100}
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.secondFirstSec}>
          <div>
            <h1>ফ্রি ভিডিও লাইব্রেরি</h1>
            <button>Video Watch</button>
          </div>
          <div>
            <span>
              <HiOutlineBellAlert />{" "}
            </span>
            <span>
              <Image
                src="https://i.ibb.co/2ZL96dj/youtube.png"
                alt="youtube"
                width={70}
                height={70}
              />
            </span>
          </div>
        </div>
        <div className={styles.secondSecondSec}>
          <div>
            <h1>Shikho ফেসবুক গ্রুপ</h1>
            <button>Join This group Now</button>
          </div>
          <div>
            <span>
              <AiFillLike />
            </span>
            <span>
              <Image
                src="https://i.ibb.co/xDjNhPM/facebook.png"
                alt="facebook"
                width={70}
                height={70}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
